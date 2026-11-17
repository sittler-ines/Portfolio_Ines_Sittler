// Menu mobile : ouvrir, fermer (bouton, lien ou touche Échap), bloquer le défilement derrière.
const bouton = document.getElementById('menu-bouton');
const panneau = document.getElementById('menu-mobile');
const fermer = document.getElementById('menu-fermer');

function regler(ouvert) {
  panneau.hidden = !ouvert; // l'attribut hidden cache ou affiche le menu
  bouton.setAttribute('aria-expanded', String(ouvert));
  document.body.style.overflow = ouvert ? 'hidden' : '';
  // On place le focus clavier sur le bon bouton
  (ouvert ? fermer : bouton).focus();
}

if (bouton && panneau && fermer) {
  bouton.addEventListener('click', () => regler(true));
  fermer.addEventListener('click', () => regler(false));
  panneau.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => regler(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !panneau.hidden) regler(false);
  });
}
