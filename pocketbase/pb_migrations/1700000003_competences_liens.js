/// <reference path="../pb_data/types.d.ts" />
// Ajoute aux compétences :
// - link : l'adresse du site officiel de l'outil (le logo de la page À propos y mène) ;
// - logo : un logo à envoyer soi-même (facultatif). Sans lui, le site prend le logo
//          rangé dans src/logos/ (ou la première lettre du nom s'il n'y en a pas).
migrate((app) => {
  const skills = app.findCollectionByNameOrId("skills")
  skills.fields.add(new URLField({ name: "link" }))
  skills.fields.add(new FileField({
    name: "logo",
    maxSelect: 1,
    maxSize: 1048576,
    mimeTypes: ["image/svg+xml", "image/png", "image/webp"],
  }))
  app.save(skills)

  const liens = {
    "HTML": "https://developer.mozilla.org/fr/docs/Web/HTML",
    "CSS": "https://developer.mozilla.org/fr/docs/Web/CSS",
    "JavaScript": "https://developer.mozilla.org/fr/docs/Web/JavaScript",
    "Astro": "https://astro.build",
    "Tailwind": "https://tailwindcss.com",
    "WordPress": "https://fr.wordpress.org",
    "VS Code": "https://code.visualstudio.com",
    "GitHub": "https://github.com",
    "Netlify": "https://www.netlify.com",
    "Infomaniak": "https://www.infomaniak.com/fr",
    "Figma": "https://www.figma.com",
    "Affinity": "https://www.affinity.studio",
    "DaVinci Resolve": "https://www.blackmagicdesign.com/fr/products/davinciresolve",
    "Procreate": "https://procreate.com",
  }
  for (const [nom, url] of Object.entries(liens)) {
    try {
      const r = app.findFirstRecordByData("skills", "name", nom)
      r.set("link", url)
      app.save(r)
    } catch (_) {} // compétence supprimée ou renommée : on passe
  }
}, (app) => {
  const skills = app.findCollectionByNameOrId("skills")
  skills.fields.removeByName("link")
  skills.fields.removeByName("logo")
  app.save(skills)
})
