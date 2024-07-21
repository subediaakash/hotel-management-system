import { z } from "zod";
export const locationSchema = z.object({
  date: z.string(),
  checkoutDate: z.string(),
  type: z.enum(["Individual", "Platinum", "LongTerm", "Vacation"]),
  location: z.string(),
});
