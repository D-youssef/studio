"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

async function sendToTelegram(message: string) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    throw new Error("Telegram bot token or chat ID is not configured.");
  }

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: "HTML",
    }),
  });

  if (!response.ok) {
    const errorBody = await response.json();
    console.error("Failed to send message to Telegram:", errorBody);
    throw new Error("Failed to send message to Telegram.");
  }

  return response.json();
}

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
  
  const telegramMessage = `
<b>New Contact Form Submission</b>
-----------------------------------
<b>Name:</b> ${name}
<b>Email:</b> ${email}
<b>Subject:</b> ${subject}
<b>Message:</b>
${message}
-----------------------------------
  `;

  try {
    await sendToTelegram(telegramMessage);

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
