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

  // Nombre de positions possibles : s'il y a 5 cartes et que 3 sont visibles à la fois,
  // on peut seulement afficher les cartes 1-3, 2-4 ou 3-5, soit 3 positions.
  const positions = () => {
    const visibles = Math.max(1, Math.round(piste.clientWidth / pas()));
    return Math.max(1, cartes.length - visibles + 1);
  };

  // Un clic sur un point fait défiler jusqu'à sa position
  points.forEach((point, i) => point.addEventListener('click', () => piste.scrollTo({ left: i * pas(), behavior: 'smooth' })));

  // Met à jour le point actif et désactive les flèches au début et à la fin
  function mettreAJour() {
    // Flèches et points seulement s'il y a des cartes cachées à faire défiler
    // (si tous les projets tiennent en entier sur l'écran : rien à afficher)
    const aDefiler = piste.scrollWidth > piste.clientWidth + 2;
    controles.hidden = !aDefiler;
    zonePoints.hidden = !aDefiler;
    const fin = piste.scrollLeft + piste.clientWidth >= piste.scrollWidth - 2;
    const total = positions();
    // Au bout de la piste, c'est toujours le dernier point qui est actif
    const index = fin ? total - 1 : Math.round(piste.scrollLeft / pas());
    points.forEach((p, i) => {
      p.hidden = i >= total; // on cache les points des positions impossibles
      p.toggleAttribute('data-actif', i === index);
    });
    precedent.disabled = piste.scrollLeft <= 2;
    suivant.disabled = fin;
  }

  piste.addEventListener('scroll', mettreAJour, { passive: true });
  window.addEventListener('resize', mettreAJour);
  mettreAJour();
}
