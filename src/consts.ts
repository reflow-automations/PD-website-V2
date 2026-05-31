// Centrale site-constanten. Externe systemen (boeken/login/webshop/app) blijven extern.

export const SITE = {
  name: 'Parkour Disciplines',
  tagline: 'Breek de zwaartekracht',
  shortDesc: 'De leukste Parkour & Freerunning school van Nederland',
  description:
    'Parkour Disciplines is dé Parkour & Freerunning school van Nederland. Indoor & outdoor lessen voor alle leeftijden op 6 locaties. Boek een gratis proefles.',
  url: 'https://parkourdisciplines.com',
  locale: 'nl_NL',
  foundedYear: 2006,
};

export const CONTACT = {
  phone: '085 076 5270',
  phoneHref: 'tel:0850765270',
  supportPhone: '085 076 5278',
  supportPhoneHref: 'tel:0850765278',
  email: 'info@parkourdisciplines.com',
  support: 'support@parkourdisciplines.com',
  admin: 'administratie@parkourdisciplines.com',
  cancel: 'opzeggen@parkourdisciplines.com',
};

export const EXTERNAL = {
  login: 'https://parkourdisciplines.gotgrib.nl/auth/login',
  webshop: 'https://freerunkleding.nl/',
  appApple: 'https://apps.apple.com/nl/app/parkour-disciplines/id1487928423',
  appGoogle: 'https://play.google.com/store/apps/details?id=com.gotgrib.parkourdisciplines&hl=nl',
  instagram: 'https://www.instagram.com/parkourdisciplines/',
  facebook: 'https://www.facebook.com/parkourdisciplines',
  youtube: 'https://www.youtube.com/channel/UC3TDKSU5_niM8G0MAiXDHGw',
};

// Centrale CTA voor de gratis proefles. De per-locatie deeplinks staan in de
// locatie-data; deze generieke knop stuurt naar de locatiekiezer.
export const TRIAL_HREF = '/locaties/';

// Endpoint voor contact-/zakelijk-formulieren. Leeg = mailto-fallback.
// Vul hier de n8n-webhook-URL in (server-only verwerking, geen key in de client).
export const FORM_ENDPOINT = '';

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: 'Lessen', href: '/lessen/' },
  { label: 'Lesrooster', href: '/lesrooster/' },
  { label: 'Locaties', href: '/locaties/' },
  { label: 'Kinderfeestjes', href: '/kinderfeestjes/' },
  { label: 'Zakelijk', href: '/zakelijk/' },
  { label: 'Over ons', href: '/over-ons/' },
  { label: 'Contact', href: '/contact/' },
];

// Footer-secties
export const FOOTER_LINKS = {
  ontdek: [
    { label: 'Lessen', href: '/lessen/' },
    { label: 'Lesrooster', href: '/lesrooster/' },
    { label: 'Locaties', href: '/locaties/' },
    { label: 'Over ons', href: '/over-ons/' },
    { label: 'Veelgestelde vragen', href: '/faq/' },
  ],
  aanbod: [
    { label: 'Gratis proefles', href: '/locaties/' },
    { label: 'Kinderfeestjes', href: '/kinderfeestjes/' },
    { label: 'Zakelijk & Urban Experience', href: '/zakelijk/' },
    { label: 'Webshop', href: EXTERNAL.webshop, external: true },
    { label: 'Inloggen leden', href: EXTERNAL.login, external: true },
  ],
  legal: [
    { label: 'Algemene voorwaarden', href: '/algemene-voorwaarden/' },
    { label: 'Privacyverklaring', href: '/privacyverklaring/' },
    { label: 'Cookiebeleid', href: '/cookiebeleid/' },
    { label: 'Vertrouwenspersoon', href: '/vertrouwenspersoon/' },
  ],
};

// Leeftijdsgroep-labels (consistent in rooster + lessen)
export const AGE_GROUPS = [
  '2 t/m 4 jaar',
  '4 t/m 6 jaar',
  'Ouder & kind',
  '6 t/m 9 jaar',
  '10 t/m 12 jaar',
  '6 t/m 12 jaar',
  '12 t/m 17 jaar',
  '12+ jaar',
  '(jong) volwassenen',
  '65+ jaar',
] as const;
