/// <reference path="../pb_data/types.d.ts" />
// Ajoute les outils qu'Inès utilise aussi (logos dans src/logos/, même nom sans accents ni espaces).
// Un outil n'est ajouté que s'il n'existe pas déjà.
migrate((app) => {
  const competences = app.findCollectionByNameOrId("skills")
  const outils = [
    ["Alpine.js", "Développement web", "https://alpinejs.dev"],
    ["SQLite", "Développement web", "https://www.sqlite.org"],
    ["Observable", "Développement web", "https://observablehq.com"],
    ["PocketBase", "Outils et mise en ligne", "https://pocketbase.io"],
    ["DataGrip", "Outils et mise en ligne", "https://www.jetbrains.com/datagrip/"],
    ["Jira", "Outils et mise en ligne", "https://www.atlassian.com/software/jira"],
    ["Notion", "Outils et mise en ligne", "https://www.notion.so"],
    ["Trello", "Outils et mise en ligne", "https://trello.com"],
    ["Canva", "Création", "https://www.canva.com"],
  ]
  outils.forEach(([nom, categorie, lien], i) => {
    try { app.findFirstRecordByData("skills", "name", nom); return } catch (_) {} // existe déjà
    const r = new Record(competences)
    r.set("name", nom)
    r.set("category", categorie)
    r.set("link", lien)
    r.set("order", 15 + i)
    app.save(r)
  })
}, (app) => {})
