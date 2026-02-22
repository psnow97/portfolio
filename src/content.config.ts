import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  schema: z.object({
    title: z.string(),
    role: z.string(),
    org: z.string(),
    timeline: z.string(),
    team: z.string(),
    tools: z.array(z.string()),
    tags: z.array(z.string()),
    impactHeadline: z.string(),
    angle: z.string().optional(),
  }),
});

export const collections = { work }