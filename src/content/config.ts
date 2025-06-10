// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const testimonialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    clientName: z.string(),
    company: z.string(),
    order: z.number().default(0),
    publishDate: z.date(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  })
});

export const collections = {
  testimonials: testimonialsCollection
};