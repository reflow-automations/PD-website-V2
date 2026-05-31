// Download de ECHTE foto per locatie van de originele site.
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const DST = path.resolve(import.meta.dirname, '..', 'src', 'assets', 'photos');
const map = {
  'loc-hero.jpg': 'https://parkourdisciplines.com/wp-content/uploads/2023/11/hero.jpeg',
  'loc-gymworld.jpg': 'https://parkourdisciplines.com/wp-content/uploads/2024/05/DSC09310-2048x1536.jpg',
  'loc-roots.jpg': 'https://parkourdisciplines.com/wp-content/uploads/2023/11/roots.jpeg',
  'loc-play.jpg': 'https://parkourdisciplines.com/wp-content/uploads/2023/11/play.jpeg',
  'loc-silver.jpg': 'https://parkourdisciplines.com/wp-content/uploads/2023/11/silver.jpeg',
  'loc-nijmegen.jpg': 'https://parkourdisciplines.com/wp-content/uploads/2025/09/WhatsApp-Image-2026-04-08-at-14.41.56.jpeg',
};

await mkdir(DST, { recursive: true });
for (const [name, url] of Object.entries(map)) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(path.join(DST, name), buf);
    console.log('✓', name, (buf.length / 1024).toFixed(0) + 'KB');
  } catch (e) {
    console.log('✗', name, e.message);
  }
}
