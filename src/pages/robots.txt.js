// Fichier robots.txt (https://portfolio.ines-sittler.fr/robots.txt) : il autorise les moteurs
// de recherche à parcourir tout le site et leur indique où se trouve le plan du site.
export function GET({ site }) {
  const texte = `User-agent: *
Allow: /

Sitemap: ${new URL('/sitemap.xml', site).href}
`;
  return new Response(texte, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
