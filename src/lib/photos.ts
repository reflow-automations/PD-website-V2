import type { ImageMetadata } from 'astro';

// Eagerly load every optimized photo so components can reference them by name.
const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/photos/*.{jpg,jpeg,png,webp}',
  { eager: true }
);

const photos: Record<string, ImageMetadata> = {};
for (const filePath in files) {
  const name = filePath.split('/').pop()!;
  photos[name] = files[filePath].default;
}

export function photo(name: string): ImageMetadata {
  const p = photos[name];
  if (!p) throw new Error(`[photos] Unknown photo "${name}". Available: ${Object.keys(photos).join(', ')}`);
  return p;
}

export default photos;
