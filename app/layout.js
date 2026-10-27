if (typeof window === 'undefined' && typeof localStorage !== 'undefined') {
  try {
    delete global.localStorage;
  } catch (e) {
    console.warn('Failed to clean up localStorage on server', e);
  }
}

import { Archivo } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { profile } from '@/data/profile';

// Variable width axis powers the expanded display type
const archivo = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-archivo' });

// Canonical URLs and the share image resolve against the site's main domain.
// Each page sets its own canonical; setting it here would point /cv at the home page.
export const metadata = {
  metadataBase: new URL(profile.website),
  title: 'Wahyu Sattriana - Software Engineer',
  description:
    'Software Engineer based in Bali, Indonesia. Building websites, internal tools, and AI-integrated apps. View my portfolio, projects, and experience.',
  keywords: [
    'Wahyu Sattriana',
    'Software Engineer',
    'Fullstack Developer',
    'React',
    'Next.js',
    'JavaScript',
    'Bali',
    'Indonesia'
  ],
  authors: [{ name: 'Wahyu Sattriana' }],
  creator: 'Wahyu Sattriana',
  openGraph: {
    title: 'Wahyu Sattriana - Software Engineer',
    description:
      'Software Engineer based in Bali, Indonesia. Building websites, internal tools, and AI-integrated apps.',
    url: '/',
    siteName: 'Wahyu Sattriana Portfolio',
    locale: 'en_US',
    type: 'website'
  },
  twitter: { card: 'summary_large_image' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${archivo.variable} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
