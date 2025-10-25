'use server';

import { z } from 'zod';
import { headers } from 'next/headers';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters.'),
});

export type FormState = {
  message: string;
  status: 'success' | 'error';
} | null;

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // A simple spam check
  const headersList = headers();
  const referer = headersList.get('referer');
  if(!referer || !referer.startsWith(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:9002')) {
      return {
          message: 'Invalid request.',
          status: 'error',
      }
  }

  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    // Getting the first error message
    const firstError = Object.values(validatedFields.error.flatten().fieldErrors)[0]?.[0];
    return {
      message: firstError || 'There was an error with your submission. Please check the fields and try again.',
      status: 'error',
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    // This is where you would integrate an email sending service
    // like Nodemailer, Resend, SendGrid, etc.
    // For this example, we'll just log the data to the console.
    console.log('--- New Contact Form Submission ---');
    console.log('Timestamp:', new Date().toISOString());
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('-----------------------------------');

    return {
      message: 'Thank you for your message! I will get back to you soon.',
      status: 'success',
    };
  } catch (e) {
    console.error('Form submission error:', e);
    return {
      message: 'An unexpected error occurred on the server. Please try again later.',
      status: 'error',
    };
  }
}
