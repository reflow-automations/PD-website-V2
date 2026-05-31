// Copy the downloaded photos into src/assets/photos with semantic names so
// Astro can optimize them (AVIF/WebP, responsive). Also make an OG image.
import { mkdir, copyFile, rm, readdir } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'public', 'images', 'old');
const DST = path.join(ROOT, 'src', 'assets', 'photos');
const PUB = path.join(ROOT, 'public');

const map = {
  '1ca.jpg': 'hero-flip-red.jpg',
  'PANA7136-scaled.jpg': 'backflip-sky.jpg',
  '14b.jpg': 'sequence-wall.jpg',
  'FR22082714.jpg': 'sequence-bridge.jpg',
  'DSC09325-scaled.jpg': 'indoor-precision.jpg',
  'PANA7157-scaled.jpg': 'golden-coach.jpg',
  'P1977339-2.jpeg': 'rooftop-silhouette.jpeg',
  '20220624_110903.jpg': 'group-65plus.jpg',
  'IMG_2471.jpeg': 'coach-kid.jpeg',
  'IMG-20220630-WA0019.jpg': 'coach-senior.jpg',
  'Logo-Silver-Academy-1.webp': 'logo-silver-academy.webp',
};

await mkdir(DST, { recursive: true });
for (const [from, to] of Object.entries(map)) {
  await copyFile(path.join(SRC, from), path.join(DST, to));
  console.log(`→ ${to}`);
}

// OG share image (landscape, cinematic)
await copyFile(path.join(SRC, 'P1977339-2.jpeg'), path.join(PUB, 'og-default.jpg'));
console.log('→ public/og-default.jpg');

// drop the raw download folder so we don't ship unoptimized duplicates
await rm(SRC, { recursive: true, force: true });

console.log('\nsrc/assets/photos:', (await readdir(DST)).join(', '));
