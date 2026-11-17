// Informations générales du site (en-tête, pied de page, contact).
// Pas d'adresse e-mail affichée : on passe par le formulaire de contact (src/pages/contact.astro).
// cv : chemin du CV quand il sera prêt (ex. '/cv-ines-sittler.pdf' dans public/). Tant que c'est null, le bouton est caché.
export const site = {
  nom: 'Inès Sittler',
  role: 'Étudiante en création numérique',
  recherche: "Je cherche un stage dans un studio d'animation ou de jeu vidéo.",
  behance: 'https://www.behance.net/inssittler',
  linkedin: 'https://www.linkedin.com/in/in%C3%A8s-sittler-12148b398/',
  cv: null,
  // Pas de lien « Accueil » : c'est le nom, en haut à gauche, qui ramène à l'accueil.
  nav: [
    { label: 'Projets', href: '/projets' },
    { label: 'À propos', href: '/a-propos' },
    { label: 'Contact', href: '/contact' },
  ],
};
