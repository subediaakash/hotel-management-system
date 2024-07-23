import { z } from "zod";

export const passportSchema = z.object({
  passportNumber: z.number(),
  passportIssueDate: z.string(),
  passportExpiryDate: z.string(),
  dateOfBirth: z.string(),
  placeOfBirth: z.string(),
  passportCountry: z.string(),
});