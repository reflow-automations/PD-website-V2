// FAQ, 1:1 overgenomen uit de oude site.
export interface QA {
  q: string;
  a: string;
}
export interface FaqCategory {
  title: string;
  items: QA[];
}

export const FAQ: FaqCategory[] = [
  {
    title: 'Algemeen',
    items: [
      {
        q: 'Hoe kan ik een gratis proefles boeken?',
        a: 'Je kunt een gratis proefles boeken door het formulier op onze website in te vullen. Deze proefles is geheel vrijblijvend en bedoeld om je kennis te laten maken met onze lessen.',
      },
      {
        q: 'Hoe kan ik lid worden?',
        a: 'Je kunt lid worden door je online aan te melden via onze website of persoonlijk bij onze locatie.',
      },
      {
        q: 'Wat houdt een lidmaatschap in?',
        a: 'Een lidmaatschap geeft toegang tot onze lessen voor de duur van het abonnement.',
      },
      {
        q: 'Hoe kan ik mijn abonnement opzeggen?',
        a: 'Om je abonnement op te zeggen, stuur je een e-mail naar opzeggen@parkourdisciplines.com met je lidmaatschapsgegevens en de reden van opzegging. Houd rekening met onze opzegtermijn, zoals vermeld in de Algemene Voorwaarden.',
      },
      {
        q: 'Kan ik mijn abonnement op elk moment opzeggen?',
        a: 'Ja, je kunt je abonnement op elk moment opzeggen. Het abonnement eindigt dan aan het einde van het lopende kwartaal. Meer details vind je in onze Algemene Voorwaarden.',
      },
      {
        q: 'Zijn er voorwaarden verbonden aan de gratis proefles?',
        a: 'De gratis proefles is eenmalig en bedoeld voor nieuwe leden om onze lessen te ervaren. Voor meer informatie over de voorwaarden, bezoek onze website of neem contact op.',
      },
    ],
  },
  {
    title: 'Financieel',
    items: [
      {
        q: 'Wat zijn de kosten bij inschrijving?',
        a: 'Bij inschrijving betaal je eenmalig €25 inschrijfkosten en de kosten voor de periode tot de volgende incasso, die je direct via iDEAL voldoet.',
      },
      {
        q: 'Wanneer en hoe wordt de contributie geïncasseerd?',
        a: 'De contributie wordt per kwartaal automatisch geïncasseerd, elke 25e van de maand voordat het nieuwe kwartaal ingaat.',
      },
      {
        q: 'Hoe kan ik mijn betaalgegevens wijzigen voor de automatische incasso?',
        a: 'Om je betaalgegevens voor automatische incasso te wijzigen, stuur een e-mail naar administratie@parkourdisciplines.com.',
      },
      {
        q: 'Kan ik een overzicht krijgen van mijn betaalde contributies?',
        a: 'Ja, je kunt een overzicht van je betalingen aanvragen door een e-mail te sturen naar administratie@parkourdisciplines.com.',
      },
      {
        q: 'Kan ik mijn contributie vooruit betalen?',
        a: 'Vooruitbetaling van contributie is mogelijk. Neem contact op met onze administratie voor meer informatie.',
      },
      {
        q: 'Wat gebeurt er als een automatische incasso niet lukt?',
        a: 'Als een automatische incasso niet lukt, nemen we contact met je op om het probleem op te lossen.',
      },
    ],
  },
  {
    title: 'App & lessen',
    items: [
      {
        q: 'Hoe werkt de vaste inschrijving voor lessen?',
        a: 'Met een vaste inschrijving ben je elke week automatisch ingeschreven voor dezelfde les op hetzelfde tijdstip.',
      },
      {
        q: 'Hoe meld ik me af voor een vaste les?',
        a: 'Meld je af via onze app of stuur ons een e-mail als je een vaste les niet kunt bijwonen.',
      },
      {
        q: 'Hoe kan ik een gemiste vaste les inhalen?',
        a: 'Als je een vaste les mist en je hebt je op tijd afgemeld, kun je deze inhalen door een andere les te reserveren binnen 1 week.',
      },
      {
        q: 'Is er een limiet aan hoe vaak ik een vaste les kan missen en inhalen?',
        a: 'Raadpleeg onze Algemene Voorwaarden voor details over de limieten voor het missen en inhalen van lessen.',
      },
    ],
  },
];
