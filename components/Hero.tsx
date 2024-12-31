"use client";

import { PROFILE_INFO } from "@/config/profile";
import { ProfileImage } from "./hero/ProfileImage";
import { ContactLinks } from "./hero/ContactLinks";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            {PROFILE_INFO.name}
          </h1>
          <p className="text-xl text-muted-foreground">
            {PROFILE_INFO.title}
          </p>
          <ContactLinks contacts={PROFILE_INFO.contacts} />
        </div>
        <ProfileImage src={PROFILE_INFO.image} alt="Profile" />
      </div>
    </section>
  );
}