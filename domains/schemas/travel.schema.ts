import { z } from "zod";

export const travelSchema = z.object({
  farmId: z.string().min(1, "Farm is required"),
  days: z.number().min(1, "Days must be at least 1"),
  price: z.number().min(0, "Price must be non-negative"),
});

export type TravelBodySchema = z.infer<typeof travelSchema>;
