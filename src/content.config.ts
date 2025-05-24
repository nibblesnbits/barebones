import { defineCollection, z } from "astro:content";

const products = defineCollection({
  schema: ({}) =>
    z.object({
      title: z.string(),
      imageSrc: z.string(),
      badgeText: z.string().optional(),
      mediaFeature: z
        .object({
          text: z.string(),
          logoSrc: z.string(),
        })
        .optional(),
      features: z.array(z.string()).optional(),
      ctaText: z.string().optional().default("SHOP NOW"),
      ctaLink: z.string().optional().default("#"),
      ratings: z
        .object({
          stars: z.number(),
          source: z.string().optional(),
          additional: z
            .array(
              z.object({
                label: z.string(),
                value: z.string(),
              }),
            )
            .optional(),
        })
        .optional(),
      reviewLink: z
        .object({
          text: z.string(),
          url: z.string(),
        })
        .optional(),
    }),
});

export const collections = { products };
