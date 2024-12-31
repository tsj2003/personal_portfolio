import { supabase } from './server';
import type { ContactFormData } from '@/types/contact';
import type { Database } from '@/types/supabase';

export async function insertContactMessage(data: ContactFormData) {
  const { error, data: result } = await supabase
    .from('contact_messages')
    .insert([{
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      message: data.message.trim()
    }])
    .select()
    .single();

  if (error) {
    console.error('Database error:', error.message);
    throw new Error('Failed to save message');
  }

  return result as Database['public']['Tables']['contact_messages']['Row'];
}