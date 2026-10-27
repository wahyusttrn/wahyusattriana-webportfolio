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

// Variable width axis powers the expanded display type
const archivo = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-archivo' });

export const metadata = {
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
    url: 'https://wahyusattriana.com',
    siteName: 'Wahyu Sattriana Portfolio',
    locale: 'en_US',
    type: 'website'
  },
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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
