import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Wahyu Sattriana - Software Engineer',
  description:
    'Software Engineer Based in Bali, Indonesia. Fullstack JavaScript Developer specializing in Node.js, React, Next.js, and modern web technologies. View my portfolio, projects, and experience.',
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
      'Software Engineer Based in Bali, Indonesia. Fullstack JavaScript Developer specializing in Node.js, React, Next.js, and modern web technologies.',
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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
