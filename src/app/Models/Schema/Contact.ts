import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  phone: z.string().optional(),
  message: z.string().min(10),
  botField: z.string().optional(), // honeypot
});