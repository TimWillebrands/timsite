import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/writing', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			summary: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

// Work collection for case studies
const work = defineCollection({
    loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            summary: z.string(),
            pubDate: z.coerce.date(),
            heroImage: image().optional(),
            problem: z.string().optional(),
            role: z.string().optional(),
            solution: z.string().optional(),
            impact: z.string().optional(),
        }),
});

export const collections = { writing, work };
