# Portfolio d'Inès Sittler

Portfolio d'étudiante en BUT MMI (2e année, Montbéliard), direction artistique vintage années 70.

## Technologies

| Outil | Pourquoi |
|---|---|
| **Astro** (rendu serveur, adaptateur Node) | Pages rapides, composants réutilisables, presque pas de JavaScript envoyé au navigateur. |
| **Tailwind CSS** | Tout le style est écrit en classes Tailwind dans les fichiers `.astro`. La direction artistique (palette, polices, tailles, ombres rétro, animation) est déclarée une seule fois dans `@theme` (`src/styles/global.css`) ; les suites de classes qui reviennent souvent sont rangées dans `src/styles/classes.js`. |
| **PocketBase** | Base de données et tableau de bord : j'ajoute et modifie mes projets, compétences et lis les messages sans toucher au code. |
| **JavaScript** (sans bibliothèque) | Menu mobile et carrousel des projets (`src/scripts/`). |
| Polices **Yellowtail** et **Gelasio** (@fontsource) | Servies par le site lui-même, sans Google Fonts. |

## Lancer le site en local

1. `npm install` (une seule fois)
2. Dans un premier terminal : `npm run db` (PocketBase sur http://127.0.0.1:8090, tableau de bord : http://127.0.0.1:8090/_/)
3. Dans un second terminal : `npm run dev` (le site sur http://localhost:4330)

Première fois : créer le compte administrateur de PocketBase :
`pocketbase\pocketbase.exe superuser upsert mon@email.fr MonMotDePasse --dir pocketbase/pb_data`

Le programme `pocketbase.exe` se télécharge sur https://pocketbase.io (il n'est pas dans le dépôt).

## Organisation

- `src/pages/` : les pages (accueil, projets, projet, à propos, contact, mentions légales, données personnelles, plan du site, 404)
- `src/components/` : en-tête, pied de page, bouton, carte de projet, carrousel, vague, formes de lave
- `src/lib/pocketbase.js` : lecture des projets et compétences, envoi des messages
- `pocketbase/pb_migrations/` : création des collections et du contenu de départ

## Contenu dans PocketBase

Collection **projects** : titre, slug, type (pro/perso), résumé, « ce que j'ai fait », équipe, outils, et les 5 parties de l'étude de cas (contexte, mon rôle, processus, choix techniques, résultat), capture, galerie, lien, vidéo, ordre.
Collection **skills** : compétences par catégorie, avec le lien vers le site de l'outil et un logo facultatif (sinon le logo de `src/logos/` du même nom). Collection **qualities** : mes qualités (soft skills), sur l'accueil et la page À propos. Collection **messages** : messages du formulaire (lisibles seulement par l'administratrice).
