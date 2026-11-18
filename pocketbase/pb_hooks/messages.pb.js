/// <reference path="../pb_data/types.d.ts" />
// Formulaire de contact : quand un message est enregistré dans la collection « messages »,
// PocketBase m'envoie un e-mail avec le serveur SMTP réglé dans le tableau de bord
// (Settings → Mail settings).
// Destinataire : la variable d'environnement CONTACT_EMAIL si elle existe,
// sinon l'adresse d'expéditeur des réglages. Aucune adresse n'est écrite dans le code.
onRecordAfterCreateSuccess((e) => {
  const r = e.record
  const meta = e.app.settings().meta
  const destinataire = $os.getenv("CONTACT_EMAIL") || meta.senderAddress

  // On protège le texte avant de le mettre dans l'e-mail en HTML
  const proteger = (texte) => String(texte || "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

  const nom = r.get("name"), email = r.get("email"), texte = r.get("message")

  const message = new MailerMessage({
    from: { address: meta.senderAddress, name: meta.senderName },
    to: [{ address: destinataire }],
    subject: "Nouveau message du portfolio : " + nom,
    html: "<p><strong>De :</strong> " + proteger(nom) + " (" + proteger(email) + ")</p>"
      + "<p>" + proteger(texte).replace(/\n/g, "<br>") + "</p>",
    text: "De : " + nom + " (" + email + ")\n\n" + texte,
    // « Répondre » dans ma boîte mail écrit directement à la personne
    headers: { "Reply-To": email },
  })

  try {
    e.app.newMailClient().send(message)
  } catch (erreur) {
    // Si l'envoi échoue, le message reste enregistré dans PocketBase : rien n'est perdu
    e.app.logger().error("Envoi de l'e-mail de contact impossible", "erreur", String(erreur))
  }

  e.next()
}, "messages")
