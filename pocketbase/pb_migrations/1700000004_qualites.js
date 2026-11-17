/// <reference path="../pb_data/types.d.ts" />
// Collection « qualities » : mes qualités (soft skills), affichées sur l'accueil et la page À propos.
// Tout le monde peut les lire ; seule l'administratrice peut les modifier (tableau de bord).
migrate((app) => {
  const qualities = new Collection({
    type: "base",
    name: "qualities",
    listRule: "",
    viewRule: "",
    fields: [
      { type: "text", name: "name", required: true },
      { type: "number", name: "order" },
    ],
  })
  app.save(qualities)

  // Les qualités choisies par Inès
  const liste = ["Créativité", "Curiosité", "Travail d'équipe", "Autonomie", "Persévérance", "Sens du récit", "Rigueur"]
  liste.forEach((nom, i) => {
    const r = new Record(qualities)
    r.set("name", nom)
    r.set("order", i + 1)
    app.save(r)
  })
}, (app) => {
  app.delete(app.findCollectionByNameOrId("qualities"))
})
