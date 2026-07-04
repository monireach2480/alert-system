import { z } from "zod"

export const inquirySchema = z.object({
  full_name: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(8, "Phone number must be at least 8 digits")
    .regex(/^[0-9+\s\-()]+$/, "Invalid phone number format"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message is too long"),
})

export type InquiryFormData = z.infer<typeof inquirySchema>