import { defineConfig } from 'astro/config';

// ArtistLens — static output (no SSR adapter needed for Cloudflare Pages).
// i18n: English is the default locale served at "/", Arabic served at "/ar".
export default defineConfig({
  site: 'https://artistlens.pages.dev',
  output: 'static',
  // Localization is handled manually via folder structure (/ and /ar),
  // explicit `lang` props, and src/i18n/ui.ts. No i18n routing layer is used,
  // which keeps nested dynamic routes like /ar/projects/[slug] working as plain
  // static-generated routes.
  build: {
    format: 'directory',
  },
});
