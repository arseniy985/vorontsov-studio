import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { defaultMetadata } from '@/lib/seo';
import { buildOrganizationJsonLd, buildWebsiteJsonLd } from '@/lib/structured-data';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ru" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <JsonLd data={[buildOrganizationJsonLd(), buildWebsiteJsonLd()]} />
      </head>
      <body className="antialiased min-h-screen flex flex-col relative bg-bg text-ink" suppressHydrationWarning>
        <div className="fixed inset-0 pointer-events-none bg-grid-pattern z-[-1]" />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
