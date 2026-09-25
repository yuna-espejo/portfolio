// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';

export default defineConfig({
  adapter: vercel(),
  integrations: [react()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'ca'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});