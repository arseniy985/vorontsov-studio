import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';

const defaultTitle = 'Vorontsov Labs | Разработка сайтов, AI и SEO для роста бизнеса';
const defaultDescription =
  'Vorontsov Labs проектирует и запускает сайты, AI-автоматизацию, мобильные продукты и SEO-системы, которые помогают бизнесу получать больше заявок и быстрее расти.';
const defaultOgImage = '/opengraph-image';

export const siteUrl = 'https://vorontsovlabs.ru';

export const indexedRoutes = [
  '/',
  '/about',
  '/cases',
  '/contacts',
  '/privacy',
  '/services',
  '/services/ai-integration',
  '/services/mobile-apps',
  '/services/project-rescue',
  '/services/seo',
  '/services/turnkey',
  '/services/web-development',
] as const;

type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  type?: 'website' | 'article';
  noIndex?: boolean;
};

function buildTitle(title?: string) {
  return title ? `${title} | ${siteConfig.brandName}` : defaultTitle;
}

export function getCanonicalUrl(path = '/') {
  return new URL(path, siteUrl).toString();
}

export function createMetadata({
  title,
  description = defaultDescription,
  path = '/',
  keywords = [],
  type = 'website',
  noIndex = false,
}: MetadataInput = {}): Metadata {
  const fullTitle = buildTitle(title);

  return {
    metadataBase: new URL(siteUrl),
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: siteConfig.brandName,
      locale: 'ru_RU',
      type,
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.brandName} - сайты, AI и SEO`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [defaultOgImage],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    category: 'technology',
  };
}

export const defaultMetadata = createMetadata({
  description: siteConfig.description,
  path: '/',
  keywords: [
    'разработка сайтов',
    'создание сайтов',
    'seo продвижение',
    'ai автоматизация',
    'веб студия',
    'мобильные приложения',
    'разработка под ключ',
  ],
});
