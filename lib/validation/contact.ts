import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name must be less than 100 characters."),
  email: z.string()
    .trim()
    .email("Please enter a valid email address.")
    .max(255, "Email must be less than 255 characters."),
  message: z.string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(1000, "Message must be less than 1000 characters."),
});