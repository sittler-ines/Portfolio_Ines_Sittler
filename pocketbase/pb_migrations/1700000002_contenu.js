/// <reference path="../pb_data/types.d.ts" />
// Contenu de départ : les 3 projets et les compétences d'Inès (ses vrais textes, rien d'inventé).
// Les parties « processus », « choix techniques » et « résultat » sont à écrire par Inès
// dans le tableau de bord de PocketBase (http://127.0.0.1:8090/_/).
// Les captures des projets s'ajoutent ensuite dans le tableau de bord (champ « cover »).
migrate((app) => {
  const projets = app.findCollectionByNameOrId("projects")
  const liste = [
    {
      slug: "olyvia", title: "Olyvia", type: "pro",
      summary: "Un site qui accompagne les femmes à chaque étape de la ménopause : des conseils fiables, des témoignages et une communauté bienveillante.",
      role: "La vidéo, la partie légale et le logo",
      team: "Équipe de 3",
      tools: "WordPress",
      context: "<p>Un site qui accompagne les femmes à chaque étape de la ménopause : des conseils fiables, des témoignages et une communauté bienveillante. Projet de 1re année de BUT MMI, en équipe de 3.</p>",
      my_role: "<p>Sur Olyvia, nous étions trois. Je me suis occupée de la partie vidéo et de la partie légale du site, et j'ai aidé à créer le logo.</p>",
    },
    {
      slug: "aegirhall", title: "Aegirhall", type: "pro",
      summary: "Le principe de Sam, version viking : on désigne quelqu'un de sobre pour la soirée, avec une option barathon pour choisir son parcours.",
      role: "Un site réalisé seule, de A à Z",
      team: "Seule",
      tools: "",
      context: "<p>Le principe de Sam, version viking : on désigne quelqu'un de sobre pour la soirée, avec une option barathon pour choisir son parcours. Projet de 1re année de BUT MMI, réalisé en solo.</p>",
      my_role: "<p>J'ai réalisé ce site seule, de A à Z.</p>",
    },
    {
      slug: "flytapfest", title: "FlyTapFest", type: "pro",
      summary: "Le site d'un festival qui mêle claquettes, création lumineuse et drones, au parc du Pré-la-Rose à Montbéliard.",
      role: "Le développement du site",
      team: "",
      tools: "",
      context: "<p>Le site d'un festival qui mêle claquettes, création lumineuse et drones, au parc du Pré-la-Rose à Montbéliard. SAÉ de 1re année de BUT MMI.</p>",
      my_role: "<p>Je me suis occupée du développement du site.</p>",
    },
  ]
  liste.forEach((p, i) => {
    const r = new Record(projets)
    for (const champ of ["title", "slug", "type", "summary", "role", "team", "tools", "context", "my_role"]) r.set(champ, p[champ])
    r.set("order", i + 1)
    app.save(r)
  })

  const competences = app.findCollectionByNameOrId("skills")
  const liste2 = [
    ["HTML", "Développement web"], ["CSS", "Développement web"], ["JavaScript", "Développement web"],
    ["Astro", "Développement web"], ["Tailwind", "Développement web"], ["WordPress", "Développement web"],
    ["VS Code", "Outils et mise en ligne"], ["GitHub", "Outils et mise en ligne"], ["Netlify", "Outils et mise en ligne"], ["Infomaniak", "Outils et mise en ligne"],
    ["Figma", "Création"], ["Affinity", "Création"], ["DaVinci Resolve", "Création"], ["Procreate", "Création"],
  ]
  liste2.forEach(([nom, categorie], i) => {
    const r = new Record(competences)
    r.set("name", nom)
    r.set("category", categorie)
    r.set("order", i + 1)
    app.save(r)
  })
}, (app) => {
  for (const r of app.findAllRecords("projects")) app.delete(r)
  for (const r of app.findAllRecords("skills")) app.delete(r)
})
