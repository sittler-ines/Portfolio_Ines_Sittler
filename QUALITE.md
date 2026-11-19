# Qualité web

Critères choisis pour ce site : une palette 70s très colorée (risque de contraste), des images de projets lourdes (captures et mockups), un formulaire qui collecte des données personnelles et des projets réalisés en équipe (droits d'auteur).

Vérifications faites le 19 novembre 2026 sur le site en ligne (https://portfolio.ines-sittler.fr), sauf mention contraire.

## Accessibilité

| Critère | Ce qui est fait dans le site | Comment je l'ai vérifié | Résultat et corrections |
|---|---|---|---|
| Contrastes de la palette 70s | Haut des pages vert : le crème sur ce vert (3,4:1) n'est utilisé qu'en grand (texte d'intro 24px, liens et menu 20px en gras), le reste est dans des cartes crème. Texte brun sur orange, moutarde et crème ; crème ou moutarde sur brun. Pas de petit texte rouge sur crème (seulement les grands titres). | Lighthouse (audit de contraste) sur les 8 pages, mobile et ordinateur. | Premier passage à 95-96 : boutons rouges et bandeaux trop peu contrastés. Corrigé en passant ces textes en gras (ils comptent alors comme « grand texte »). Aujourd'hui : 100 partout. |
| Navigation au clavier | Lien « Aller au contenu », contour de focus moutarde, menu mobile qui se ferme avec Échap, flèches du carrousel et de la galerie en vrais boutons. | Test automatisé dans Chrome : touche Tab sur l'accueil, puis ouverture du menu mobile et touche Échap. | Le 1er Tab arrive sur « Aller au contenu » (vers `#contenu`) avec un contour moutarde plein. Le menu mobile se ferme avec Échap (`aria-expanded` repasse à `false`). Les flèches du carrousel sont des boutons nommés « Projet précédent » et « Projet suivant ». |
| Images | Autoportrait et images des projets avec texte alternatif ; formes de lave, vague et trame de points cachées aux lecteurs d'écran (`aria-hidden`). | Lighthouse (textes alternatifs). | Aucune image sans texte alternatif. |
| Formulaire | Étiquettes reliées aux champs, erreurs reliées à leur champ (`aria-invalid`, `aria-describedby`), erreur générale annoncée (`role="alert"`). | Envoi du formulaire vide. | Chaque champ vide est marqué `aria-invalid="true"` et relié à son message (« Indiquez votre nom. », « Écrivez votre message. »). |
| Mouvement | Aucune animation décorative : les formes et l'autoportrait étaient animés au début, je les ai rendus fixes. Seuls de petits effets de survol, coupés si « réduire les animations » est activé. | Lecture de `src/styles/global.css` (`prefers-reduced-motion`). | Conforme. |

## Sobriété et performance

| Critère | Ce qui est fait | Comment je l'ai vérifié | Résultat et corrections |
|---|---|---|---|
| Poids des images | Les images viennent de PocketBase en plusieurs largeurs (400, 800, 1200 px) avec `srcset` : le navigateur prend la plus adaptée à l'écran. La galerie charge une petite version et l'image en taille réelle seulement à l'agrandissement. | Lighthouse (poids total de la page, plus grosses ressources). | Page FlyTapFest : 1 035 Ko → 467 Ko (une capture de la galerie pesait 651 Ko ; sa petite version pèse 84 Ko). Page Olyvia : 525 Ko → 312 Ko (le mockup était chargé en 1200 px même sur téléphone). |
| Stabilité de l'affichage | Dimensions indiquées sur les images, cadre 16/10 réservé pour le mockup en haut des pages projet. | Lighthouse (CLS, décalage de mise en page). | Le mockup sans dimensions faisait sauter la page (CLS 0,12). Corrigé : CLS à 0 sur toutes les pages. |
| Polices | 2 familles seulement (Yellowtail et Gelasio), servies par le site lui-même, pas de Google Fonts. Police des titres préchargée. | Code source des pages en ligne. | Aucun appel à Google Fonts. |
| JavaScript | Trois petits scripts sans bibliothèque (menu, carrousel, galerie). Le carrousel défile même sans JavaScript (CSS scroll-snap). | Lighthouse (temps de blocage). | 0 ms sur ordinateur, entre 0 et 170 ms sur mobile (sous le seuil de 200 ms jugé bon par Lighthouse). |
| Décors | Formes, vague et trame de points en SVG de quelques lignes, aucune image décorative. | Onglet Réseau. | Aucune image de décor téléchargée. |
| Limites connues | Les mockups sont des PNG (PocketBase ne les convertit pas en WebP) et le serveur ne compresse pas encore les pages (gzip). | En-têtes HTTP (`content-encoding` absent). | Sur mobile, le score de performance des pages projet reste entre 85 et 95. Piste : exporter les mockups en WebP et activer la compression sur le VPS. |

## Référencement

| Critère | Ce qui est fait | Comment je l'ai vérifié | Résultat et corrections |
|---|---|---|---|
| Titre et description | Chaque page a son `<title>` et sa `meta description` ; la description de l'accueil dit qui je suis et ce que je cherche. | Lighthouse SEO, code source. | 100 sur toutes les pages. |
| Structure | Un seul `h1` par page, titres dans l'ordre. | Comptage des `h1` sur les pages en ligne. | 1 seul `h1` sur l'accueil, les projets, un projet, à propos, contact et mentions légales. |
| Partage et identité | Balises Open Graph (titre, description, image, nom du site) et données structurées schema.org (Person + WebSite, reliées à Behance et LinkedIn) pour que les moteurs associent le site à mon nom. | Code source. | Présentes sur toutes les pages. |
| Adresses et exploration | Adresses lisibles (`/projets/olyvia`), lien canonique, `robots.txt` et `sitemap.xml` générés par le site (les projets de PocketBase y sont ajoutés automatiquement), page 404 personnalisée. | Appel des adresses en ligne. | `sitemap.xml` et `robots.txt` répondent ; une adresse inconnue renvoie bien un code 404. |

## Conformité juridique

| Critère | Ce qui est fait | Comment je l'ai vérifié | Résultat et corrections |
|---|---|---|---|
| Mentions légales | Page `/mentions-legales` : éditrice, hébergement (VPS privé, nom de domaine chez Infomaniak), propriété intellectuelle, données personnelles, cookies, crédits. Liée dans le pied de page de toutes les pages. | Lecture. | Conforme. |
| Information au moment de la collecte | Sous le bouton « Envoyer » : « Vos données : voir les mentions légales », avec un lien direct vers la partie données personnelles (durée de conservation de 12 mois, droits, CNIL). | Lecture de la page contact en ligne. | J'avais retiré la note sous le formulaire ; le formulaire ne renvoyait plus vers les données personnelles. Corrigé par cette ligne courte. |
| Données du formulaire | Messages lisibles seulement par l'administratrice (règles de la collection `messages` dans PocketBase). | Lecture de `https://pbportfolio.ines-sittler.fr/api/collections/messages/records` sans être connectée. | Refusé (403 : « Only superusers can perform this action »). |
| Sécurité du formulaire | Vérification côté serveur, champ piège anti-robot, vérification de l'origine dans `contact.astro`. | Envoi d'un formulaire depuis une autre origine. | Refusé (403). La vérification automatique d'Astro bloquait aussi mes propres envois derrière le serveur du VPS : je l'ai remplacée par cette vérification manuelle. |
| Cookies | Aucun cookie de suivi, aucune mesure d'audience, donc pas de bandeau de consentement. | En-têtes HTTP des pages en ligne (`set-cookie`). | Aucun cookie déposé. |
| Vidéos intégrées | YouTube en mode « nocookie », Vimeo avec `dnt=1`. | Code (`src/pages/projets/[slug].astro`). | Conforme. |
| Droits d'auteur | Polices sous licence SIL OFL, créditées ; projets d'équipe signalés (Olyvia en équipe de 3) avec mon rôle exact dans chaque étude de cas. | Lecture. | Conforme. |

## Résultats Lighthouse sur le site en ligne (19/11/2026, après corrections)

Scores : performance / accessibilité / bonnes pratiques / référencement.

| Page | Mobile | Ordinateur |
|---|---|---|
| Accueil | 98 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| Projets | 94 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| Projet Olyvia | 95 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| Projet Aegirhall | 88 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| Projet FlyTapFest | 86 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| À propos | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| Contact | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| Mentions légales | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |

Le score de performance mobile varie de quelques points d'un passage à l'autre (réseau simulé lent) : l'accueil a obtenu entre 88 et 98. La page 404 ne peut pas être notée : Lighthouse refuse les pages qui répondent « 404 », ce qui est le comportement voulu.

Avant corrections, sur le site en ligne : Olyvia 83, Aegirhall 77 et FlyTapFest 77 en performance mobile.
