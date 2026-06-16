import { defineConfig } from 'astro/config';

// ArtistLens — static site (output: 'static'), no SSR adapter required.
// Deploys to Cloudflare Pages with: build command `npm run build`, output `dist`.
export default defineConfig({
  site: 'https://artistlens.pages.dev',
  output: 'static',
  server: {
    host: true,
  },
  // Localization is handled manually via folder structure (/ and /ar),
  // explicit `lang` props, and src/i18n/ui.ts. No i18n routing layer is used,
  // which keeps nested dynamic routes like /ar/projects/[slug] working as plain
  // static-generated routes.
  build: {
    format: 'directory',
  },
});
