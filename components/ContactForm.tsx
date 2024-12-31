"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import { submitContactForm } from "@/lib/api"; // Fixed import path
import type { ContactFormData } from "@/types/contact";
import { contactFormSchema } from "@/lib/validation/contact";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormData) {
    if (isSubmitting) return;
    
    try {
      setIsSubmitting(true);
      const result = await submitContactForm(values);
      toast.success(result.message);
      form.reset();
    } catch (error) {
      const message = error instanceof Error 
        ? error.message 
        : "Failed to send message. Please try again.";
      toast.error(message);
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your name" 
                  {...field} 
                  disabled={isSubmitting}
                  maxLength={100}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input 
                  placeholder="your.email@example.com" 
                  type="email" 
                  {...field} 
                  disabled={isSubmitting}
                  maxLength={255}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message..."
                  className="resize-none"
                  {...field}
                  disabled={isSubmitting}
                  maxLength={1000}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Form>
  );
}