import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.date(),
      heroImage: image().optional(),
    }),
});

export const collections = {
  blog,
};