import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/json-ld';
import { HomeContactCta } from '@/components/home/home-contact-cta';
import { HomeHero } from '@/components/home/home-hero';
import { HomeOutcomes } from '@/components/home/home-outcomes';
import { HomeProcessStory } from '@/components/home/home-process-story';
import { HomeResultsStrip } from '@/components/home/home-results-strip';
import { HomeServices } from '@/components/home/home-services';
import { createMetadata } from '@/lib/seo';
import { buildBreadcrumbJsonLd, buildProfessionalServiceJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = createMetadata({
  title: 'Разработка сайтов, AI и SEO для роста бизнеса',
  description:
    'Vorontsov Labs запускает сайты, AI-автоматизацию, SEO и цифровые продукты под задачи бизнеса: быстрее старт, выше конверсия, меньше ручной рутины.',
  path: '/',
  keywords: [
    'разработка сайтов под ключ',
    'ai автоматизация бизнеса',
    'seo для бизнеса',
    'web studio',
    'цифровые продукты',
  ],
});

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([{ name: 'Главная', path: '/' }]),
          buildProfessionalServiceJsonLd(
            '/',
            'Студия разработки сайтов, AI-автоматизации и SEO с фокусом на запуск, рост заявок и оптимизацию процессов бизнеса.',
          ),
        ]}
      />
      <HomeHero />
      <HomeResultsStrip />
      <HomeOutcomes />
      <HomeProcessStory />
      <HomeServices />
      <HomeContactCta />
    </div>
  );
}
