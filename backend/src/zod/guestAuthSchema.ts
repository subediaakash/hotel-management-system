import { z } from "zod";
export const guestAuthSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string().min(4),
  dateOfBirth: z.string(),
  phoneNumber: z.number(),
  language: z.string(),
  work: z.string(),
});
