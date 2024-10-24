import { z } from "zod";

const MAX_IMAGES = 8;

export const speciesKoiSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  minSize: z.number().min(0, "Minimum size must be positive"),
  maxSize: z.number().min(0, "Maximum size must be positive"),
  price: z.number().min(0, "Price must be positive"),
  koiImages: z
    .array(z.string().url("Must be a valid URL"))
    .min(1, "At least one image is required")
    .max(MAX_IMAGES, `Maximum of ${MAX_IMAGES} images allowed`),
  color: z.string().min(2, "Color must be at least 2 characters"),
});

export type SpeciesKoiBodySchema = z.infer<typeof speciesKoiSchema>;
