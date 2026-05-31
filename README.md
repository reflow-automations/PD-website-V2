# Parkour Disciplines — website

Nieuwe marketing-site voor het parkourteam Parkour Disciplines. Cinematisch, snel en
content-gedreven. Vervangt de oude WordPress-site.

## Stack
- **Astro 5** (static) → **Vercel**
- Self-hosted fonts (Fontsource): **Anton** (display) + **Hanken Grotesk** (body)
- `@astrojs/sitemap`, `sharp` (image-optimalisatie naar AVIF/WebP)
- **Geen secrets in de client** — boeken/login/webshop/activiteiten zijn externe links
  (`gotgrib.nl`, `trainin.app`, `freerunkleding.nl`, app-stores)

## Commando's
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/
npm run preview    # serveer de build lokaal
```

## Waar staat wat?
- **Design tokens / stijl**: `src/styles/global.css` (kleuren, typografie, utilities)
- **Site-config** (nav, contact, externe links): `src/consts.ts`
- **Locaties + lesrooster + prijzen + team**: `src/data/locations.ts` (één bron van waarheid)
- **FAQ**: `src/data/faq.ts`
- **Herbruikbare content** (USP's, missie, stats, lesgroepen, nieuws): `src/data/content.ts`
- **Foto's** (geoptimaliseerd): `src/assets/photos/` — referentie via `src/lib/photos.ts`
- **Pagina's**: `src/pages/*.astro`
- **Componenten**: `src/components/*.astro` (o.a. `ScheduleExplorer` = het filterbare rooster)
- Bronmateriaal oude site: `Tekst oude website.txt` + `parkourdisciplines_com html scrape oude site.html`

Lestijden/prijzen wijzig je centraal in `src/data/locations.ts` — het rooster, de locatie-
pagina en de homepage updaten automatisch mee.

## Chatbot
Een AI-chatbubbel (rechtsonder, op elke pagina) beantwoordt vragen over lessen, locaties,
prijzen, lestijden en proeflessen.
- **Frontend**: `src/components/ChatWidget.astro` → POST naar de n8n-webhook met `{ message, sessionId }`.
- **Backend**: n8n-workflow "PD Chatbot (website)" (`https://n8n.reflowautomations.nl`): Webhook
  `/webhook/pd-chat` (CORS) → AI Agent (**GPT-4.1-mini**) met de volledige PD-kennis in de system
  prompt + Simple Memory per `sessionId` → Respond. Geen RAG/Pinecone nodig (de info is klein genoeg).
- De system prompt + workflow staan in `scripts/build-chatbot-workflow.mjs` (genereert
  `scripts/pd-chatbot.workflow.json`). Pas je content op de site aan? Werk dan ook de system
  prompt bij en run het script + `PUT` naar n8n.
- Webhook-URL staat in `CHAT_WEBHOOK` (`src/consts.ts`). Geen secrets client-side: de OpenAI-key
  blijft in n8n. Let op: de webhook is publiek; overweeg rate-limiting bij misbruik.

## Nog te doen / open punten
1. **Contactformulier**: blijft bewust een `mailto:`-link (opent de mailapp met vooraf ingevulde
   mail naar info@). Wil je later stille submits + notificatie? Vul dan `FORM_ENDPOINT` in `src/consts.ts`.
2. **Accentkleur**: nu signal-red `#E5392F`. Afstembaar op het logo in `global.css` (`--red`).
3. **Beeld per locatie**: nu zijn algemene actiefoto's hergebruikt. Vervang ze door echte
   locatiefoto's in `src/assets/photos/` (zelfde bestandsnaam) of pas `photo` aan in `locations.ts`.
4. **Fase 2**: 6 losse locatie-detailpagina's + eigen blog/nieuws (nu linken de nieuws-teasers
   tijdelijk naar de bestaande artikelen).
5. **Juridische pagina's**: gegenereerd uit de oude site — laat juridisch nog even nalezen.

## Deploy (Vercel)
Vercel detecteert Astro automatisch. Push de repo of koppel de map; build-commando `astro build`,
output `dist/`. Geen environment-variabelen nodig (m.u.v. eventueel de n8n-webhook, server-side).
