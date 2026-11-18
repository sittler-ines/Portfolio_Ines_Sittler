/// <reference path="../pb_data/types.d.ts" />
// Ajoute aux projets un champ « mockup » : l'image affichée à côté du titre, en haut de la page
// du projet (un mockup ou un petit visuel). S'il est vide, le site affiche la capture (« cover »).
migrate((app) => {
  const projets = app.findCollectionByNameOrId("projects")
  projets.fields.add(new FileField({
    name: "mockup",
    maxSelect: 1,
    maxSize: 10485760,
    mimeTypes: ["image/jpeg", "image/png", "image/webp", "image/gif"],
    thumbs: ["800x0"],
  }))
  app.save(projets)
}, (app) => {
  const projets = app.findCollectionByNameOrId("projects")
  projets.fields.removeByName("mockup")
  app.save(projets)
})
