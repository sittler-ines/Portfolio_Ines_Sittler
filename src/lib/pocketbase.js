// Accès aux données du portfolio, stockées dans PocketBase.
// Les fonctions de lecture ne plantent jamais : si PocketBase est éteint, elles renvoient [] ou null
// et la page s'affiche quand même (avec un message « aucun projet »).
import PocketBase from 'pocketbase';

const url = import.meta.env.POCKETBASE_URL || 'https://pbportfolio.ines-sittler.fr';
const pb = new PocketBase(url);
// Une page peut faire plusieurs requêtes en même temps : on désactive l'annulation automatique.
pb.autoCancellation(false);

// Adresses d'une image en plusieurs largeurs, prêtes pour l'attribut srcset :
// tailles(r, 'photo.png', ['400x0', '800x0']) → { src: '…?thumb=800x0', srcset: '…?thumb=400x0 400w, …?thumb=800x0 800w' }
// (src = la plus grande, pour les navigateurs qui ignorent srcset). Renvoie null s'il n'y a pas d'image.
function tailles(r, fichier, formats) {
  if (!fichier) return null;
  const urls = formats.map((f) => `${pb.files.getURL(r, fichier, { thumb: f })} ${parseInt(f)}w`);
  return { src: pb.files.getURL(r, fichier, { thumb: formats.at(-1) }), srcset: urls.join(', ') };
}

// Transforme un enregistrement PocketBase (noms anglais) en objet Projet (noms français).
function versProjet(r) {
  return {
    slug: r.slug,
    titre: r.title,
    type: r.type,
    annee: r.year || null,
    resume: r.summary || '',
    role: r.role || '',
    equipe: r.team || '',
    outils: String(r.tools || '').split(',').map((o) => o.trim()).filter(Boolean),
    // Les 5 parties de l'étude de cas (texte HTML écrit dans l'éditeur de PocketBase)
    contexte: r.context || '',
    monRole: r.my_role || '',
    processus: r.process || '',
    technique: r.tech || '',
    resultat: r.result || '',
    // Capture de couverture en taille réelle (image de partage sur les réseaux)
    couverture: r.cover ? pb.files.getURL(r, r.cover) : null,
    galerie: (r.gallery || []).map((f) => pb.files.getURL(r, f)),
    // Image de la carte du projet : la 1re image de la galerie (sinon la couverture), en 400 et 800 px
    imageCarte: tailles(r, r.gallery?.[0] || r.cover, ['400x0', '800x0']),
    // Image à côté du titre sur la page du projet : le mockup (sinon la couverture), en 400, 800 et 1200 px
    imageHaut: tailles(r, r.mockup || r.cover, ['400x0', '800x0', '1200x0']),
    lien: r.link || '',
    video: r.video || '',
    // Outils (avec logo et lien) et qualités cochés pour ce projet dans PocketBase
    // (lus seulement sur la page d'un projet, grâce à « expand »)
    outilsLies: (r.expand?.skills || []).map(versCompetence),
    qualites: (r.expand?.qualities || []).map((q) => q.name),
  };
}

// Transforme une compétence PocketBase en { nom, lien, logo } (utilisé par le composant Competence)
function versCompetence(r) {
  return { nom: r.name, lien: r.link || null, logo: r.logo ? pb.files.getURL(r, r.logo) : null };
}

// Tous les projets, dans l'ordre choisi. type : 'pro' ou 'perso' pour filtrer.
export async function getProjets({ type } = {}) {
  try {
    const options = { sort: 'order' };
    if (type === 'pro' || type === 'perso') options.filter = pb.filter('type = {:type}', { type });
    const liste = await pb.collection('projects').getFullList(options);
    return liste.map(versProjet);
  } catch (e) {
    console.warn('[PocketBase] projets indisponibles :', e.message);
    return [];
  }
}

// Un projet à partir de son slug (ex. 'olyvia'), ou null s'il n'existe pas.
export async function getProjet(slug) {
  try {
    const r = await pb.collection('projects').getFirstListItem(pb.filter('slug = {:slug}', { slug: String(slug) }), {
      expand: 'skills,qualities', // on récupère aussi les outils et les qualités liés au projet
    });
    return versProjet(r);
  } catch (e) {
    if (e.status !== 404) console.warn('[PocketBase] projet indisponible :', e.message);
    return null;
  }
}

// Les compétences, regroupées par catégorie : [{ categorie, items: [{ nom, lien, logo }, ...] }, ...]
export async function getCompetences() {
  try {
    const liste = await pb.collection('skills').getFullList({ sort: 'order' });
    const groupes = [];
    for (const r of liste) {
      const nom = r.category || 'Autres';
      let groupe = groupes.find((g) => g.categorie === nom);
      if (!groupe) {
        groupe = { categorie: nom, items: [] };
        groupes.push(groupe);
      }
      // Une compétence : son nom, le lien vers le site de l'outil et le logo envoyé dans PocketBase (s'il y en a un)
      groupe.items.push(versCompetence(r));
    }
    return groupes;
  } catch (e) {
    console.warn('[PocketBase] compétences indisponibles :', e.message);
    return [];
  }
}

// Mes qualités (soft skills), dans l'ordre choisi : ['Créativité', ...]
export async function getQualites() {
  try {
    const liste = await pb.collection('qualities').getFullList({ sort: 'order' });
    return liste.map((r) => r.name);
  } catch (e) {
    console.warn('[PocketBase] qualités indisponibles :', e.message);
    return [];
  }
}

// Enregistre un message du formulaire de contact. Lève une erreur si l'envoi échoue.
export async function envoyerMessage({ nom, email, message }) {
  await pb.collection('messages').create({ name: nom, email, message });
}
