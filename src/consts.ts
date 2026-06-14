// Central site configuration.
// Keeping global values here (not hard-coded in components) keeps the project
// CMS-ready: a future CMS can override these without touching markup.

export const SITE = {
  name: 'ArtistLens',
  defaultLang: 'en' as const,
  locales: ['en', 'ar'] as const,
  // Update once the production domain is connected in Cloudflare Pages.
  url: 'https://artistlens.pages.dev',
  social: {
    instagram: '',
    behance: '',
    vimeo: '',
  },
} as const;

export type Lang = (typeof SITE.locales)[number];
