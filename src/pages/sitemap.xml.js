// Plan du site pour les moteurs de recherche (https://portfolio.ines-sittler.fr/sitemap.xml).
// Il liste toutes les pages, y compris les projets lus dans PocketBase : un projet ajouté
// dans le tableau de bord apparaît tout seul dans le plan.
import { getProjets } from '../lib/pocketbase.js';

export async function GET({ site }) {
  const projets = await getProjets();
  const pages = ['/', '/projets', '/a-propos', '/contact', '/mentions-legales', ...projets.map((p) => `/projets/${p.slug}`)];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((chemin) => `  <url><loc>${new URL(chemin, site).href}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
