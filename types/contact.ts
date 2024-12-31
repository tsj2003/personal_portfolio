import { LucideIcon } from 'lucide-react';

export interface ContactInfo {
  icon: LucideIcon;
  href: string;
  label: string;
}

export interface ProfileInfo {
  name: string;
  title: string;
  image: string;
  contacts: ContactInfo[];
}