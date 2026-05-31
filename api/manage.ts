// Vercel serverless function (server-side). Beheer van bestaande galerij-media:
// bijschrift/locatie aanpassen of een item verwijderen. Wachtwoord-beveiligd;
// de Cloudinary-secret blijft server-side (Admin API met Basic auth).
//
// Env-vars: ADMIN_UPLOAD_PASSWORD, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET,
//           CLOUDINARY_CLOUD_NAME (optioneel).
import crypto from 'node:crypto';

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(String(a));
  const bb = Buffer.from(String(b));
  if (ab.length !== bb.length) return false;
  return crypto.timingSafeEqual(ab, bb);
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method_not_allowed' });
    return;
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  const { password, action, publicId } = body;
  const resourceType = body.resourceType === 'video' ? 'video' : 'image';

  const PW = process.env.ADMIN_UPLOAD_PASSWORD;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  const cloud = process.env.CLOUDINARY_CLOUD_NAME || 'duduaq6hw';

  if (!PW || !apiKey || !apiSecret) {
    res.status(500).json({ error: 'server_not_configured' });
    return;
  }
  if (typeof password !== 'string' || !safeEqual(password, PW)) {
    res.status(401).json({ error: 'unauthorized' });
    return;
  }
  if (!publicId || typeof publicId !== 'string') {
    res.status(400).json({ error: 'missing_public_id' });
    return;
  }

  const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
  const base = `https://api.cloudinary.com/v1_1/${cloud}/resources/${resourceType}/upload`;

  try {
    if (action === 'delete') {
      const url = `${base}?public_ids[]=${encodeURIComponent(publicId)}`;
      const r = await fetch(url, { method: 'DELETE', headers: { Authorization: `Basic ${auth}` } });
      const data: any = await r.json();
      if (!r.ok) throw new Error((data && data.error && data.error.message) || `HTTP ${r.status}`);
      res.status(200).json({ ok: true });
      return;
    }

    if (action === 'update') {
      const caption = String(body.caption || '').replace(/[|=\n\r]/g, ' ').slice(0, 140).trim();
      const location = String(body.location || '').replace(/[^a-z0-9-]/gi, '').slice(0, 40);
      const tags = ['pd-gallery', location ? `loc-${location}` : ''].filter(Boolean).join(',');

      // public_id kan slashes bevatten (mappen); die blijven padscheiders.
      const pidPath = publicId.split('/').map(encodeURIComponent).join('/');
      const params = new URLSearchParams();
      params.set('context', `caption=${caption}`);
      params.set('tags', tags);

      const r = await fetch(`${base}/${pidPath}`, {
        method: 'POST',
        headers: { Authorization: `Basic ${auth}`, 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      const data: any = await r.json();
      if (!r.ok) throw new Error((data && data.error && data.error.message) || `HTTP ${r.status}`);
      res.status(200).json({ ok: true });
      return;
    }

    res.status(400).json({ error: 'unknown_action' });
  } catch (e: any) {
    res.status(500).json({ error: String((e && e.message) || e) });
  }
}
