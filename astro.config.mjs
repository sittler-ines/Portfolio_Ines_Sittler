// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

// Rendu côté serveur (SSR) : à chaque visite, les projets sont lus dans PocketBase.
// Ainsi, un projet ajouté dans le tableau de bord apparaît tout de suite sur le site.
export default defineConfig({
  // À remplacer par l'adresse du site en ligne (sert aux liens canoniques et au partage)
  site: 'https://portfolio.ines-sittler.fr',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  server: { port: 4330 },
  // Barre d'outils d'Astro (visible seulement en local, avec npm run dev) : désactivée
  devToolbar: { enabled: false },
  // Le CSS est écrit directement dans chaque page : le navigateur n'attend pas un fichier en plus
  // avant d'afficher la page (meilleur score de performance sur mobile)
  build: { inlineStylesheets: 'always' },
  // La vérification automatique d'Astro contre les envois venant d'un autre site (CSRF) refuse
  // aussi mon propre formulaire une fois en ligne, derrière le serveur du VPS. On la coupe ici,
  // et c'est la page contact.astro qui vérifie elle-même d'où vient l'envoi.
  security: { checkOrigin: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
