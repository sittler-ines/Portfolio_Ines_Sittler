// Galerie : un clic sur une image l'ouvre en grand dans une fenêtre (<dialog>).
// Dans la fenêtre : flèches (ou touches ← →) pour passer d'une image à l'autre,
// bouton ✕, touche Échap ou clic à côté de l'image pour fermer.
for (const galerie of document.querySelectorAll('[data-galerie]')) {
  const vignettes = [...galerie.querySelectorAll('[data-image]')];
  const fenetre = galerie.querySelector('[data-fenetre]');
  const grande = fenetre.querySelector('[data-grande]');
  const compteur = fenetre.querySelector('[data-compteur]');
  let actuelle = 0;

  // Affiche l'image numéro n (on revient au début après la dernière)
  function afficher(n) {
    actuelle = (n + vignettes.length) % vignettes.length;
    const image = vignettes[actuelle].querySelector('img');
    grande.src = image.src;
    grande.alt = image.alt;
    compteur.textContent = `${actuelle + 1} / ${vignettes.length}`;
  }

  vignettes.forEach((bouton, i) => bouton.addEventListener('click', () => {
    afficher(i);
    fenetre.showModal(); // ouvre la fenêtre (Échap la ferme automatiquement)
  }));

  fenetre.querySelector('[data-fermer]').addEventListener('click', () => fenetre.close());
  fenetre.querySelector('[data-precedente]').addEventListener('click', () => afficher(actuelle - 1));
  fenetre.querySelector('[data-suivante]').addEventListener('click', () => afficher(actuelle + 1));

  // Clic sur le fond (à côté de l'image et des boutons) : on ferme
  fenetre.addEventListener('click', (e) => {
    if (e.target === fenetre || e.target === fenetre.firstElementChild) fenetre.close();
  });

  // Flèches du clavier
  fenetre.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') afficher(actuelle - 1);
    if (e.key === 'ArrowRight') afficher(actuelle + 1);
  });

  // Quand la fenêtre se ferme, le focus revient sur l'image qui avait été ouverte
  fenetre.addEventListener('close', () => vignettes[actuelle].focus());
}
