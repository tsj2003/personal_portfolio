"use client";

import { FC } from 'react';
import { Button } from "@/components/ui/button";
import type { ContactInfo } from "@/types/contact";

interface ContactLinksProps {
  contacts: ContactInfo[];
}

export const ContactLinks: FC<ContactLinksProps> = ({ contacts }) => {
  return (
    <div className="flex gap-4">
      {contacts.map((contact) => (
        <Button key={contact.label} variant="outline" size="icon" asChild>
          <a href={contact.href} target="_blank" rel="noopener noreferrer" aria-label={contact.label}>
            <contact.icon className="h-5 w-5" />
          </a>
        </Button>
      ))}
    </div>
  );
}