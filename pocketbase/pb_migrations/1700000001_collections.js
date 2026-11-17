/// <reference path="../pb_data/types.d.ts" />
// Crée les 3 collections du portfolio :
// - projects : les projets, avec les 5 parties de l'étude de cas demandées par les consignes
// - skills   : les compétences (page À propos)
// - messages : les messages envoyés par le formulaire de contact
// Règles : tout le monde peut LIRE les projets et les compétences ;
// tout le monde peut ENVOYER un message, mais seule l'administratrice peut les lire.
migrate((app) => {
  const image = { maxSize: 10485760, mimeTypes: ["image/jpeg", "image/png", "image/webp", "image/gif"] }

  const projects = new Collection({
    type: "base",
    name: "projects",
    listRule: "",
    viewRule: "",
    fields: [
      { type: "text", name: "title", required: true },
      { type: "text", name: "slug", required: true, pattern: "^[a-z0-9-]+$" },
      { type: "select", name: "type", required: true, maxSelect: 1, values: ["pro", "perso"] },
      { type: "number", name: "year" },
      { type: "text", name: "summary" },
      { type: "text", name: "role" },
      { type: "text", name: "team" },
      { type: "text", name: "tools" },
      { type: "editor", name: "context" },
      { type: "editor", name: "my_role" },
      { type: "editor", name: "process" },
      { type: "editor", name: "tech" },
      { type: "editor", name: "result" },
      { type: "file", name: "cover", maxSelect: 1, ...image },
      { type: "file", name: "gallery", maxSelect: 20, ...image },
      { type: "url", name: "link" },
      { type: "url", name: "video" },
      { type: "number", name: "order" },
    ],
    indexes: ["CREATE UNIQUE INDEX idx_projects_slug ON projects (slug)"],
  })
  app.save(projects)

  const skills = new Collection({
    type: "base",
    name: "skills",
    listRule: "",
    viewRule: "",
    fields: [
      { type: "text", name: "name", required: true },
      { type: "text", name: "category" },
      { type: "number", name: "order" },
    ],
  })
  app.save(skills)

  const messages = new Collection({
    type: "base",
    name: "messages",
    createRule: "",
    fields: [
      { type: "text", name: "name", required: true, max: 100 },
      { type: "email", name: "email", required: true },
      { type: "text", name: "message", required: true, max: 5000 },
      { type: "autodate", name: "created", onCreate: true },
    ],
  })
  app.save(messages)
}, (app) => {
  for (const nom of ["messages", "skills", "projects"]) {
    try { app.delete(app.findCollectionByNameOrId(nom)) } catch (_) {}
  }
})
