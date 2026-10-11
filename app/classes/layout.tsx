import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online French, English, German & Coding Classes',
  description: 'Explore Elelora Academy online classes, compare learning paths and find practical lessons in languages, technology and academic skills.',
  alternates: { canonical: '/classes' },
  openGraph: {
    title: 'Explore Online Classes | Elelora Academy',
    description: 'Find a class that matches your goals and start building skills with Elelora Academy.',
    type: 'website',
  },
};

export default function ClassesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}