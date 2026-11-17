/// <reference path="../pb_data/types.d.ts" />
// Relie chaque projet à ses outils (collection skills, avec leurs logos) et à mes qualités
// (collection qualities). Dans le tableau de bord, on les coche dans une liste.
migrate((app) => {
  const projets = app.findCollectionByNameOrId("projects")
  const skills = app.findCollectionByNameOrId("skills")
  const qualities = app.findCollectionByNameOrId("qualities")
  projets.fields.add(new RelationField({ name: "skills", collectionId: skills.id, maxSelect: 30, cascadeDelete: false }))
  projets.fields.add(new RelationField({ name: "qualities", collectionId: qualities.id, maxSelect: 30, cascadeDelete: false }))
  app.save(projets)

  // Outils de chaque projet (donnés par Inès)
  const outils = {
    olyvia: ["WordPress"],
    aegirhall: ["Astro", "Tailwind"],
    flytapfest: ["HTML", "CSS"],
  }
  // Mes qualités : les mêmes que sur l'accueil pour chaque projet (Inès peut en retirer ensuite)
  const toutesQualites = app.findRecordsByFilter("qualities", "id != ''", "order", 0, 0).map((q) => q.id)

  for (const [slug, noms] of Object.entries(outils)) {
    try {
      const projet = app.findFirstRecordByData("projects", "slug", slug)
      const ids = []
      for (const nom of noms) {
        try { ids.push(app.findFirstRecordByData("skills", "name", nom).id) } catch (_) {}
      }
      projet.set("skills", ids)
      projet.set("qualities", toutesQualites)
      app.save(projet)
    } catch (_) {} // projet supprimé ou renommé : on passe
  }
}, (app) => {
  const projets = app.findCollectionByNameOrId("projects")
  projets.fields.removeByName("skills")
  projets.fields.removeByName("qualities")
  app.save(projets)
})
