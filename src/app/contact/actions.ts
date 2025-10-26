
"use server";

import { z } from "zod";
import { Resend } from "resend";
import { ContactFormEmail } from "@/emails/contact-form";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      type: "error" as const,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "yousiii255@gmail.com",
      subject: `New contact form submission: ${subject}`,
      react: ContactFormEmail({
        name,
        email,
        subject,
        message,
      }),
    });

    return {
      type: "success" as const,
      message: "Thank you! Your message has been sent successfully.",
    };
  } catch (e) {
    console.error(e);
    return {
      type: "error" as const,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
