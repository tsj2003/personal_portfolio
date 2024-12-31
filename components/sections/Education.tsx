"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function Education() {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold">Vellore Institute of Technology, Bhopal</h3>
          <p className="text-muted-foreground">Bachelor of Technology in Computer Science and Technology</p>
          <p>Aug 2022 – Jun 2026</p>
          <p>GPA: 8.27/10.0</p>
          <div className="mt-2">
            <p className="font-semibold">Relevant Coursework:</p>
            <p>Data Structures, Algorithms, Operating Systems, Computer Networks, Database Management Systems</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}