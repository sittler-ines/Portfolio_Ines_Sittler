/// <reference path="../pb_data/types.d.ts" />
// Textes de l'étude de cas de FlyTapFest (écrits à partir des réponses d'Inès et du site en ligne).
// Chaque champ n'est rempli que s'il est encore vide (ou s'il contient encore le texte de départ).
migrate((app) => {
  let projet
  try { projet = app.findFirstRecordByData("projects", "slug", "flytapfest") } catch (_) { return }

  let modifie = false
  const remplir = (champ, valeur, depart) => {
    if (!projet.get(champ) || projet.get(champ) === depart) { projet.set(champ, valeur); modifie = true }
  }

  remplir("context",
    "<p>Le site d'un festival qui mêle claquettes, création lumineuse et drones, au parc du Pré-la-Rose à Montbéliard. SAÉ de BUT MMI, en décembre 2025.</p>",
    "<p>Le site d'un festival qui mêle claquettes, création lumineuse et drones, au parc du Pré-la-Rose à Montbéliard. SAÉ de 1re année de BUT MMI.</p>")
  remplir("my_role",
    "<p>J'ai réalisé seule le développement du site, à partir d'un design créé lors d'une SAÉ précédente.</p>",
    "<p>Je me suis occupée du développement du site.</p>")
  remplir("team", "Seule")
  remplir("process",
    "<p>Je suis partie d'une maquette existante, conçue pendant une SAÉ précédente, et je l'ai transformée en site complet : Le Festival, Programme, Artistes, Scènes, Infos et Contact.</p>" +
    "<p>Le plus délicat a été la typographie : retrouver dans le navigateur le rendu des titres de la maquette, sur ordinateur comme sur mobile.</p>")
  remplir("tech",
    "<p>Le site est développé en HTML, CSS et JavaScript, avec PocketBase comme base de données pour le contenu du festival et l'espace de connexion.</p>")
  remplir("result",
    "<p>Le site est en ligne, avec le programme, les pages artistes et scènes, et les informations pratiques : tarifs, accès, FAQ et services sur place.</p>")
  remplir("link", "https://flytapfest.ines-sittler.fr/")
  if (!projet.get("year")) { projet.set("year", 2025); modifie = true }

  // Outils : on ajoute JavaScript à HTML et CSS
  try {
    const js = app.findFirstRecordByData("skills", "name", "JavaScript")
    const outils = projet.get("skills") || []
    if (!outils.includes(js.id)) { projet.set("skills", [...outils, js.id]); modifie = true }
  } catch (_) {}

  if (modifie) app.save(projet)
}, (app) => {})
