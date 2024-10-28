import { z } from "zod";

const envSchema = z.object({
  EXPO_PUBLIC_API_URL_BE: z.string(),
  EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
});

export const env = envSchema.parse({
  EXPO_PUBLIC_API_URL_BE: process.env.EXPO_PUBLIC_API_URL_BE,
  EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY:
    process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
});
