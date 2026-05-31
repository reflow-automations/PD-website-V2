// Herbruikbare content-snippets, 1:1 uit de oude site (alleen licht opgepoetst).

export const USPS = [
  {
    title: 'Sterker & zelfverzekerder',
    text: 'Je wordt fysiek sterker, motorisch beter, overwint angsten en wordt hierdoor zelfverzekerder.',
  },
  {
    title: 'Een echte allround sport',
    text: 'Je traint je hele lichaam. Van een handstand tot aan een backflip, bij freerunning kan alles.',
  },
  {
    title: 'Leuk én leerbaar',
    text: 'Alle freeruntechnieken leer je op een simpele manier dankzij onze beproefde methodes.',
  },
] as const;

export const MISSION =
  'Parkour Disciplines is gewijd aan de veilige en verantwoorde groei van Parkour & Freerunning in Nederland. Onze missie: mensen van alle leeftijden en niveaus de kans geven om deze unieke, uitdagende sport te ervaren en te verkennen.';

export const MISSION_2 =
  'Ons team van gekwalificeerde instructeurs zorgt dat elke les veilig, uitdagend en leerzaam is. Want freerunning houdt je niet alleen fit, het ontwikkelt ook zelfvertrouwen, discipline en teamwork.';

export const STATS = [
  { value: '2006', label: 'Sinds' },
  { value: '6', label: 'Locaties' },
  { value: '20+', label: 'Coaches' },
  { value: 'Alle', label: 'Leeftijden' },
] as const;

// De progressie-ladder (homepage "Jouw pad") + lessen-pagina.
// `filter` = de leeftijds-filterkey in het lesrooster waar deze stap naar linkt.
export const PATH = [
  {
    key: 'peuters',
    title: 'Peuters & kleuters',
    age: '2-6 jaar',
    filter: 'peuters',
    text: 'Spelenderwijs bewegen, klimmen en springen. De allereerste kennismaking met de sport, vaak samen met papa of mama.',
  },
  {
    key: 'kids',
    title: 'Kids',
    age: '6-16 jaar',
    filter: 'kinderen',
    text: 'De basis van parkour & freerunning: rollen, springen, balanceren en de eerste salto-techniek, veilig opgebouwd.',
  },
  {
    key: 'jongeren',
    title: 'Jongeren',
    age: '16-21 jaar',
    filter: 'jeugd',
    text: 'Doorgroeien naar gevorderde technieken, flips en flow. Hier vinden jongeren hun stijl én hun crew.',
  },
  {
    key: 'volwassenen',
    title: 'Volwassenen',
    age: '21+ jaar',
    filter: 'volwassenen',
    text: 'Beginner of gevorderd: train kracht, controle en creativiteit. Leer je lichaam en omgeving inzetten voor spectaculaire bewegingen.',
  },
  {
    key: 'senioren',
    title: '65+',
    age: '65+ jaar',
    filter: 'senioren',
    text: 'Sportief bewegen over obstakels. Blijf fit, mobiel en zelfverzekerd in een groep die bij je past.',
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      'Een heel leuk energiek verjaardagsfeestje voor onze zoon. Weer eens wat anders. Free running past perfect bij kinderen die zin hebben in een actief feestje! Bedankt Reggy en Jesse!',
    author: 'Bram van Rijssel',
    context: 'Kinderfeestje',
  },
] as const;

// Korte teaser voor de community/over-ons sectie op de homepage.
export const FOUNDER_TEASER =
  'Het begon in 2006: oprichter Reggy Laatsch ging na een video over "russian climbing" met vrienden de straat op om te "freestylen". Uit die kleine groep groeide Parkour Disciplines, vandaag 6 locaties en een team van ruim 13 coaches.';

// Zakelijk / Urban Experience korte intro (homepage card).
export const ZAKELIJK_INTRO =
  'Van een inspirerende workshop of teambuilding tot een adembenemende demo of het inrichten van een Urban Sports Park, wij maken het op maat.';

export const KIDS_INTRO =
  'Het coolste feestje van de klas: springen, rennen en vliegen over uitdagende obstakels. Een onvergetelijke dag vol actie, plezier en veilige freerun-uitdagingen.';

// Laatste nieuws, links nu naar de bestaande artikelen; eigen blog volgt in fase 2.
export const NEWS = [
  {
    title: 'Tuingezel wandelt met een twist',
    date: '1 mei 2024',
    photo: 'coach-senior.jpg',
    imgPos: '50% 22%',
    excerpt:
      'Een unieke samenwerking tussen Tuingezel, een dagbesteding voor mensen met dementie, en Parkour Disciplines.',
    href: 'https://parkourdisciplines.com/tuingezel-wandelt-met-een-twist/',
  },
  {
    title: '65+ freerunning: sportief bewegen over obstakels',
    date: '21 november 2022',
    photo: 'group-65plus.jpg',
    imgPos: '50% 45%',
    excerpt: 'Op locatie Gymworld in Zoetermeer startte de eerste freerunning-les voor 65-plussers.',
    href: 'https://parkourdisciplines.com/65-freerunning-sportief-bewegen-over-obstakels/',
  },
  {
    title: 'K3 in Gymworld met Cato',
    date: '18 november 2022',
    photo: 'coach-kid.jpeg',
    imgPos: '50% 20%',
    excerpt: 'Cato, een van onze leerlingen, gaf een les aan Hanne van K3. Benieuwd wat ze deden?',
    href: 'https://parkourdisciplines.com/k3-in-gymworld-met-cato/',
  },
] as const;
