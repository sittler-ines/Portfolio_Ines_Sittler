/// <reference path="../pb_data/types.d.ts" />
// Textes de l'étude de cas d'Olyvia (écrits à partir des réponses d'Inès).
// Chaque champ n'est rempli que s'il est encore vide : rien de ce qu'Inès a déjà écrit
// dans le tableau de bord n'est écrasé.
migrate((app) => {
  let projet
  try { projet = app.findFirstRecordByData("projects", "slug", "olyvia") } catch (_) { return }

  const textes = {
    process:
      "<p>Nous avons organisé le projet sur un tableau Trello, découpé par domaine : gestion de projet, recherche, direction artistique, audiovisuel, WordPress, droit et soutenance. Chaque tâche avait son échéance.</p>" +
      "<p>Pour les vidéos, nous avons recueilli des témoignages de femmes, en visio ou en présentiel selon leurs disponibilités. J'ai ensuite filmé moi-même les plans d'illustration qui accompagnent leur parole, puis j'ai fait le montage.</p>" +
      "<p>Pour le logo, j'ai choisi la pivoine : sa racine est utilisée depuis longtemps dans la médecine traditionnelle chinoise pour soulager les troubles féminins, dont ceux de la ménopause. Elle relie l'identité du site à son sujet.</p>",
    tech:
      "<p>Le site est construit avec WordPress, que j'ai aussi alimenté en contenu.</p>" +
      "<p>Les vidéos existent en deux formats : une version horizontale (16/9) et une version verticale (9/16), pensée pour le téléphone et les réseaux sociaux.</p>" +
      "<p>Côté juridique, j'ai rédigé les mentions légales, la politique de confidentialité et les autorisations de droit à l'image des personnes filmées.</p>",
    result:
      "<p>Le site est en ligne. Il réunit des conseils, une communauté, un forum et une page de témoignages où sont publiées les deux vidéos.</p>",
    link: "https://olyvia.estelle-coulon.fr/",
  }
  let modifie = false
  for (const [champ, valeur] of Object.entries(textes)) {
    if (!projet.get(champ)) { projet.set(champ, valeur); modifie = true }
  }
  if (!projet.get("year")) { projet.set("year", 2026); modifie = true }
  // Rôle et contexte précisés par Inès (elle a réalisé le logo, projet SAÉ 202 de mai 2026)
  const ancienRole = "<p>Sur Olyvia, nous étions trois. Je me suis occupée de la partie vidéo et de la partie légale du site, et j'ai aidé à créer le logo.</p>"
  if (!projet.get("my_role") || projet.get("my_role") === ancienRole) {
    projet.set("my_role", "<p>Nous étions trois. Je me suis occupée de l'audiovisuel (tournage et montage des vidéos de témoignages), de la partie juridique du site et du logo. J'ai aussi participé à la gestion de projet et à l'intégration WordPress.</p>")
    modifie = true
  }
  const ancienContexte = "<p>Un site qui accompagne les femmes à chaque étape de la ménopause : des conseils fiables, des témoignages et une communauté bienveillante. Projet de 1re année de BUT MMI, en équipe de 3.</p>"
  if (projet.get("context") === ancienContexte) {
    projet.set("context", "<p>Un site qui accompagne les femmes à chaque étape de la ménopause : des conseils fiables, des témoignages et une communauté bienveillante. Projet réalisé en équipe de 3 pendant la SAÉ 202 de 1re année de BUT MMI, en mai 2026.</p>")
    modifie = true
  }
  if (modifie) app.save(projet)
}, (app) => {})
