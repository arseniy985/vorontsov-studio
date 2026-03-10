import type { Metadata } from 'next';
import { ServicesPage } from '@/components/pages/services-page';
import { JsonLd } from '@/components/seo/json-ld';
import { createMetadata } from '@/lib/seo';
import { buildBreadcrumbJsonLd, buildCollectionPageJsonLd, buildProfessionalServiceJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = createMetadata({
  title: 'Услуги',
  description:
    'Услуги Vorontsov Labs: разработка сайтов, мобильные приложения, AI-интеграции, SEO-продвижение, запуск под ключ и спасение проектов.',
  path: '/services',
  keywords: [
    'услуги веб студии',
    'разработка сайтов',
    'разработка мобильных приложений',
    'seo продвижение сайта',
    'ai интеграция',
  ],
});

export default function ServicesRoute() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Главная', path: '/' },
            { name: 'Услуги', path: '/services' },
          ]),
          buildCollectionPageJsonLd(
            'Услуги Vorontsov Labs',
            '/services',
            'Каталог услуг студии Vorontsov Labs: сайты, AI, SEO, мобильные продукты и доработка существующих проектов.',
          ),
          buildProfessionalServiceJsonLd(
            '/services',
            'Услуги студии по разработке сайтов, внедрению AI, SEO, мобильным приложениям и запуску цифровых продуктов под ключ.',
          ),
        ]}
      />
      <ServicesPage />
    </>
  );
}
