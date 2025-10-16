import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rojalin Shaw - Full Stack Developer | Java | Spring Boot | Angular | Node.js',
  description: 'B.Tech Computer Science student specializing in Software Technology. Passionate about building innovative software solutions with Java, Angular, Spring Boot, and modern web technologies.',
  keywords: 'Rojalin Shaw, Full Stack Developer, Java, Spring Boot, Angular, Node.js, Software Developer, Portfolio',
  authors: [{ name: 'Rojalin Shaw' }],
  creator: 'Rojalin Shaw',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-demo-link.com',
    title: 'Rojalin Shaw - Full Stack Developer',
    description: 'Passionate Full Stack Developer specializing in Java, Spring Boot, Angular, and modern web technologies.',
    siteName: 'Rojalin Shaw Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rojalin Shaw - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rojalin Shaw - Full Stack Developer',
    description: 'Passionate Full Stack Developer specializing in Java, Spring Boot, Angular, and modern web technologies.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}