// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://parkourdisciplines.com',
  integrations: [sitemap()],
  image: {
    // Astro uses sharp by default; allow remote logos/badges if ever needed
    domains: ['parkourdisciplines.com'],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
