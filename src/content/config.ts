// src/content/config.ts - Ajout de la collection partners
import { defineCollection, z } from 'astro:content';

// Collections témoignages
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

// Collection partenaires pour l'infinite scroller
const partnersCollection = defineCollection({
  type: 'data',
  schema: z.object({
    website: z.string().url(),
    logo: z.string(), // Chemin vers src/assets/partners/
    logoAlt: z.string(),
    category: z.enum(['institutionnel', 'prive']),
    publishDate: z.date()
  })
});

export const collections = {
  testimonials: testimonialsCollection,
  partners: partnersCollection
};