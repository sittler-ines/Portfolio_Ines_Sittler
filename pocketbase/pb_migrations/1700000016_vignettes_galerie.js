/// <reference path="../pb_data/types.d.ts" />
// Petites versions des images, pour ne charger que la taille utile :
// - galerie (400 et 800 px) : la première image sert d'image pour la carte du projet ;
// - mockup (400, 800 et 1200 px) : image à côté du titre sur la page du projet.
migrate((app) => {
  const projets = app.findCollectionByNameOrId("projects")
  projets.fields.getByName("gallery").thumbs = ["400x0", "800x0"]
  projets.fields.getByName("mockup").thumbs = ["400x0", "800x0", "1200x0"]
  app.save(projets)
}, (app) => {
  const projets = app.findCollectionByNameOrId("projects")
  projets.fields.getByName("gallery").thumbs = []
  projets.fields.getByName("mockup").thumbs = ["800x0"]
  app.save(projets)
})
