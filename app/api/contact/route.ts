import { supabase } from '@/lib/supabase/server';
import { contactFormSchema } from '@/lib/validation/contact';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body against schema
    const result = contactFormSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('contact_messages')
      .insert([{
        name: result.data.name.trim(),
        email: result.data.email.trim().toLowerCase(),
        message: result.data.message.trim()
      }])
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to save message' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      message: 'Message sent successfully',
      data 
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}