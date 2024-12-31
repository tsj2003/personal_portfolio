import { Github, Linkedin, Mail, Phone } from "lucide-react";
import type { ProfileInfo } from "@/types/contact";

export const PROFILE_INFO: ProfileInfo = {
  name: "Tarandeep Singh Juneja",
  title: "Computer Science Student & Full Stack Developer",
  image: "https://i.imgur.com/HtL0kve.jpg",
  contacts: [
    {
      icon: Mail,
      href: "mailto:tarandeepjuneja11@gmail.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:+919098520440",
      label: "Phone"
    },
    {
      icon: Github,
      href: "https://github.com/tsj2003",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/tarandeep-singh-juneja-55542424b",
      label: "LinkedIn"
    }
  ]
};