## Projet

Portfolio d'Inès Sittler (BUT MMI 2, Montbéliard). Cible : studios d'animation 2D/3D et de jeux vidéo. Elle cherche **un stage**. Sa différence : son côté vintage. Consignes des profs : 3 projets en étude de cas (contexte, rôle, processus, choix techniques, résultat), à propos en « je », contact fonctionnel, `IA.md`, `JOURNAL.md`, `QUALITE.md` dans le dépôt.
Maquette de référence : Figma, page « Prototype — Rétro + Base v2 » (desktop et mobile, navigable).

## Direction artistique (ne pas changer sans Inès)

- Palette STRICTE : crème `#F2DFA8`, rouge `#C83F3A`, orange `#E47B45`, vert `#6F7D3C`, moutarde `#E2A83B`, brun `#35251F`.
- Haut de chaque page (et en-tête) VERT avec formes de lave qui flottent (animation `lave`), terminé par une vague vers le fond brun. Sur ce vert, texte crème en grand seulement (lead 24px, liens 20px gras) ou dans une carte crème.
- Accueil : « Ce que je fais » est un grand bloc orange qui arrive et repart avec une trame de points (composant `Trame`). Pas de lien « Accueil » dans le menu (le nom y ramène). Aucune adresse e-mail affichée : tout passe par le formulaire.
- Yellowtail pour le nom et les titres (avec l'écho moutarde + rouge : `.titre-echo`), Gelasio pour le texte.
- Cartes rétro : crème, contour brun 4px, ombre décalée moutarde (`.carte`, `.carte-bandeau`). Projets de l'accueil en carrousel.
- Tout est droit et aligné. Contrastes : jamais de petit texte crème sur orange/vert ni de petit texte rouge sur crème.
- Refusé : polices rondes grasses (« Burger King »), Shrikhand, Kalnia, Parisienne ; mise en page magazine ; fond crème plat ; décors au hasard (petits ronds éparpillés — la trame de points de transition est voulue —, rubans, damier, rayons, grain) ; thème couture ; saisonnier ; cadres façon tableaux ; étiquettes en capitales « N° 01 ».

## Règles de travail

- Ne jamais inventer de texte sur Inès ou ses projets : lui demander.
- Code simple et commenté : elle doit pouvoir l'expliquer ligne par ligne au jury.
- Ne jamais faire de commit sans sa demande. Pas de mention de Claude dans les commits.
- Vérifier en capture (mobile 390 px dans une iframe, Chrome sans tête refuse les fenêtres étroites).

## Technique

- Astro SSR (`@astrojs/node`), Tailwind v4, JS vanilla dans `src/scripts/`.
- **Tout le style est en classes Tailwind dans les `.astro` : aucun bloc `<style>`, aucune classe CSS maison.** `src/styles/global.css` ne contient que `@theme` (couleurs `creme`… `brun`, polices `font-script`/`font-texte`, tailles `text-titre`/`text-section`/`text-carte`/`text-lead`/`text-lead-haut`, ombres `shadow-retro`/`shadow-retro-brun`/`shadow-bouton`…, `text-shadow-echo`, `rounded-carte`, `animate-perso`) et une petite `@layer base` (focus, réduction des animations).
- Les suites de classes répétées sont des constantes dans `src/styles/classes.js` (`conteneur`, `haut`, `titreEcho`, `titreSection`, `lead`/`leadHaut`, `lien`/`lienHaut`, `carte`/`carteBrune`, `carteBandeau`, `champ`, `texteRiche`, `script`, `perso`), utilisées avec `class={`${carte} mt-6`}`. Ne pas mettre deux classes qui règlent la même propriété (ex. deux ombres) : utiliser la variante (`carteBrune`).
- Le JS cible des attributs `data-*` (pas des classes) : `data-piste`, `data-point`/`data-actif`, `data-lave`.
- Classes Tailwind de couleur écrites en entier (pas de `bg-${x}`).
- PocketBase : `npm run db` (port 8090) puis `npm run dev` (port 4330). Collections `projects`, `skills` (lien + logo), `qualities` (soft skills choisies par Inès), `messages` créées par `pocketbase/pb_migrations/`.
- `src/lib/pocketbase.js` : `getProjets({ type })`, `getProjet(slug)`, `getCompetences()` (groupées par catégorie), `getQualites()`, `envoyerMessage()`. Les lectures ne plantent jamais.
- Composants : `Header`, `Footer`, `Bouton` (`couleur` : moutarde/creme/rouge), `Vague`, `Trame` (`sens` descend/monte, `id` unique), `Competence` (tuile logo + lien ; logos dans `src/logos/`, nommés comme la compétence sans accents ni espaces), `FormeLave` (`forme`, `couleur`), `CarteProjet`, `Carrousel`.
- Infos du site (Behance, LinkedIn, CV, phrase de recherche) : `src/config.js`.
