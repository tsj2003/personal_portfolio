"use client";

import { FC, ReactNode } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabItem {
  value: string;
  label: string;
  content: ReactNode;
}

interface TabContainerProps {
  items: TabItem[];
  defaultValue: string;
}

export const TabContainer: FC<TabContainerProps> = ({ items, defaultValue }) => {
  return (
    <Tabs defaultValue={defaultValue} className="space-y-8">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 lg:w-[600px] mx-auto">
        {items.map((item) => (
          <TabsTrigger key={item.value} value={item.value}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {items.map((item) => (
        <TabsContent key={item.value} value={item.value}>
          {item.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}