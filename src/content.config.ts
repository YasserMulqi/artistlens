import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Projects are stored as markdown files under src/content/projects/<lang>/<slug>.md
// One file per (project, language). This separation keeps content out of
// components and makes a future migration to a CMS straightforward: the same
// schema can be mapped to CMS fields without changing any template.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    lang: z.enum(['en', 'ar']),
    client: z.string().optional(),
    year: z.number().optional(),
    category: z.string().optional(),
    summary: z.string(),
    // Media paths are plain strings on purpose: today they point to /public,
    // later they can point to a media CDN (e.g. Bunny) with zero schema changes.
    cover: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
