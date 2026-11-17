/// <reference path="../pb_data/types.d.ts" />
// Aegirhall a été réalisé seule : on retire « Travail d'équipe » de ses qualités.
migrate((app) => {
  try {
    const projet = app.findFirstRecordByData("projects", "slug", "aegirhall")
    const equipe = app.findFirstRecordByData("qualities", "name", "Travail d'équipe")
    projet.set("qualities", (projet.get("qualities") || []).filter((id) => id !== equipe.id))
    app.save(projet)
  } catch (_) {} // projet ou qualité introuvable : rien à faire
}, (app) => {})
