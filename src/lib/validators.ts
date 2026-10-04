import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),

  companyWebsite: z
    .string()
    .max(200, "Website URL is too long")
    .optional()
    .or(z.literal("")),

  email: z.string().email("Please enter a valid email address"),

  phone: z
    .string()
    .regex(/^[+\d\s\-()]{7,20}$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),

  message: z
    .string()
    .min(10, "Please provide at least 10 characters describing what you plan to build")
    .max(5000, "Message is too long (max 5000 characters)"),

  agreeToTerms: z
    .boolean()
    .refine((val) => val === true, "You must agree to the Terms of Service and Privacy Statement"),

  // Anti-bot honeypot field (must remain empty for human users)
  botCheck: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
