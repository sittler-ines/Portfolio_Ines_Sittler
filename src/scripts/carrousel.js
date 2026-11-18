// Carrousel : flèches précédent / suivant, et points qui suivent la carte visible.
// Sans JavaScript, la liste défile quand même (défilement aimanté de Tailwind) : les flèches restent cachées.
for (const carrousel of document.querySelectorAll('[data-carrousel]')) {
  const piste = carrousel.querySelector('[data-piste]');
  const cartes = [...piste.children];
  const precedent = carrousel.querySelector('[data-precedent]');
  const suivant = carrousel.querySelector('[data-suivant]');
  const points = [...carrousel.querySelectorAll('[data-point]')];

  const controles = carrousel.querySelector('[data-controles]');
  const zonePoints = carrousel.querySelector('[data-points]');

  // Un « pas » = la distance entre le début de deux cartes
  const pas = () => (cartes[1] ? cartes[1].offsetLeft - cartes[0].offsetLeft : piste.clientWidth);

  precedent.addEventListener('click', () => piste.scrollBy({ left: -pas(), behavior: 'smooth' }));
  suivant.addEventListener('click', () => piste.scrollBy({ left: pas(), behavior: 'smooth' }));

  // Met à jour le point actif et désactive les flèches au début et à la fin
  function mettreAJour() {
    // Flèches et points seulement s'il y a des cartes cachées à faire défiler
    // (sur grand écran, les 3 projets tiennent en entier : rien à afficher)
    const aDefiler = piste.scrollWidth > piste.clientWidth + 2;
    controles.hidden = !aDefiler;
    zonePoints.hidden = !aDefiler;
    const index = Math.round(piste.scrollLeft / pas());
    points.forEach((p, i) => p.toggleAttribute('data-actif', i === index));
    precedent.disabled = piste.scrollLeft <= 2;
    suivant.disabled = piste.scrollLeft + piste.clientWidth >= piste.scrollWidth - 2;
  }

  piste.addEventListener('scroll', mettreAJour, { passive: true });
  window.addEventListener('resize', mettreAJour);
  mettreAJour();
}
