import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Proxi.tech - AI Business Content Assistant',
  description: 'Turn your business idea into high-converting content for TikTok, Instagram, and LinkedIn in seconds.',
  keywords: ['AI content generation', 'social media content', 'TikTok content', 'Instagram content', 'LinkedIn content', 'business content assistant'],
  authors: [{ name: 'Proxi.tech' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: 'Proxi.tech - AI Business Content Assistant',
    description: 'Turn your business idea into high-converting content for TikTok, Instagram, and LinkedIn in seconds.',
    url: 'https://proxi.tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proxi.tech - AI Business Content Assistant',
    description: 'Turn your business idea into high-converting content for TikTok, Instagram, and LinkedIn in seconds.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}