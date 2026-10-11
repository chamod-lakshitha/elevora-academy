import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
export const metadata: Metadata = {
  title: { default: 'Elelora Academy | Learn Without Limits', template: '%s | Elelora Academy' },
  description: 'Discover flexible, inspiring online learning with Elelora Academy.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={inter.variable}><Navbar />{children}<Footer /></body></html>;
}
