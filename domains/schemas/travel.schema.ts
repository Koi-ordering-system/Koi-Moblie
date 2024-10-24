import { z } from "zod";

export const travelSchema = z.object({});

export type TravelBodySchema = z.infer<typeof travelSchema>;
