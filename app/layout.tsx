import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { SITE_URL } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const siteMetadataBase = SITE_URL ? new URL(SITE_URL) : undefined;

export const metadata: Metadata = {
  ...(siteMetadataBase ? { metadataBase: siteMetadataBase } : {}),
  title: { default: 'Elevora Academy | Learn. Grow. Achieve.', template: '%s | Elelora Academy' },
  description: 'Explore engaging online language, technology and academic classes at Elelora Academy. Learn at your pace, build practical skills and take your next step with confidence.',
  applicationName: 'Elelora Academy',
  keywords: ['Elelora Academy','online learning','online classes','language courses','French classes','English classes','German classes','coding classes','Java courses','Python courses'],
  authors: [{ name: 'Elelora Academy' }],
  openGraph: { title: 'Elelora Academy | Learn. Grow. Achieve.', description: 'Discover new skills, grow your confidence and find a class for your next chapter.', siteName: 'Elelora Academy', locale: 'en_US', type: 'website', images: [{ url: '/logo.png', alt: 'Elelora Academy logo' }] },
  twitter: { card: 'summary_large_image', title: 'Elelora Academy | Learn. Grow. Achieve.', description: 'Discover new skills, grow your confidence and find a class for your next chapter.', images: ['/logo.png'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  icons: { icon: '/logo.png', shortcut: '/logo.png' },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Elelora Academy',
  description: 'An online learning academy offering French, English, German, Java and Python classes for practical skills and lifelong learning.',
  ...(SITE_URL ? { url: SITE_URL, logo: SITE_URL + '/logo.png' } : {}),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={inter.variable + ' font-sans antialiased'}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    <Navbar />{children}<Footer /><WhatsAppButton />
  </body></html>;
}