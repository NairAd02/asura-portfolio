import { z } from "zod";

export interface ContactFormDataSchema {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const contactFormDataSchema = z.object({
  name: z.string(),
  email: z.email({
    message: "El email debe de tener un formato válido",
  }),
  subject: z.string(),
  message: z.string(),
});
