import type { Metadata } from 'next';
import { AboutPage } from '@/components/pages/about-page';
import { JsonLd } from '@/components/seo/json-ld';
import { createMetadata } from '@/lib/seo';
import { buildBreadcrumbJsonLd, buildCollectionPageJsonLd, buildProfessionalServiceJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = createMetadata({
  title: 'О студии',
  description:
    'О студии Vorontsov Labs: разработка сайтов, AI-автоматизация, продуктовый подход, быстрые MVP и долгосрочное развитие цифровых проектов.',
  path: '/about',
  keywords: ['о веб-студии', 'команда разработки', 'ai студия', 'разработка digital продуктов'],
});

export default function AboutRoute() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Главная', path: '/' },
            { name: 'О студии', path: '/about' },
          ]),
          buildCollectionPageJsonLd(
            'О студии Vorontsov Labs',
            '/about',
            'Информация о подходе, экспертизе и формате работы студии Vorontsov Labs.',
          ),
          buildProfessionalServiceJsonLd(
            '/about',
            'Студия разработки сайтов, SEO и AI-решений с акцентом на понятные процессы, скорость запуска и измеримый бизнес-эффект.',
          ),
        ]}
      />
      <AboutPage />
    </>
  );
}
