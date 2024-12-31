"use client";

import Image from "next/image";
import { FC } from 'react';

interface ProfileImageProps {
  src: string;
  alt: string;
}

export const ProfileImage: FC<ProfileImageProps> = ({ src, alt }) => {
  return (
    <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}