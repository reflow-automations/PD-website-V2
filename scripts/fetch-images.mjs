// Extract the best-resolution variant of every content image from the old
// site's HTML scrape and download it to public/images/old/.
import { readFile, mkdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const HTML = path.join(ROOT, 'parkourdisciplines_com html scrape oude site.html');
const OUT = path.join(ROOT, 'public', 'images', 'old');

const html = await readFile(HTML, 'utf8');

const re = /https:\/\/parkourdisciplines\.com\/wp-content\/uploads\/[^\s"'()\\]+?\.(?:jpe?g|png|webp)/gi;
const all = [...new Set((html.match(re) || []).map((u) => u.replace(/&amp;/g, '&')))];

// Skip UI/branding assets we don't need as photos
const skip = /favicon|cropped-|google-play|app-?store|badge/i;
const photos = all.filter((u) => !skip.test(u));

// Group by base image, choose highest-res variant.
const groups = new Map();
const baseKey = (u) => u.replace(/-\d+x\d+(?=\.\w+$)/, '').replace(/-scaled(?=\.\w+$)/, '');
const rankOf = (u) => {
  if (/-scaled\.\w+$/.test(u)) return [3, 0];
  const m = u.match(/-(\d+)x(\d+)(?=\.\w+$)/);
  if (m) return [1, +m[1] * +m[2]];
  return [2, 0]; // unsuffixed original
};
for (const u of photos) {
  const k = baseKey(u);
  const r = rankOf(u);
  const cur = groups.get(k);
  if (!cur || r[0] > cur.r[0] || (r[0] === cur.r[0] && r[1] > cur.r[1])) {
    groups.set(k, { url: u, r });
  }
}

const chosen = [...groups.values()].map((g) => g.url).sort();
await mkdir(OUT, { recursive: true });

console.log(`Found ${all.length} image URLs -> ${chosen.length} unique photos to download\n`);

let ok = 0,
  fail = 0,
  bytes = 0;
for (const url of chosen) {
  const name = decodeURIComponent(url.split('/').pop());
  const dest = path.join(OUT, name);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    bytes += buf.length;
    ok++;
    console.log(`✓ ${name}  (${(buf.length / 1024).toFixed(0)} KB)`);
  } catch (e) {
    fail++;
    console.log(`✗ ${name}  — ${e.message}`);
  }
}
console.log(`\nDone: ${ok} ok, ${fail} failed, ${(bytes / 1024 / 1024).toFixed(1)} MB total -> ${OUT}`);
