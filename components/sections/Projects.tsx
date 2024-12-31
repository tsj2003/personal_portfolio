"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TECH_STACK = [
  "Electron",
  "React",
  "Node.js",
  "Next.js",
  "AWS",
  "OpenAI",
  "TypeScript"
];

export default function Projects() {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold">SaaS AI-Enhanced Video Management System</h3>
          <p className="text-muted-foreground">July 2023</p>
          <div className="flex flex-wrap gap-2 my-2">
            {TECH_STACK.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
          <p>Developed a video management system that uses AI-driven transcript analysis to enable efficient content retrieval for users. The system leverages AWS S3 for secure video storage and CloudFront for seamless streaming.</p>
        </div>
      </CardContent>
    </Card>
  );
}