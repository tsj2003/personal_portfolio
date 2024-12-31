import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { TabContainer } from '@/components/sections/tabs/TabContainer';

const Hero = dynamic(() => import('@/components/Hero'), { 
  ssr: false,
  loading: () => <div className="animate-pulse h-96 bg-muted" />
});

const Education = dynamic(() => import('@/components/sections/Education'), {
  ssr: false,
  loading: () => <div className="animate-pulse h-64 bg-muted" />
});

const Experience = dynamic(() => import('@/components/sections/Experience'), {
  ssr: false,
  loading: () => <div className="animate-pulse h-64 bg-muted" />
});

const Projects = dynamic(() => import('@/components/sections/Projects'), {
  ssr: false,
  loading: () => <div className="animate-pulse h-64 bg-muted" />
});

const Skills = dynamic(() => import('@/components/sections/Skills'), {
  ssr: false,
  loading: () => <div className="animate-pulse h-64 bg-muted" />
});

export default function Home() {
  const tabItems = [
    {
      value: "education",
      label: "Education",
      content: (
        <Suspense fallback={<div className="animate-pulse h-64 bg-muted" />}>
          <Education />
        </Suspense>
      )
    },
    {
      value: "experience",
      label: "Experience",
      content: (
        <Suspense fallback={<div className="animate-pulse h-64 bg-muted" />}>
          <Experience />
        </Suspense>
      )
    },
    {
      value: "projects",
      label: "Projects",
      content: (
        <Suspense fallback={<div className="animate-pulse h-64 bg-muted" />}>
          <Projects />
        </Suspense>
      )
    },
    {
      value: "skills",
      label: "Skills",
      content: (
        <Suspense fallback={<div className="animate-pulse h-64 bg-muted" />}>
          <Skills />
        </Suspense>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Suspense fallback={<div className="animate-pulse h-96 bg-muted" />}>
        <Hero />
      </Suspense>

      <section className="container mx-auto px-4 pb-16">
        <TabContainer items={tabItems} defaultValue="education" />
      </section>
    </main>
  );
}