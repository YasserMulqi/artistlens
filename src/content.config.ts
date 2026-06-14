import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Projects are stored as markdown files under
// src/content/projects/<language>/<slug>-<language>.md
// IMPORTANT: by default the glob loader uses a `slug` frontmatter field as the
// entry id, which made both language files collide on the shared slug
// "classpro". The custom `generateId` below derives the id from the file path
// instead (e.g. "en/classpro-en", "ar/classpro-ar"), so ids are unique while
// the shared `slug` is preserved purely for route resolution. This keeps
// content out of components and stays CMS-ready.
const projects = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    language: z.enum(['en', 'ar']),
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
