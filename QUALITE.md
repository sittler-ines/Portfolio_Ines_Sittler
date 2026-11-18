# Qualité web

> Brouillon : les critères sont choisis pour ce site. Remplis la colonne « Résultat » après tes propres vérifications (Lighthouse, WAVE, validateur W3C, navigation au clavier, test sur téléphone).

## Accessibilité

| Critère | Ce qui est fait dans le site | Comment vérifier | Résultat |
|---|---|---|---|
| Contrastes de la palette 70s | Haut des pages vert : le crème sur ce vert (3,4:1) n'est utilisé qu'en grand (texte d'intro 24px, liens et menu 20px en gras), le reste est dans des cartes crème. Texte brun sur orange, moutarde et crème ; crème ou moutarde sur brun. Pas de petit texte rouge sur crème (seulement les grands titres). Bandeau des cartes de projet : moutarde sur brun. | WAVE, outil de contraste de Chrome | |
| Navigation au clavier | Lien « Aller au contenu », contour de focus moutarde, menu mobile qui se ferme avec Échap, flèches du carrousel en vrais boutons. | Parcourir le site avec Tab | |
| Images | Autoportrait avec texte alternatif ; formes de lave et vague cachées aux lecteurs d'écran. | WAVE | |
| Formulaire | Étiquettes reliées aux champs, erreurs annoncées (`aria-invalid`, `aria-describedby`, `role="alert"`). | Envoyer le formulaire vide | |
| Mouvement | Aucune animation décorative (formes et autoportrait fixes). Seuls les petits effets de survol, coupés si « réduire les animations » est activé. | Réglage du système | |

## Sobriété et performance

| Critère | Ce qui est fait | Comment vérifier | Résultat |
|---|---|---|---|
| Polices | 2 familles seulement, servies par le site (pas de Google Fonts). | Onglet Réseau | |
| Images | Captures en `loading="lazy"` sauf l'autoportrait du haut ; dimensions indiquées (pas de saut de mise en page). | Lighthouse (CLS) | |
| JavaScript | Deux petits scripts (menu, carrousel). Le carrousel défile même sans JavaScript (CSS scroll-snap). | Lighthouse | |
| Décors | Formes, vague et trame de points en SVG de quelques lignes, aucune image lourde. | Onglet Réseau | |

## Référencement

| Critère | Ce qui est fait | Comment vérifier | Résultat |
|---|---|---|---|
| Titre et description | Chaque page a son `<title>` et sa `meta description`. | Lighthouse SEO | |
| Structure | Un seul `h1` par page, titres dans l'ordre. | Extension HeadingsMap | |
| Partage | Balises Open Graph (titre, description, image). | Inspecteur de publication LinkedIn | |
| Adresses | Adresses lisibles (`/projets/olyvia`), lien canonique. **À faire : mettre la vraie adresse dans `astro.config.mjs` (`site`).** | Code source | |

## Conformité juridique

| Critère | Ce qui est fait | Comment vérifier | Résultat |
|---|---|---|---|
| Mentions légales et données personnelles | Page `/mentions-legales` : éditrice, hébergeur, propriété intellectuelle, données personnelles du formulaire (durée, droits, CNIL), cookies, crédits. Liée dans le pied de page et sous le formulaire de contact. **À compléter : hébergeur ; vérifier la durée de conservation (12 mois).** | Lecture | |
| Données du formulaire | Information sous le formulaire ; messages lisibles seulement par l'administratrice (règles PocketBase). | Tenter de lire `/api/collections/messages/records` sans être connectée | |
| Sécurité du formulaire | Vérification côté serveur, champ piège anti-robot, vérification de l'origine dans contact.astro (envoi refusé s'il vient d'un autre site ; la vérification automatique d'Astro bloquait le formulaire derrière le serveur du VPS). | Test | |
| Cookies | Aucun cookie de suivi, aucune mesure d'audience. | Onglet Application | |
| Vidéos intégrées | YouTube en mode « nocookie », Vimeo avec `dnt=1`. | Code | |
| Licences | Polices sous licence SIL OFL, créditées ; projet d'équipe signalé (Olyvia). | Lecture | |

## Résultats Lighthouse (en local, version de production, 17/11/2026)

Scores : performance / accessibilité / bonnes pratiques / référencement.

| Page | Mobile | Ordinateur |
|---|---|---|
| Accueil | 96 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| Projets (tous) | 96 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| Projets (filtre Pro) | 96 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| Projets (filtre Perso) | 99 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| Projet Olyvia | 98 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| Projet Aegirhall | 97 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| Projet FlyTapFest | 97 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| À propos | 99 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| Contact | 99 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| Mentions légales | 99 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |

La page 404 ne peut pas être notée : Lighthouse refuse les pages qui répondent « 404 », ce qui est le comportement voulu.

Corrections faites après le premier passage (accessibilité à 95-96, performance mobile à 89 sur l'accueil) :
- contraste : bandeaux des cartes et boutons rouges passés en gras (le crème sur rouge ou vert compte alors comme « grand texte ») ;
- autoportrait converti en WebP et en plusieurs tailles par Astro (`astro:assets`), chargé tout de suite quand il est en haut de page ;
- captures de projet servies par PocketBase en vignettes de 400, 800 et 1200 px (`srcset`) : le navigateur prend la plus adaptée ;
- CSS écrit directement dans chaque page (`inlineStylesheets`) et police des titres préchargée : la page s'affiche plus vite ;

Reste à faire en ligne : la compression du texte (gzip) se règle chez l'hébergeur. Les captures restent en JPEG (PocketBase ne les convertit pas en WebP). À refaire sur le site en ligne.
