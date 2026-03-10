import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/json-ld';
import { CasesShowcasePage } from '@/components/cases/cases-showcase-page';
import { createMetadata } from '@/lib/seo';
import { buildBreadcrumbJsonLd, buildCasesItemListJsonLd, buildCollectionPageJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = createMetadata({
  title: 'Кейсы',
  description: 'Подборка кейсов Vorontsov Labs: сайты, платформы, AI-инструменты и продуктовые решения для бизнеса.',
  path: '/cases',
  keywords: ['кейсы разработки сайтов', 'кейсы веб студии', 'ai кейсы', 'портфолио digital студии'],
});

export default function CasesPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Главная', path: '/' },
            { name: 'Кейсы', path: '/cases' },
          ]),
          buildCollectionPageJsonLd(
            'Кейсы Vorontsov Labs',
            '/cases',
            'Портфолио реализованных проектов Vorontsov Labs: сайты, платформы, каталоги и AI-сценарии.',
          ),
          buildCasesItemListJsonLd(),
        ]}
      />
      <CasesShowcasePage />
    </>
  );
}
