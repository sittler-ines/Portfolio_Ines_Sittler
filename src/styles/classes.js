// Les suites de classes Tailwind qui reviennent sur plusieurs pages, rangées ici une seule fois.
// Utilisation dans un fichier .astro :  class={`${carte} mt-6`}
// (Tailwind lit aussi ce fichier : toutes ces classes sont bien générées.)

// Largeur du contenu : 1200 px au maximum, marges de 20 px sur mobile et 40 px au-delà
export const conteneur = 'mx-auto w-full max-w-[1240px] px-5 md:max-w-[1280px] md:px-10';

// Le haut de chaque page : fond vert, texte crème (terminé par le composant Vague)
export const haut = 'relative overflow-hidden bg-vert text-creme';

// Grand titre du haut de page, avec l'écho rétro (on ajoute la taille : text-titre ou une autre)
export const titreEcho = 'font-script font-normal text-brun text-shadow-echo';
// Variante pour un mot en crème (ex. « Sittler »)
export const titreEchoClair = 'text-creme text-shadow-echo-clair';

// Titre de section en écriture rétro (on ajoute la couleur : text-moutarde, text-brun…)
export const titreSection = 'font-script font-normal text-section';

// Texte d'introduction en italique (leadHaut : plus grand, sur le fond vert)
export const lead = 'text-lead italic';
export const leadHaut = 'text-lead-haut italic';

// Lien de texte souligné (lienHaut : plus grand et en gras, sur le fond vert)
export const lien = 'font-semibold underline decoration-2 underline-offset-4 hover:decoration-3';
export const lienHaut = 'text-xl font-bold underline decoration-2 underline-offset-4 hover:decoration-3';

// Carte rétro : crème, cernée de brun, ombre décalée moutarde (carteBrune : ombre brune, sur fond coloré)
export const carte = 'overflow-hidden rounded-carte border-4 border-brun bg-creme text-brun shadow-retro';
export const carteBrune = 'overflow-hidden rounded-carte border-4 border-brun bg-creme text-brun shadow-retro-brun';

// Bandeau coloré en haut d'une carte (on ajoute les couleurs : bg-rouge text-creme…)
// En gras : le crème sur rouge ou sur vert compte alors comme « grand texte » et reste lisible
export const carteBandeau = 'border-b-4 border-brun px-6 py-3.5 text-[1.4rem] leading-tight font-bold';

// Champ de formulaire
export const champ = 'min-h-13 w-full rounded-[14px] border-3 border-brun bg-[#fff8e6] px-4 py-3 text-brun focus-visible:outline-rouge focus-visible:outline-offset-2 aria-invalid:border-rouge';

// Texte écrit dans PocketBase (ou les pages légales) : on met en forme les balises qu'il contient
export const texteRiche = [
  '[&>*]:mt-[0.9em] [&>*:first-child]:mt-0',
  '[&_h2]:mt-[1.4em] [&_h2]:text-[1.3rem] [&_h2]:font-semibold',
  '[&_h3]:mt-[1.4em] [&_h3]:text-[1.3rem] [&_h3]:font-semibold',
  '[&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-3',
  '[&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5',
  '[&_img]:rounded-xl [&_img]:border-3 [&_img]:border-brun',
].join(' ');

// Écriture rétro (Yellowtail) pour un texte court
export const script = 'font-script font-normal leading-none';

