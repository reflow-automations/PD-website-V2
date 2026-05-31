// Single source of truth voor alle locaties, lesroosters, prijzen en teams.
// Letterlijk overgenomen uit de oude site; alleen onmogelijke tijden gecorrigeerd
// (Hero Academy di 29:30 → 19:30). Boeken/activiteiten gaan extern via trainin.app.

export type LocationType = 'indoor' | 'outdoor' | 'both';

export interface RoosterSlot {
  dag: string;
  start: string;
  eind: string;
  groep: string;
  nieuw?: boolean;
}
export interface Price {
  label: string;
  prijs: string;
  periode?: string;
  url?: string;
}
export interface OpeningHour {
  dag: string;
  tijd: string;
}
export interface Address {
  street: string;
  postcode: string | null;
  city: string;
}
export interface Location {
  slug: string;
  name: string;
  city: string;
  type: LocationType;
  address: Address | null;
  intro: string;
  photo: string;
  imgPos?: string;
  bookHref: string;
  openingstijden: OpeningHour[];
  abonnementen: Price[];
  kinderfeestje: Price[];
  workshop: Price[];
  team: string[];
  rooster: RoosterSlot[];
}

export const DAGEN = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'] as const;

export const TYPE_LABEL: Record<LocationType, string> = {
  indoor: 'Indoor',
  outdoor: 'Outdoor',
  both: 'Indoor & outdoor',
};

// Eigen kleur per locatie, zodat het rooster scanbaar blijft als alles aan staat.
export const LOCATION_COLORS: Record<string, string> = {
  'hero-academy': '#FF6B3D',
  'gymworld-freerun-academy': '#3FA7FF',
  'roots-academy': '#4ADE80',
  'play-freerun-academy': '#FBBF24',
  'silver-academy': '#B79CFF',
  'locatie-nijmegen': '#2DD4BF',
};

export const locations: Location[] = [
  {
    slug: 'hero-academy',
    name: 'Hero Academy',
    city: 'Alphen aan den Rijn',
    type: 'indoor',
    address: { street: 'Kalkovenweg 7', postcode: '2401 LJ', city: 'Alphen aan den Rijn' },
    intro:
      'De Hero Academy in Alphen aan den Rijn is onze nieuwste aanwinst. Deze faciliteit is ontworpen voor een optimale trainingsomgeving voor Parkour & Freerunning. Met focus op kwaliteit en veiligheid, moderne apparatuur en ervaren coaches is dit een centrale ontmoetingsplek voor onze community.',
    photo: 'loc-hero.jpg',
    imgPos: '50% 45%',
    bookHref: 'https://hero-academy.trainin.app/',
    openingstijden: [
      { dag: 'Maandag', tijd: '16:00 - 21:00' },
      { dag: 'Dinsdag', tijd: '16:30 - 19:30' },
      { dag: 'Woensdag', tijd: '14:30 - 21:30' },
      { dag: 'Donderdag', tijd: '18:00 - 20:00' },
      { dag: 'Vrijdag', tijd: '15:45 - 17:45' },
      { dag: 'Zaterdag', tijd: '08:30 - 12:30' },
    ],
    abonnementen: [
      { label: '1x per week', prijs: '€114,75', periode: 'per kwartaal' },
      { label: '2x per week', prijs: '€153,50', periode: 'per kwartaal' },
      { label: '3x per week', prijs: '€196,00', periode: 'per kwartaal' },
      { label: '1x per week (50+ jaar)', prijs: '€95,25', periode: 'per kwartaal' },
    ],
    kinderfeestje: [
      { label: 'Kinderfeestje 1,5 uur', prijs: '€150,00', url: 'https://hero-academy.trainin.app/activities/LNKYNO/kinderfeestje-15-uur' },
      { label: 'Kinderfeestje 2 uur', prijs: '€217,50', url: 'https://hero-academy.trainin.app/activities/L99OG5/kinderfeestje-2-uur' },
    ],
    workshop: [
      { label: 'Workshop 1 uur', prijs: '€150,00 excl. btw', url: 'https://hero-academy.trainin.app/activities/LBN8Y9/workshop-1-uur' },
      { label: 'Workshop 1,5 uur', prijs: '€200 excl. btw', url: 'https://hero-academy.trainin.app/activities/L3GYK5/workshop-15-uur' },
      { label: 'Workshop 2 uur', prijs: '€250 excl. btw', url: 'https://hero-academy.trainin.app/activities/LRNOKN/workshop-2-uur' },
      { label: 'Workshop 4 uur', prijs: '€450 excl. btw', url: 'https://hero-academy.trainin.app/activities/LXEGW6/workshop-4-uur' },
      { label: 'Workshop 8 uur', prijs: '€850 excl. btw', url: 'https://hero-academy.trainin.app/activities/L8XE5Q/workshop-8-uur' },
    ],
    team: ['Tim Hoogendoorn', 'Jesse Redegeld', 'Owen de Bruin'],
    rooster: [
      { dag: 'Maandag', start: '18:00', eind: '19:00', groep: '10 t/m 12 jaar' },
      { dag: 'Maandag', start: '19:00', eind: '20:00', groep: '12+ jaar' },
      { dag: 'Dinsdag', start: '16:30', eind: '17:30', groep: '6 t/m 9 jaar' },
      { dag: 'Dinsdag', start: '17:30', eind: '18:30', groep: '10 t/m 12 jaar' },
      { dag: 'Dinsdag', start: '18:30', eind: '19:30', groep: '12+ jaar' },
      { dag: 'Woensdag', start: '14:30', eind: '15:30', groep: '6 t/m 9 jaar' },
      { dag: 'Woensdag', start: '15:30', eind: '16:30', groep: '6 t/m 9 jaar' },
      { dag: 'Woensdag', start: '16:30', eind: '17:30', groep: '10 t/m 12 jaar' },
      { dag: 'Woensdag', start: '18:00', eind: '19:00', groep: '6 t/m 12 jaar' },
      { dag: 'Woensdag', start: '19:00', eind: '20:00', groep: '12 t/m 17 jaar' },
      { dag: 'Woensdag', start: '20:00', eind: '21:30', groep: '(jong) volwassenen' },
      { dag: 'Donderdag', start: '10:00', eind: '11:00', groep: '65+ jaar' },
      { dag: 'Donderdag', start: '18:00', eind: '19:00', groep: '6 t/m 12 jaar' },
      { dag: 'Donderdag', start: '19:00', eind: '20:00', groep: '12 t/m 17 jaar' },
      { dag: 'Vrijdag', start: '15:45', eind: '16:45', groep: '6 t/m 9 jaar' },
      { dag: 'Vrijdag', start: '16:45', eind: '17:45', groep: '10 t/m 12 jaar' },
      { dag: 'Zaterdag', start: '08:30', eind: '09:30', groep: 'Ouder & kind' },
      { dag: 'Zaterdag', start: '09:30', eind: '10:30', groep: 'Ouder & kind' },
      { dag: 'Zaterdag', start: '10:30', eind: '11:30', groep: '6 t/m 9 jaar' },
      { dag: 'Zaterdag', start: '11:30', eind: '12:30', groep: '6 t/m 9 jaar' },
      { dag: 'Zondag', start: '10:00', eind: '10:45', groep: '2 t/m 4 jaar (incl. ouders)' },
      { dag: 'Zondag', start: '10:45', eind: '11:30', groep: '4 t/m 6 jaar' },
    ],
  },
  {
    slug: 'gymworld-freerun-academy',
    name: 'Gymworld Freerun Academy',
    city: 'Zoetermeer',
    type: 'indoor',
    address: { street: 'Amerikaweg 135', postcode: '2717 AV', city: 'Zoetermeer' },
    intro:
      'Gymworld Freerun Academy in Zoetermeer is onze grootste locatie. Een uitgebreid aanbod aan Parkour- en Freerunning-faciliteiten, geschikt voor alle niveaus. Als kern van onze community in Zoetermeer staat hier passie voor beweging centraal, elke training is uitdagend én veilig.',
    photo: 'loc-gymworld.jpg',
    bookHref: 'https://gymworld-freerun-academy.trainin.app/',
    openingstijden: [
      { dag: 'Maandag', tijd: '16:00 - 21:15' },
      { dag: 'Dinsdag', tijd: '15:00 - 21:00' },
      { dag: 'Woensdag', tijd: '13:30 - 20:00' },
      { dag: 'Donderdag', tijd: '12:30 - 19:00' },
      { dag: 'Vrijdag', tijd: '16:00 - 20:00' },
      { dag: 'Zaterdag', tijd: '09:00 - 13:00' },
      { dag: 'Zondag', tijd: '11:00 - 15:00' },
    ],
    abonnementen: [
      { label: '1x per week', prijs: '€112,25', periode: 'per kwartaal' },
      { label: '2x per week', prijs: '€159,75', periode: 'per kwartaal' },
      { label: '3x per week', prijs: '€201,75', periode: 'per kwartaal' },
      { label: 'Kleuterparkour (1x p.w.)', prijs: '€86,75', periode: 'per kwartaal' },
      { label: '65+ (1x p.w.)', prijs: '€95,25', periode: 'per kwartaal' },
      { label: '65+ (2x p.w.)', prijs: '€137,25', periode: 'per kwartaal' },
      { label: '1 ouder + 1 kind', prijs: '€179,25', periode: 'per kwartaal' },
      { label: '1 ouder + 2 kind', prijs: '€235,25', periode: 'per kwartaal' },
      { label: '1 ouder + 3 kind', prijs: '€280,00', periode: 'per kwartaal' },
    ],
    kinderfeestje: [
      { label: 'Kinderfeestje 1,5 uur', prijs: '€185,00', url: 'https://gymworld-freerun-academy.trainin.app/activities/LQBG7G/kinderfeestje-15-uur' },
      { label: 'Kinderfeestje 2 uur', prijs: '€252,50', url: 'https://gymworld-freerun-academy.trainin.app/activities/LPQGBY/kinderfeestje-2-uur' },
    ],
    workshop: [
      { label: 'Workshop 1 uur', prijs: '€150,00 excl. btw', url: 'https://gymworld-freerun-academy.trainin.app/activities/L4EOR2/workshop-1-uur' },
      { label: 'Workshop 1,5 uur', prijs: '€200 excl. btw', url: 'https://gymworld-freerun-academy.trainin.app/activities/LRNE2N/workshop-15-uur' },
      { label: 'Workshop 2 uur', prijs: '€250 excl. btw', url: 'https://gymworld-freerun-academy.trainin.app/activities/LOQ5WO/workshop-2-uur' },
      { label: 'Workshop 4 uur', prijs: '€450 excl. btw', url: 'https://gymworld-freerun-academy.trainin.app/activities/LXE496/workshop-4-uur' },
      { label: 'Workshop 8 uur', prijs: '€850 excl. btw', url: 'https://gymworld-freerun-academy.trainin.app/activities/L8XW7Q/workshop-8-uur' },
    ],
    team: ['Xander Smits', 'Jonathan Does', 'Rick Hoogerwaard', 'Matthijs van Roon', 'Benjamin Warners', 'Wessel Harm', 'Sepp Bollen', 'Justin Thimister'],
    rooster: [
      { dag: 'Maandag', start: '16:00', eind: '17:00', groep: '6 t/m 9 jaar' },
      { dag: 'Maandag', start: '17:00', eind: '18:00', groep: '6 t/m 9 jaar' },
      { dag: 'Maandag', start: '18:00', eind: '19:00', groep: '10 t/m 12 jaar' },
      { dag: 'Maandag', start: '19:00', eind: '20:00', groep: '13 t/m 17 jaar' },
      { dag: 'Maandag', start: '20:15', eind: '21:15', groep: '65+ jaar' },
      { dag: 'Dinsdag', start: '17:00', eind: '18:00', groep: '6 t/m 9 jaar' },
      { dag: 'Dinsdag', start: '18:00', eind: '19:00', groep: '6 t/m 9 jaar' },
      { dag: 'Dinsdag', start: '19:00', eind: '20:00', groep: '10 t/m 12 jaar' },
      { dag: 'Dinsdag', start: '20:00', eind: '21:00', groep: '13 t/m 17 jaar' },
      { dag: 'Woensdag', start: '13:30', eind: '14:30', groep: '6 t/m 9 jaar' },
      { dag: 'Woensdag', start: '14:30', eind: '15:30', groep: '6 t/m 9 jaar' },
      { dag: 'Woensdag', start: '17:00', eind: '18:00', groep: '10 t/m 12 jaar' },
      { dag: 'Woensdag', start: '18:00', eind: '19:00', groep: '13 t/m 17 jaar' },
      { dag: 'Woensdag', start: '19:00', eind: '20:00', groep: '18+ jaar' },
      { dag: 'Donderdag', start: '12:30', eind: '13:30', groep: '65+ jaar' },
      { dag: 'Donderdag', start: '16:00', eind: '17:00', groep: '6 t/m 9 jaar' },
      { dag: 'Donderdag', start: '17:00', eind: '18:00', groep: '10 t/m 12 jaar' },
      { dag: 'Donderdag', start: '18:00', eind: '19:00', groep: 'Ouder & kind' },
      { dag: 'Vrijdag', start: '16:00', eind: '17:00', groep: '6 t/m 9 jaar' },
      { dag: 'Vrijdag', start: '17:00', eind: '18:00', groep: '6 t/m 9 jaar' },
      { dag: 'Vrijdag', start: '18:00', eind: '19:00', groep: '6 t/m 12 jaar' },
      { dag: 'Vrijdag', start: '19:00', eind: '20:00', groep: '10 t/m 12 jaar' },
      { dag: 'Zaterdag', start: '09:00', eind: '10:00', groep: 'Ouder & kind' },
      { dag: 'Zaterdag', start: '10:00', eind: '11:00', groep: '10 t/m 12 jaar' },
      { dag: 'Zaterdag', start: '11:00', eind: '12:00', groep: '13 t/m 17 jaar' },
      { dag: 'Zaterdag', start: '12:00', eind: '13:00', groep: '18+ jaar' },
      { dag: 'Zondag', start: '11:00', eind: '11:45', groep: '4 t/m 6 jaar' },
      { dag: 'Zondag', start: '12:00', eind: '13:00', groep: '6 t/m 9 jaar' },
      { dag: 'Zondag', start: '13:00', eind: '14:00', groep: '6 t/m 9 jaar' },
      { dag: 'Zondag', start: '14:00', eind: '15:00', groep: '10 t/m 12 jaar' },
    ],
  },
  {
    slug: 'roots-academy',
    name: 'Roots Academy',
    city: 'Zoetermeer',
    type: 'outdoor',
    address: { street: 'De Warande', postcode: null, city: 'Zoetermeer' },
    intro:
      'Roots Academy Zoetermeer is onze unieke outdoor trainingslocatie, trainen in de open lucht met diverse uitdagingen in de natuurlijke omgeving. Bij slecht weer verplaatsen de trainingen naar onze "geheime" hybride binnenlocatie, zodat trainingen altijd doorgaan.',
    photo: 'loc-roots.jpg',
    bookHref: 'https://roots-academy.trainin.app/',
    openingstijden: [
      { dag: 'Maandag', tijd: '20:30 - 21:30' },
      { dag: 'Dinsdag', tijd: '16:30 - 22:00' },
      { dag: 'Woensdag', tijd: '13:30 - 22:15' },
      { dag: 'Donderdag', tijd: '19:00 - 20:30' },
      { dag: 'Vrijdag', tijd: '16:00 - 20:00' },
      { dag: 'Zaterdag', tijd: '10:00 - 18:00' },
      { dag: 'Zondag', tijd: '08:00 - 16:30' },
    ],
    abonnementen: [
      { label: '1x per week', prijs: '€89,75', periode: 'per kwartaal' },
      { label: '2x per week', prijs: '€120,00', periode: 'per kwartaal' },
      { label: '3x per week', prijs: '€140,00', periode: 'per kwartaal' },
      { label: 'Calisthenics (1x p.w.)', prijs: '€89,75', periode: 'per kwartaal' },
      { label: 'Onbeperkt', prijs: '€154,00', periode: 'per kwartaal' },
      { label: 'Insaiyen', prijs: '€168,00', periode: 'per kwartaal' },
    ],
    kinderfeestje: [
      { label: 'Kinderfeestje 1,5 uur', prijs: '€150,00', url: 'https://roots-academy.trainin.app/activities/LLXDE5/kinderfeestje-15-uur' },
    ],
    workshop: [
      { label: 'Workshop 1 uur', prijs: '€150,00 excl. btw', url: 'https://roots-academy.trainin.app/activities/LLXY75/workshop-1-uur' },
      { label: 'Workshop 1,5 uur', prijs: '€200 excl. btw', url: 'https://roots-academy.trainin.app/activities/L6N8W2/workshop-15-uur' },
      { label: 'Workshop 2 uur', prijs: '€250 excl. btw', url: 'https://roots-academy.trainin.app/activities/LQBQ8G/workshop-2-uur' },
    ],
    team: ['Reggy Laatsch', 'Troy Coenraats', 'Jordy Sie', 'Wessel Harm', 'Robin Korte'],
    rooster: [
      { dag: 'Maandag', start: '20:30', eind: '21:30', groep: 'Conditioning (vanaf 12 jaar)' },
      { dag: 'Dinsdag', start: '18:00', eind: '19:30', groep: 'Alle leeftijden (vanaf 7 jaar)' },
      { dag: 'Dinsdag', start: '19:00', eind: '20:00', groep: '10 t/m 12 jaar' },
      { dag: 'Dinsdag', start: '20:00', eind: '21:00', groep: '13+ jaar' },
      { dag: 'Dinsdag', start: '21:00', eind: '22:00', groep: 'Calisthenics (vanaf 14 jaar)' },
      { dag: 'Woensdag', start: '13:30', eind: '14:30', groep: 'Ouder & kind (vanaf 7 jaar)' },
      { dag: 'Woensdag', start: '14:30', eind: '15:30', groep: '7 t/m 12 jaar' },
      { dag: 'Woensdag', start: '15:30', eind: '16:30', groep: '7 t/m 12 jaar' },
      { dag: 'Woensdag', start: '18:00', eind: '19:30', groep: '13+ jaar' },
      { dag: 'Woensdag', start: '19:30', eind: '21:00', groep: '18+ jaar' },
      { dag: 'Woensdag', start: '21:00', eind: '22:30', groep: 'Conditioning (vanaf 12 jaar)' },
      { dag: 'Donderdag', start: '15:30', eind: '16:30', groep: 'Ouder & kind (vanaf 7 jaar)' },
      { dag: 'Donderdag', start: '19:00', eind: '20:30', groep: 'Alle leeftijden (vanaf 7 jaar)' },
      { dag: 'Vrijdag', start: '16:00', eind: '17:00', groep: '7 t/m 12 jaar' },
      { dag: 'Vrijdag', start: '17:00', eind: '18:00', groep: '13+ jaar' },
      { dag: 'Vrijdag', start: '18:00', eind: '19:00', groep: 'Tricking (vanaf 12 jaar)' },
      { dag: 'Vrijdag', start: '19:00', eind: '20:00', groep: 'Calisthenics (vanaf 14 jaar)' },
      { dag: 'Zaterdag', start: '10:00', eind: '11:30', groep: '7 t/m 12 jaar' },
      { dag: 'Zaterdag', start: '10:00', eind: '11:30', groep: '13+ jaar' },
      { dag: 'Zaterdag', start: '12:00', eind: '13:30', groep: 'Alle leeftijden (vanaf 7 jaar)' },
      { dag: 'Zondag', start: '08:00', eind: '09:00', groep: 'Ouder & kind (vanaf 7 jaar)' },
      { dag: 'Zondag', start: '09:30', eind: '10:15', groep: '4 t/m 6 jaar' },
      { dag: 'Zondag', start: '09:30', eind: '10:30', groep: 'Ouder & kind (vanaf 7 jaar)' },
      { dag: 'Zondag', start: '10:30', eind: '11:30', groep: 'Ouder & kind (vanaf 7 jaar)' },
      { dag: 'Zondag', start: '11:30', eind: '12:30', groep: 'Woman only (7 t/m 12 jaar)' },
    ],
  },
  {
    slug: 'play-freerun-academy',
    name: 'Play Freerun Academy',
    city: 'Leiden',
    type: 'indoor',
    address: { street: 'Lopsenstraat 2', postcode: '2312 ZZ', city: 'Leiden' },
    intro:
      'Bij Play Freerun Academy vlak bij het centrum van Leiden trainen liefhebbers van alle leeftijden in een dynamische omgeving met verplaatsbare obstakels. De indeling verandert regelmatig en biedt steeds nieuwe uitdagingen, perfect om je vaardigheden te blijven ontwikkelen.',
    photo: 'loc-play.jpg',
    bookHref: 'https://play-freerun-academy.trainin.app/',
    openingstijden: [
      { dag: 'Dinsdag', tijd: '17:00 - 20:00' },
      { dag: 'Woensdag', tijd: '13:30 - 20:00' },
      { dag: 'Donderdag', tijd: '16:00 - 20:00' },
      { dag: 'Vrijdag', tijd: '17:00 - 20:00' },
      { dag: 'Zaterdag', tijd: '10:00 - 13:00' },
    ],
    abonnementen: [
      { label: '1x per week', prijs: '€103,50', periode: 'per kwartaal' },
      { label: '2x per week', prijs: '€142,50', periode: 'per kwartaal' },
      { label: '3x per week', prijs: '€184,75', periode: 'per kwartaal' },
    ],
    kinderfeestje: [
      { label: 'Kinderfeestje 1,5 uur', prijs: '€175,00', url: 'https://play-freerun-academy.trainin.app/activities/LXERK6/kinderfeestje-15-uur' },
      { label: 'Kinderfeestje 2 uur', prijs: '€232,50', url: 'https://play-freerun-academy.trainin.app/activities/L8XRVQ/kinderfeestje-2-uur' },
    ],
    workshop: [
      { label: 'Workshop 1 uur', prijs: '€150,00 excl. btw', url: 'https://play-freerun-academy.trainin.app/activities/LY9R37/workshop-1-uur' },
      { label: 'Workshop 1,5 uur', prijs: '€200 excl. btw', url: 'https://play-freerun-academy.trainin.app/activities/LGLO6Y/workshop-15-uur' },
      { label: 'Workshop 2 uur', prijs: '€250 excl. btw', url: 'https://play-freerun-academy.trainin.app/activities/L2GQJ9/workshop-2-uur' },
      { label: 'Workshop 4 uur', prijs: '€450 excl. btw', url: 'https://play-freerun-academy.trainin.app/activities/L5DXLL/workshop-4-uur' },
      { label: 'Workshop 8 uur', prijs: '€850 excl. btw', url: 'https://play-freerun-academy.trainin.app/activities/L76DW8/workshop-8-uur' },
    ],
    team: ['André Sannikov', 'Luuk van de Lint', 'Sid Anderson', 'Tjalle Jongejan'],
    rooster: [
      { dag: 'Maandag', start: '18:00', eind: '19:00', groep: '6 t/m 9 jaar', nieuw: true },
      { dag: 'Maandag', start: '18:00', eind: '19:00', groep: 'Ouder & kind', nieuw: true },
      { dag: 'Maandag', start: '19:00', eind: '20:00', groep: '10 t/m 12 jaar', nieuw: true },
      { dag: 'Dinsdag', start: '17:00', eind: '18:00', groep: '10 t/m 12 jaar' },
      { dag: 'Dinsdag', start: '18:00', eind: '19:00', groep: '6 t/m 9 jaar' },
      { dag: 'Dinsdag', start: '19:00', eind: '20:00', groep: '10 t/m 12 jaar' },
      { dag: 'Woensdag', start: '13:30', eind: '14:30', groep: '6 t/m 9 jaar' },
      { dag: 'Woensdag', start: '14:30', eind: '15:30', groep: '6 t/m 9 jaar' },
      { dag: 'Woensdag', start: '17:00', eind: '18:00', groep: '10 t/m 12 jaar' },
      { dag: 'Woensdag', start: '18:00', eind: '19:00', groep: '13 t/m 17 jaar' },
      { dag: 'Woensdag', start: '19:00', eind: '20:00', groep: '18+ jaar' },
      { dag: 'Donderdag', start: '16:00', eind: '17:00', groep: '6 t/m 9 jaar' },
      { dag: 'Donderdag', start: '17:00', eind: '18:00', groep: '10 t/m 12 jaar' },
      { dag: 'Donderdag', start: '18:00', eind: '19:00', groep: '18+ jaar' },
      { dag: 'Vrijdag', start: '17:00', eind: '18:00', groep: '6 t/m 9 jaar' },
      { dag: 'Vrijdag', start: '18:00', eind: '19:00', groep: '10 t/m 12 jaar' },
      { dag: 'Vrijdag', start: '19:00', eind: '20:00', groep: '13 t/m 17 jaar' },
      { dag: 'Zaterdag', start: '10:00', eind: '11:00', groep: '6 t/m 9 jaar' },
      { dag: 'Zaterdag', start: '11:00', eind: '12:00', groep: '10 t/m 12 jaar' },
      { dag: 'Zaterdag', start: '12:00', eind: '13:00', groep: '13 t/m 17 jaar' },
    ],
  },
  {
    slug: 'silver-academy',
    name: 'Silver Academy',
    city: 'Krimpenerwaard',
    type: 'both',
    address: null,
    intro:
      'Silver Academy in de Krimpenerwaard biedt zowel binnen- als buitenlessen, verspreid over verschillende locaties in de regio. Daardoor trainen we het hele jaar door. Voor jong en oud, van beginner tot gevorderd, een levendige community waar plezier, groei en samen trainen centraal staan.',
    photo: 'loc-silver.jpg',
    imgPos: '50% 38%',
    bookHref: '/contact/',
    openingstijden: [],
    abonnementen: [
      { label: '1x per week', prijs: '€78,25', periode: 'per kwartaal' },
      { label: '2x per week', prijs: '€140,75', periode: 'per kwartaal' },
    ],
    kinderfeestje: [],
    workshop: [],
    team: ['Rick Hoogerwaard'],
    rooster: [
      { dag: 'Maandag', start: '21:00', eind: '22:00', groep: 'Calisthenics (14+ jaar)' },
      { dag: 'Dinsdag', start: '17:30', eind: '18:30', groep: '7 t/m 9 jaar' },
      { dag: 'Dinsdag', start: '18:30', eind: '19:30', groep: '10+ jaar' },
      { dag: 'Donderdag', start: '16:00', eind: '17:00', groep: '7 t/m 9 jaar' },
      { dag: 'Donderdag', start: '17:00', eind: '18:00', groep: '7 t/m 9 jaar' },
      { dag: 'Donderdag', start: '18:00', eind: '19:00', groep: '7 t/m 9 jaar' },
      { dag: 'Donderdag', start: '19:00', eind: '20:00', groep: '10+ jaar' },
      { dag: 'Vrijdag', start: '14:30', eind: '15:30', groep: '4 t/m 6 jaar' },
      { dag: 'Vrijdag', start: '16:00', eind: '17:00', groep: '7 t/m 9 jaar' },
      { dag: 'Vrijdag', start: '17:00', eind: '18:00', groep: '10+ jaar' },
      { dag: 'Zaterdag', start: '10:00', eind: '11:15', groep: '7 t/m 14 jaar' },
      { dag: 'Zaterdag', start: '11:45', eind: '13:00', groep: 'Volwassenen' },
    ],
  },
  {
    slug: 'locatie-nijmegen',
    name: 'Locatie Nijmegen',
    city: 'Nijmegen',
    type: 'outdoor',
    address: { street: 'Ridderstraat 23', postcode: '6511 TM', city: 'Nijmegen' },
    intro:
      'Locatie Nijmegen is onze nieuwste outdoor trainingslocatie, in de bruisende stad aan de Waal. Onder begeleiding van ervaren coaches train je binnen in een gymzaal of buiten op uitdagende obstakels. Voor elk niveau een uitdaging, of je nu net begint of al jaren traint.',
    photo: 'loc-nijmegen.jpg',
    imgPos: '50% 52%',
    bookHref: '/contact/',
    openingstijden: [
      { dag: 'Weekdagen', tijd: '09:00 - 21:00' },
      { dag: 'Weekend', tijd: '09:00 - 17:00' },
    ],
    abonnementen: [{ label: '1x per week', prijs: '€30,-', periode: 'per maand' }],
    kinderfeestje: [{ label: 'Kinderfeestje 1,5 uur', prijs: 'Prijs op aanvraag' }],
    workshop: [
      { label: 'Workshop 1 uur', prijs: 'Prijs op aanvraag' },
      { label: 'Workshop 1,5 uur', prijs: 'Prijs op aanvraag' },
      { label: 'Workshop 2 uur', prijs: 'Prijs op aanvraag' },
    ],
    team: ['Philip Joosten'],
    rooster: [
      { dag: 'Zaterdag', start: '10:00', eind: '11:00', groep: 'Volwassenen' },
      { dag: 'Zaterdag', start: '11:00', eind: '12:00', groep: '8 t/m 12 jaar' },
    ],
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);

// ---- Rooster: één platte lijst over alle locaties, voor het filterbare overzicht ----
export interface RoosterEntry extends RoosterSlot {
  locationSlug: string;
  locationName: string;
  locationType: LocationType;
  city: string;
}

export const allRooster: RoosterEntry[] = locations.flatMap((l) =>
  l.rooster.map((r) => ({
    ...r,
    locationSlug: l.slug,
    locationName: l.name,
    locationType: l.type,
    city: l.city,
  }))
);

// ---- Leeftijdscategorieën (voor de filterchips) ----
export type AgeKey = 'peuters' | 'kinderen' | 'jeugd' | 'volwassenen' | 'senioren' | 'ouder-kind' | 'specials';

export const AGE_FILTERS: { key: AgeKey; label: string }[] = [
  { key: 'peuters', label: 'Peuters & kleuters' },
  { key: 'kinderen', label: 'Kinderen (6-12)' },
  { key: 'jeugd', label: 'Jeugd (12-17)' },
  { key: 'volwassenen', label: 'Volwassenen' },
  { key: 'senioren', label: '65+' },
  { key: 'ouder-kind', label: 'Ouder & kind' },
  { key: 'specials', label: 'Specials' },
];

export function ageKey(groep: string): AgeKey {
  const g = groep.toLowerCase();
  if (g.includes('ouder')) return 'ouder-kind';
  if (g.includes('65+') || g.includes('50+')) return 'senioren';
  if (/2 t\/m 4|4 t\/m 6|kleuter|peuter/.test(g)) return 'peuters';
  if (g.includes('woman only')) return 'kinderen';
  if (/calisthenics|conditioning|tricking|insaiyen/.test(g)) return 'specials';
  if (/volwassen|18\+/.test(g)) return 'volwassenen';
  if (/12 t\/m 17|13 t\/m 17|12\+|13\+|10\+/.test(g)) return 'jeugd';
  if (/\d/.test(g)) return 'kinderen';
  return 'specials';
}

export const stripNieuw = (dag: string) => dag.replace(/\s*\(NIEUW\)\s*/i, '').trim();

export function mapsUrl(loc: Location): string | null {
  if (!loc.address) return null;
  const q = [loc.address.street, loc.address.postcode, loc.address.city].filter(Boolean).join(' ');
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q + ' Parkour Disciplines')}`;
}
