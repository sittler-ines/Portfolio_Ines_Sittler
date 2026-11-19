# Déclaration d'usage de l'IA

## Claude (Claude Code, Anthropic)

Utilisé tout au long du projet, dans Visual Studio Code et dans Figma, comme assistant de conception, de développement et de rédaction.

| Étape | Pour quoi faire | Ce que j'ai modifié, corrigé ou rejeté |
|---|---|---|
| Recherche graphique | Proposer des pistes de direction artistique à partir de mon moodboard (validé par mon professeur), de mes références Pinterest et Behance et de mon autoportrait. | J'ai rejeté de nombreuses propositions qui ne correspondaient pas à mon positionnement : polices rondes et grasses, thème couture, éléments saisonniers, cadres façon tableaux, mise en page magazine, fond crème, décors de fond (ronds, rayons, damier, grain). J'ai choisi moi-même la palette, le mélange de deux maquettes (« Base v2 » et « rétro ») et les polices. |
| Analyse | Regarder des portfolios en ligne, dont ceux de camarades, pour situer le niveau. | J'ai gardé l'idée d'annoncer clairement ce que je cherche (un stage) dès le haut de la page, sans reprendre leur style. |
| Maquette Figma | Construire les écrans desktop et mobile, le guide de style et le prototype navigable, puis mettre la maquette à jour pour qu'elle corresponde au site final. | J'ai demandé de redresser le nom, d'aligner tous les éléments sur la grille, de remettre les captures droites, de changer la typographie et de passer les projets en carrousel. |
| Intégration | Écrire le code Astro, Tailwind, JavaScript et les migrations PocketBase d'après la maquette. | J'ai imposé que tout le style soit en classes Tailwind (aucun CSS écrit à la main). J'ai fait retirer l'animation des formes et de mon autoportrait, les cartes coupées du carrousel et la limite de caractères du formulaire. J'ai refusé une galerie à onglets qui ne correspondait pas à ce que je voulais et j'ai décrit moi-même la page projet : visuel à côté du titre, informations en dessous, puis petite galerie. J'ai demandé le bouton de téléchargement du CV seulement dans « À propos » et « Contact ». |
| Mise en ligne | Placer le fichier de déploiement automatique (GitHub Actions vers mon VPS), corriger l'erreur 403 du formulaire en ligne, configurer l'envoi d'e-mail avec le SMTP de PocketBase. | Le fichier de déploiement est celui que j'avais préparé ; l'IA l'a placé au bon endroit dans le dépôt. J'ai testé l'envoi du formulaire en ligne. |
| Logo et favicon | Proposer des logos dans Figma (8 pistes en deux séries), puis vectoriser celui choisi pour le favicon. | J'ai refusé la première série (personnage, soleil 70s, lave) : je voulais mon nom ou mes initiales. Dans la deuxième, j'ai choisi le monogramme « IS », seulement pour le favicon. |
| Fonds et transitions | Proposer des fonds et des transitions entre les sections de l'accueil. | J'ai gardé la trame de points (« Ce que je fais »). J'ai écarté les festons, les bandes, les coulures, les blocs arrondis et les rayures, trop chargés ; j'ai choisi un fond vert uni pour les compétences. |
| Titres | Proposer des titres moins scolaires après la remarque du jury sur des titres trop génériques comme « Mes projets ». | J'ai choisi moi-même chaque titre parmi plusieurs propositions (« Ce que j'ai créé », « Ce que j'apporte à une équipe », « Un peu de moi », « Ma boîte à outils », « Ce qu'on dit de moi ») et gardé « Mon parcours ». |
| Qualités (soft skills) | Proposer une liste de qualités. | J'ai choisi les 7 qui me correspondent ; les autres ont été écartées. |
| Textes du site | Réécrire les textes des pages (accueil, à propos, contact) en me posant des questions. | J'ai demandé le vouvoiement, des textes courts et aucun paragraphe dans le haut de l'accueil. J'ai corrigé la formulation de ma recherche : un stage en création visuelle, du 29 mars au 4 juin 2027 (et non « en animation ou jeu vidéo »). La phrase de la page 404 (« Cette page a disparu du storyboard. ») est la mienne. |
| Études de cas des 3 projets | Rédiger le contexte, le rôle, le processus, les choix techniques et le résultat à partir de mes réponses à ses questions (dates, rôle, outils, étapes, liens), puis les enregistrer dans PocketBase. | Les faits viennent de moi. J'ai précisé mon rôle sur chaque projet (par exemple Aegirhall, prévu en équipe mais mené seule) et j'ai choisi de ne pas présenter les difficultés d'Olyvia. |
| Pages légales | Rédiger les mentions légales et la partie données personnelles. | J'ai donné l'hébergement (VPS privé, nom de domaine chez Infomaniak), fait passer le texte au vouvoiement, élargi la propriété intellectuelle à tous mes projets, retiré la directrice de la publication et l'adresse postale, et supprimé la page « plan du site ». |
| Référencement | Ajouter le `sitemap.xml`, le `robots.txt` et les données structurées (Person, WebSite). | Je l'ai demandé pour que le site ressorte quand on cherche mon nom. |
| Qualité web | Lancer Lighthouse et des vérifications (clavier, formulaire, cookies) sur toutes les pages et corriger (contraste, images, chargement). | J'ai demandé que toutes les pages soient vérifiées ; les résultats sont dans QUALITE.md. |
| Journal | Mettre en forme JOURNAL.md à partir de l'historique réel du projet. | J'ai donné les dates (maquette pendant les vacances de la Toussaint, début du développement le 7 novembre) et fait retirer les formulations trop familières. |

## Où se trouvent les parties principales du code

- Lecture des projets, compétences et qualités, envoi des messages : `src/lib/pocketbase.js`
- Formulaire de contact et sa vérification côté serveur : `src/pages/contact.astro`
- Page d'un projet (étude de cas, vidéo, galerie) : `src/pages/projets/[slug].astro`
- Carrousel des projets : `src/components/Carrousel.astro` et `src/scripts/carrousel.js`
- Galerie et agrandissement des images : `src/components/Galerie.astro` et `src/scripts/galerie.js`
- Menu mobile : `src/scripts/menu.js`
- Couleurs, polices et tailles de la direction artistique : `src/styles/global.css` (`@theme`) et `src/styles/classes.js`
- Collections PocketBase et e-mail envoyé à chaque message : `pocketbase/pb_migrations/` et `pocketbase/pb_hooks/messages.pb.js`
