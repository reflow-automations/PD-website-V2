// Vercel serverless function (server-side). Checkt het admin-wachtwoord en
// geeft een GETEKENDE Cloudinary-upload terug. Niets gevoeligs bereikt de browser:
// het wachtwoord en de Cloudinary-secret staan in Vercel env-vars (geen client-prefix).
//
// Vereiste env-vars (Vercel > Project > Settings > Environment Variables):
//   ADMIN_UPLOAD_PASSWORD   het wachtwoord voor de /admin-pagina
//   CLOUDINARY_API_KEY      Cloudinary API key (het lange nummer)
//   CLOUDINARY_API_SECRET   Cloudinary API secret
//   CLOUDINARY_CLOUD_NAME   optioneel; default 'duduaq6hw'
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
  const password = body.password;
  const location = String(body.location || '').replace(/[^a-z0-9-]/gi, '').slice(0, 40);
  const caption = String(body.caption || '').replace(/[|=\n\r]/g, ' ').slice(0, 140).trim();

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

  const timestamp = Math.round(Date.now() / 1000);
  const folder = 'pd-gallery';
  const tags = ['pd-gallery', location ? `loc-${location}` : ''].filter(Boolean).join(',');

  // Exact de params die Cloudinary mee-ondertekent (alfabetisch, zonder
  // file/api_key/resource_type/signature). Wat je tekent moet je ook meesturen.
  const params: Record<string, string | number> = { folder, tags, timestamp };
  if (caption) params.context = `caption=${caption}`;

  const toSign = Object.keys(params)
    .sort()
    .map((k) => `${k}=${params[k]}`)
    .join('&');
  const signature = crypto.createHash('sha1').update(toSign + apiSecret).digest('hex');

  res.status(200).json({
    cloud,
    apiKey,
    timestamp,
    folder,
    tags,
    context: params.context || '',
    signature,
  });
}
