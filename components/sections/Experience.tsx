"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function Experience() {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold">Contributor - AI-Based Road Inspection Model</h3>
          <p className="text-lg">Omdena</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Contributed to computer vision enhancements by processing over 50,000 images with Roboflow, leading to a 15% improvement in model accuracy.</li>
            <li>Collaborated with a diverse, global team of 40 members, helping accelerate project delivery by 25%</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}