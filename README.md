# ArtistLens

موقع استوديو ArtistLens. مبني بـ Astro، مخرجات ثابتة، جاهز للنشر على Cloudflare Pages.
ثنائي اللغة (إنجليزي افتراضي + عربي تحت `/ar`)، وبنية المحتوى جاهزة لربط CMS لاحقاً.

A static, bilingual Astro site (English default + Arabic under `/ar`), structured
to be CMS-ready and to deploy to Cloudflare Pages.

## المتطلبات / Requirements

- Node.js 18.20.8+ / 20.3.0+ / 22+ (LTS recommended)
- npm

## التشغيل محلياً / Local development

```
npm install
npm run dev
```

Then open the printed local URL (default http://localhost:4321).

## البناء / Build

```
npm run build
npm run preview
```

The static site is generated into `dist/`.

## المكتبات المؤجلة / Deferred libraries

Motion libraries are intentionally NOT installed yet. They will be added only
when the animation phase begins:

```
npm install gsap lenis
```

## النشر / Deploy (Cloudflare Pages — later)

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`

Static output means no Workers / KV / D1 / R2 are required at this stage.

## الهوية / Identity

Design tokens in `src/styles/global.css` are NEUTRAL PLACEHOLDERS. The approved
identity (palette, typography, spacing) will be wired in from
`ARTISTLENS_IDENTITY_BUILD_SPEC.md` during the identity phase.

## البنية / Structure

```
src/
  consts.ts              # central site config (CMS-ready)
  content.config.ts      # projects collection schema (data, not in components)
  content/projects/      # bilingual markdown content (en/ , ar/)
  i18n/ui.ts             # interface strings + locale URL helpers
  layouts/BaseLayout.astro
  components/            # Header, Footer, LangSwitch, ProjectCard
  pages/                 # / , /ar , /projects/[slug] , /ar/projects/[slug]
  styles/global.css
public/                  # static assets + placeholder media
```
