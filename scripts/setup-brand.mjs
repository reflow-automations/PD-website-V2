// Kopieer de toegevoegde logo's naar nette paden en genereer een favicon
// (wit gear-embleem op rood) als self-contained SVG met embedded PNG.
import { mkdir, copyFile, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const srcDir = path.join(ROOT, "public/images/logo's");
const brand = path.join(ROOT, 'public/brand');
await mkdir(brand, { recursive: true });

await copyFile(path.join(srcDir, 'favicon pd logo.png'), path.join(brand, 'gear.png'));
await copyFile(path.join(srcDir, 'main logo.png'), path.join(brand, 'logo-stacked.png'));
await copyFile(path.join(srcDir, 'logo tekst rechts klein.svg'), path.join(brand, 'logo-horizontal.svg'));

const b64 = (await readFile(path.join(brand, 'gear.png'))).toString('base64');
const favicon =
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">` +
  `<rect width="64" height="64" rx="12" fill="#E5392F"/>` +
  `<image href="data:image/png;base64,${b64}" x="10" y="9" width="44" height="46" style="filter:brightness(0) invert(1)"/>` +
  `</svg>`;
await writeFile(path.join(ROOT, 'public/favicon.svg'), favicon);

console.log('Brand assets klaar. favicon.svg bytes:', favicon.length);
