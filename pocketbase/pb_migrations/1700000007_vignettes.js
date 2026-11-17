/// <reference path="../pb_data/types.d.ts" />
// Autorise PocketBase à fabriquer des petites versions (vignettes) des captures de projet :
// 400 px et 800 px de large, hauteur proportionnelle. Les cartes de projet les utilisent :
// le navigateur choisit la plus adaptée à l'écran, la page charge plus vite.
migrate((app) => {
  const projets = app.findCollectionByNameOrId("projects")
  projets.fields.getByName("cover").thumbs = ["400x0", "800x0"]
  app.save(projets)
}, (app) => {
  const projets = app.findCollectionByNameOrId("projects")
  projets.fields.getByName("cover").thumbs = []
  app.save(projets)
})
