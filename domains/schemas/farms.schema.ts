import { z } from "zod";

export const farmsSchema = z.object({
  name: z.string().min(1, "Farm name is required"),
  owner: z.string().min(1, "Farm owner is required"),
  address: z.string().min(1, "Address is required"),
  description: z.string().min(1, "Description is required"),
  farmImages: z
    .array(z.string())
    .max(8, "You can upload a maximum of 8 images"),
});

export type FarmsBodySchema = z.infer<typeof farmsSchema>;
