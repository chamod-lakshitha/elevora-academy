import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://elevoraacademy.com'),
  title: {
    default: 'Elevora Academy | Online Courses in Languages, Coding & More',
    template: '%s | Elevora Academy',
  },
  description: 'Explore flexible online courses in French, English, German, Java, Python and academic skills. Learn at your pace and build confidence with Elevora Academy.',
  applicationName: 'Elevora Academy',
  keywords: ['Elevora Academy', 'online learning', 'online language courses', 'learn French online', 'English communication', 'German for beginners', 'Java programming', 'Python courses', 'online education'],
  openGraph: {
    type: 'website',
    siteName: 'Elevora Academy',
    title: 'Elevora Academy | Learn Boldly. Become Limitless.',
    description: 'Discover online classes in languages, technology and academic skills. Take the next step in your learning journey.',
    url: 'https://elevoraacademy.com',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elevora Academy | Learn Boldly. Become Limitless.',
    description: 'Online classes in languages, technology and academic skills to help you grow with confidence.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#20145f',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={inter.variable}><Navbar />{children}<Footer /></body></html>;
}
