// Vervang em-dashes door komma's en en-dashes in ranges door koppeltekens.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..', 'src');

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

let changed = 0;
for await (const f of walk(ROOT)) {
  if (!/\.(astro|ts|css|md)$/.test(f)) continue;
  const orig = await readFile(f, 'utf8');
  let s = orig
    .replace(/ *— */g, ', ') // em-dash (met spaties) -> komma
    .replace(/(\d)\s*–\s*(\d)/g, '$1-$2') // en-dash tussen cijfers (ranges) -> koppelteken
    .replace(/–/g, '-') // overige en-dashes -> koppelteken
    .replace(/,\s*,/g, ','); // dubbele komma's opruimen
  if (s !== orig) {
    await writeFile(f, s);
    changed++;
    console.log('fixed', path.relative(ROOT, f));
  }
}
console.log('files changed:', changed);
