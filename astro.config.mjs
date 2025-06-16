// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Pacifico",
        cssVariable: "--font-pacifico"
      },
      {
        provider: fontProviders.google(),
        name: "Satisfy",
        cssVariable: "--font-satisfy"
      },
    ],
  },
  trailingSlash: "always",
  site: 'https://magali.pages.dev/',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'fr',
      locales: {
        fr: 'fr-FR',
        en: 'en-US',
        de: 'de-DE'
      }
    }
  })]
});