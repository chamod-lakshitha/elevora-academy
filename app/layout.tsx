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
  title: { default: 'Online Language & Programming Classes | Elevora Academy', template: '%s | Elevora Academy' },
  description: 'Explore online French, German and English classes, plus programming courses in Java and Python at Elevora Academy. Discover language learning, exam preparation and practical coding lessons.',
  applicationName: 'Elevora Academy',
  keywords: ['Elevora Academy','online learning','online classes','language courses','French classes','English classes','German classes','coding classes','Java courses','Python courses'],
  authors: [{ name: 'Elevora Academy' }],
  openGraph: { title: 'Elevora Academy | Learn. Grow. Achieve.', description: 'Discover new skills, grow your confidence and find a class for your next chapter.', siteName: 'Elevora Academy', locale: 'en_LK', type: 'website', images: [{ url: '/logo.png', alt: 'Elevora Academy logo' }] },
  twitter: { card: 'summary_large_image', title: 'Elevora Academy | Learn. Grow. Achieve.', description: 'Discover new skills, grow your confidence and find a class for your next chapter.', images: ['/logo.png'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  icons: { icon: '/logo.png', shortcut: '/logo.png' },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Elevora Academy',
  alternateName: 'Elevora',
  description: 'Elevora Academy is an online learning academy offering French, German and English language classes and programming courses in Java and Python.',
  ...(SITE_URL ? { url: SITE_URL, logo: SITE_URL + '/logo.png' } : {}),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={inter.variable + ' font-sans antialiased'}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    <Navbar />{children}<Footer /><WhatsAppButton />
  </body></html>;
}