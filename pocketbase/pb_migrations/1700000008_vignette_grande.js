/// <reference path="../pb_data/types.d.ts" />
// Ajoute une version de 1200 px de la capture, pour la grande image en haut de la page d'un projet
// (le téléphone charge la vignette de 800 px, l'ordinateur celle de 1200 px).
migrate((app) => {
  const projets = app.findCollectionByNameOrId("projects")
  projets.fields.getByName("cover").thumbs = ["400x0", "800x0", "1200x0"]
  app.save(projets)
}, (app) => {
  const projets = app.findCollectionByNameOrId("projects")
  projets.fields.getByName("cover").thumbs = ["400x0", "800x0"]
  app.save(projets)
})
