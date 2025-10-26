"use server";

import { z } from "zod";

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
    // Here you would implement the logic to send the data to your PHP script/Telegram.
    // For demonstration, we'll just log it to the console.
    console.log("--- New Contact Form Submission ---");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
    console.log("------------------------------------");

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // On a real project, you might check the response from your backend here.
    // const response = await fetch('your-php-script-url', { ... });

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
