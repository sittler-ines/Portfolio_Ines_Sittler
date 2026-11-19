/// <reference path="../pb_data/types.d.ts" />
// Textes de l'étude de cas d'Aegirhall (écrits à partir des réponses d'Inès et du site en ligne).
// Chaque champ n'est rempli que s'il est encore vide (ou s'il contient encore le texte de départ).
migrate((app) => {
  let projet
  try { projet = app.findFirstRecordByData("projects", "slug", "aegirhall") } catch (_) { return }

  const vide = (champ, depart) => !projet.get(champ) || projet.get(champ) === depart
  let modifie = false
  const remplir = (champ, valeur, depart) => { if (vide(champ, depart)) { projet.set(champ, valeur); modifie = true } }

  remplir("context",
    "<p>Le principe de Sam, version viking : un site de barathon où l'on parcourt une route de tavernes en désignant quelqu'un de sobre pour la soirée. Projet collectif du semestre 2 de BUT MMI, en juin 2026.</p>",
    "<p>Le principe de Sam, version viking : on désigne quelqu'un de sobre pour la soirée, avec une option barathon pour choisir son parcours. Projet de 1re année de BUT MMI, réalisé en solo.</p>")
  remplir("my_role",
    "<p>Ce projet était prévu en équipe, mais je l'ai finalement mené seule, de A à Z : identité visuelle, maquette et développement du site.</p>",
    "<p>J'ai réalisé ce site seule, de A à Z.</p>")
  remplir("process",
    "<p>Nous voulions un thème accessible à tout le monde, qui donne une impression de jeu sans en être vraiment un : l'univers viking s'y prêtait bien, avec ses tavernes et ses titres de gloire.</p>" +
    "<p>J'ai d'abord créé l'identité visuelle, puis la maquette dans Figma, et enfin le développement.</p>")
  remplir("tech",
    "<p>Le site est développé avec Astro, Tailwind CSS et JavaScript, avec PocketBase comme base de données.</p>" +
    "<p>PocketBase gère les comptes (inscription et connexion), l'enregistrement de chaque taverne visitée et le classement public des joueurs.</p>")
  remplir("result",
    "<p>Le site est en ligne : « La Route des Jarls » propose une route de tavernes à cocher étape par étape, un classement public, des badges et titres à débloquer, et des sorties de groupe où l'on désigne son SAM.</p>")
  remplir("link", "https://aegirhall.ines-sittler.fr/LandingPage")
  if (!projet.get("year")) { projet.set("year", 2026); modifie = true }

  // Outils : on ajoute JavaScript à Astro et Tailwind
  try {
    const js = app.findFirstRecordByData("skills", "name", "JavaScript")
    const outils = projet.get("skills") || []
    if (!outils.includes(js.id)) { projet.set("skills", [...outils, js.id]); modifie = true }
  } catch (_) {}

  if (modifie) app.save(projet)
}, (app) => {})
