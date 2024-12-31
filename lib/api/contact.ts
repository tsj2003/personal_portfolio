import type { ContactFormData } from '@/types/contact';

export interface ContactResponse {
  message: string;
  data?: any;
  error?: string;
}

export async function submitContactForm(formData: ContactFormData): Promise<ContactResponse> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to send message');
    }

    return data;
  } catch (error) {
    throw error instanceof Error 
      ? error 
      : new Error('Network error. Please check your connection.');
  }
}