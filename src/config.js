// Informations générales du site (en-tête, pied de page, contact).
// Pas d'adresse e-mail affichée : on passe par le formulaire de contact (src/pages/contact.astro).
// cv : chemin du CV quand il sera prêt (ex. '/cv-ines-sittler.pdf' dans public/). Tant que c'est null, le bouton est caché.
export const site = {
  nom: 'Inès Sittler',
  role: 'Étudiante en création numérique',
  recherche: "En recherche d'un stage en création visuelle, du 29 mars au 4 juin 2027.",
  behance: 'https://www.behance.net/inssittler',
  linkedin: 'https://www.linkedin.com/in/in%C3%A8s-sittler-12148b398/',
  cv: '/cv-ines-sittler.pdf',
  // Pas de lien « Accueil » : c'est le nom, en haut à gauche, qui ramène à l'accueil.
  nav: [
    { label: 'Projets', href: '/projets' },
    { label: 'À propos', href: '/a-propos' },
    { label: 'Contact', href: '/contact' },
  ],
};
