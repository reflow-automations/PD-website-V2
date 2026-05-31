// Eenmalige bulk-upload van de bestaande galerij-foto's naar Cloudinary.
// Leest src/assets/photos/, upload naar de map "pd-gallery" met tag "pd-gallery"
// (+ een locatie-tag voor de loc-*.jpg bestanden). Logo's worden overgeslagen.
//
// GEBRUIK (eenmalig):
//   1. Maak een bestand ".env" in de projectmap (naast package.json) met:
//        CLOUDINARY_API_KEY=691574649915185
//        CLOUDINARY_API_SECRET=jouw-secret-hier
//      (cloud-naam is optioneel; standaard "duduaq6hw")
//   2. Open een terminal in de projectmap en draai:
//        node scripts/upload-to-cloudinary.mjs
//
// De .env staat in .gitignore -> je secret komt nooit in git of de browser.
// Node 18+ vereist (heeft global fetch/FormData/crypto).

import { readFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { dirname, join, extname } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

// .env handmatig inlezen (geen extra dependency nodig)
try {
  for (const line of readFileSync(join(root, '.env'), 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '').trim();
  }
} catch {
  /* geen .env? dan moeten de waarden via de omgeving komen */
}

const CLOUD = process.env.CLOUDINARY_CLOUD_NAME || 'duduaq6hw';
const KEY = process.env.CLOUDINARY_API_KEY;
const SECRET = process.env.CLOUDINARY_API_SECRET;

if (!KEY || !SECRET) {
  console.error('\n  Ontbrekend: zet CLOUDINARY_API_KEY en CLOUDINARY_API_SECRET in een .env in de projectmap.\n');
  process.exit(1);
}

const PHOTOS_DIR = join(root, 'src', 'assets', 'photos');
const SKIP = new Set(['logo-silver-academy.webp']); // logo's horen niet in de galerij
const LOC = {
  'loc-hero.jpg': 'hero-academy',
  'loc-gymworld.jpg': 'gymworld-freerun-academy',
  'loc-roots.jpg': 'roots-academy',
  'loc-play.jpg': 'play-freerun-academy',
  'loc-silver.jpg': 'silver-academy',
  'loc-nijmegen.jpg': 'locatie-nijmegen',
};
const MIME = {
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
  '.webp': 'image/webp', '.gif': 'image/gif', '.avif': 'image/avif',
  '.mp4': 'video/mp4', '.mov': 'video/quicktime',
};

function sign(params) {
  const toSign = Object.keys(params).sort().map((k) => `${k}=${params[k]}`).join('&');
  return createHash('sha1').update(toSign + SECRET).digest('hex');
}

const files = readdirSync(PHOTOS_DIR).filter((f) => MIME[extname(f).toLowerCase()] && !SKIP.has(f));
console.log(`\n  Uploaden van ${files.length} bestand(en) naar cloud "${CLOUD}" (map pd-gallery)…\n`);

let ok = 0;
for (const f of files) {
  const ext = extname(f).toLowerCase();
  const tagsArr = ['pd-gallery'];
  if (LOC[f]) tagsArr.push(`loc-${LOC[f]}`);
  const tags = tagsArr.join(',');
  const folder = 'pd-gallery';
  const timestamp = Math.round(Date.now() / 1000);
  const signature = sign({ folder, tags, timestamp });

  const buf = readFileSync(join(PHOTOS_DIR, f));
  const dataUri = `data:${MIME[ext]};base64,${buf.toString('base64')}`;

  const fd = new FormData();
  fd.append('file', dataUri);
  fd.append('api_key', KEY);
  fd.append('timestamp', String(timestamp));
  fd.append('folder', folder);
  fd.append('tags', tags);
  fd.append('signature', signature);

  try {
    const r = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD}/auto/upload`, { method: 'POST', body: fd });
    const data = await r.json();
    if (!r.ok) throw new Error((data && data.error && data.error.message) || `HTTP ${r.status}`);
    ok++;
    console.log(`  OK   ${f}${LOC[f] ? '  -> ' + LOC[f] : ''}`);
  } catch (e) {
    console.log(`  FOUT ${f}  (${e.message})`);
  }
}

console.log(`\n  Klaar: ${ok}/${files.length} geüpload. Check /galerij/ (kan een paar minuten duren).\n`);
