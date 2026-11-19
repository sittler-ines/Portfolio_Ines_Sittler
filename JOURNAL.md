# Journal de bord

## Semaine du 28 septembre 2026
- Premier portfolio dans une direction artistique victorienne, à partir de mon moodboard.
- Plusieurs pistes écartées car trop génériques : étiquettes numérotées, animations de titres, motifs chargés.
- Choix de deux polices et d'un thème clair ; maquettes desktop et mobile dans Figma.
- Principe retenu : des idées simples (mise en page, typographie, couleurs) que je peux reproduire moi-même dans Figma.

## Semaine du 5 octobre 2026
- Suite de la version victorienne : projets présentés comme des tableaux, compétences en étagères.
- Rédaction de mes textes (présentation, parcours, projets) et choix de mes 3 projets : Olyvia, Aegirhall, FlyTapFest.

## Octobre 2026
- Soutenance maquette. Retours : métaphores trop littérales (cadres, livres) et absence de grille. Piste conseillée : partir de mon illustration pour un parti pris graphique plus affirmé.
- Moodboard années 70 validé par mon enseignant : palette crème, rouge, orange, vert, moutarde, brun.

## Vacances de la Toussaint
- Travail sur la maquette dans Figma, à partir des retours de la soutenance et du nouveau moodboard.

## Semaine du 2 novembre 2026
- 7 novembre : début du développement du site (projet Astro, structure des pages).
- Je n'ai pas commité au fur et à mesure : c'est pour ça que l'historique Git est concentré sur la fin du projet. À l'avenir, je committerai à chaque étape.

## Semaine du 9 novembre 2026
- 12 novembre : refonte complète. Je conserve mon autoportrait dessiné. Cible : studios d'animation 2D/3D et de jeu vidéo.
- 12 novembre : première version années 70 développée (pages projets, à propos, contact) puis écartée : la typographie ne correspondait pas à mon positionnement.
- Analyse de mes références (Pinterest, Behance) et comparaison de plusieurs pistes graphiques.
- 12 et 13 novembre : nouvelle version développée avec PocketBase (projets, contenu de démonstration pour juger le design), puis retravaillée car la mise en page restait trop générique.
- 13 au 15 novembre : 4 propositions d'accueil dans Figma ; je retiens « La pétillante » et j'en fais une maquette complète.

## Semaine du 16 novembre 2026
- 16 novembre : tests années 70 dans Figma (nom droit et aligné sur la grille, couleurs exactes du moodboard, fond brun, vague sous le héros). Plusieurs décors et polices écartés ; je conserve l'effet d'écho rétro sur le nom.
- 16 novembre : maquette finale, fusion de « Base v2 » et de la version rétro (Yellowtail, cartes rétro, projets en carrousel), prototype navigable desktop et mobile.
- 16 novembre au soir : je repars d'un code propre pour qu'il corresponde exactement à la maquette finale. Astro, Tailwind et PocketBase : collections projets, compétences et messages, pages accueil, projets avec filtres, études de cas, à propos et contact (formulaire enregistré dans PocketBase).
- 17 novembre : haut des pages en vert, formes animées, footer complet, pages mentions légales, données personnelles et plan du site, suppression de l'adresse e-mail au profit du formulaire.
- 17 novembre : compétences avec logos et liens, qualités (soft skills) gérées dans PocketBase, outils et qualités affichés sur chaque projet, favicon en monogramme « IS », titres reformulés après la remarque du jury.
- 17 novembre : audit Lighthouse de toutes les pages et corrections (contraste, poids des images, chargement). Résultat : 100 en accessibilité, bonnes pratiques et référencement, 96 à 100 en performance.
- 17 novembre : tout le style passe en classes Tailwind, en cohérence avec ma stack.
- 17 novembre : déploiement automatique mis en place (GitHub Actions) : à chaque envoi sur GitHub, le site est construit puis installé sur mon VPS.
- 18 et 19 novembre : mise en ligne sur portfolio.ines-sittler.fr. Le formulaire de contact était refusé en ligne (erreur 403) : la vérification d'origine d'Astro ne fonctionnait pas derrière le serveur du VPS. Je l'ai remplacée par une vérification faite dans la page de contact, et chaque message m'est maintenant envoyé par e-mail (SMTP de PocketBase).
- 18 et 19 novembre : animations des formes et de l'autoportrait retirées, page « plan du site » supprimée, page 404, carrousel sans cartes coupées, page projet refaite (visuel à côté du titre, étude de cas en texte libre, galerie avec agrandissement).
- 18 et 19 novembre : réécriture de tous les textes du site (vouvoiement, textes courts, recherche de stage du 29 mars au 4 juin 2027), mentions légales refaites, frise de mon parcours, bouton de téléchargement du CV dans « À propos » et « Contact ».
- 18 et 19 novembre : études de cas des 3 projets complétées dans PocketBase, ajout des outils que j'utilise (Trello, Notion, Jira, Canva…), référencement (sitemap, robots.txt, données structurées), mockups de mes projets.
- 19 novembre : vérifications qualité sur le site en ligne (Lighthouse, clavier, formulaire, cookies), consignées dans QUALITE.md.
