'use server';

// This file is no longer used for the contact form, 
// but is kept in case other server actions are added in the future.

export type FormState = {
  message: string;
  status: 'success' | 'error';
} | null;
