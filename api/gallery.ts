// Vercel serverless function (server-side). Leest de galerij-media uit Cloudinary
// via de Admin API, inclusief metadata (locatie-tag, datum, bijschrift). De
// Cloudinary-secret blijft hier server-side; de browser krijgt alleen kant-en-klare
// items terug. Geen publieke "Resource list"-toggle meer nodig.
//
// Env-vars: CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME (optioneel).
export default async function handler(req: any, res: any) {
  const cloud = process.env.CLOUDINARY_CLOUD_NAME || 'duduaq6hw';
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!apiKey || !apiSecret) {
    // Nog niet geconfigureerd: frontend valt terug op de publieke list-methode.
    res.status(200).json({ items: [], configured: false });
    return;
  }

  const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
  const items: any[] = [];

  for (const type of ['image', 'video']) {
    try {
      const url = `https://api.cloudinary.com/v1_1/${cloud}/resources/${type}/tags/pd-gallery?max_results=200&context=true&tags=true`;
      const r = await fetch(url, { headers: { Authorization: `Basic ${auth}` } });
      if (!r.ok) continue;
      const data: any = await r.json();
      for (const x of data.resources || []) {
        const locTag = (x.tags || []).find((t: string) => t.startsWith('loc-'));
        items.push({
          type,
          publicId: x.public_id,
          version: x.version,
          format: x.format,
          width: x.width || 4,
          height: x.height || 3,
          createdAt: x.created_at || null,
          location: locTag ? locTag.slice(4) : null,
          caption: (x.context && x.context.custom && x.context.custom.caption) || null,
        });
      }
    } catch {
      /* sla deze resource-type over */
    }
  }

  items.sort((a, b) => (b.version || 0) - (a.version || 0));
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
  res.status(200).json({ items, configured: true });
}
