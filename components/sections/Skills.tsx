"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TECHNICAL_SKILLS = [
  "Data Structures & Algorithms",
  "JavaScript/TypeScript",
  "C++",
  "Python",
  "Next.js",
  "React",
  "Node.js",
  "Tailwind CSS",
  "AWS (S3, CloudFront)",
  "Git",
  "Docker",
];

const CERTIFICATIONS = [
  "HTML, CSS, and JavaScript for Web Developers (Coursera)",
  "Python Essentials, AI and ML Fundamentals",
  "Cloud Computing (NPTEL)",
  "Machine Learning (Kaggle)",
  "Oracle's Databases for Developers",
  "Postman API Fundamentals"
];

export default function Skills() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Technical Skills</h3>
            <div className="space-y-2">
              {TECHNICAL_SKILLS.map((skill) => (
                <Badge key={skill} className="mr-2 mb-2">{skill}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Certifications</h3>
            <ul className="list-disc list-inside space-y-1">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}