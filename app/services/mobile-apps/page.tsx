import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/json-ld';
import { ServiceLayout } from '@/components/service-layout';
import { createMetadata } from '@/lib/seo';
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildServiceJsonLd } from '@/lib/structured-data';

const title = 'Мобильные приложения';
const path = '/services/mobile-apps';
const description =
  'Разрабатываем iOS и Android приложения для бизнеса: клиентские сервисы, внутренние инструменты и кроссплатформенные решения с понятной логикой запуска и развития.';

export const metadata: Metadata = createMetadata({
  title,
  description,
  path,
  keywords: ['разработка мобильных приложений', 'iOS Android разработка', 'приложение для бизнеса', 'mobile app development'],
});

export default function MobileAppsPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Главная', path: '/' },
            { name: 'Услуги', path: '/services' },
            { name: title, path },
          ]),
          buildServiceJsonLd({
            name: `${title} Vorontsov Labs`,
            path,
            description,
            serviceType: 'Mobile Application Development',
            offers: ['iOS приложения', 'Android приложения', 'Кроссплатформенные сервисы', 'Приложения для сотрудников'],
          }),
          buildFaqJsonLd([
            {
              question: 'Делаете ли вы приложения сразу под iOS и Android?',
              answer:
                'Да, в зависимости от задачи мы предлагаем нативную или кроссплатформенную разработку, чтобы сбалансировать сроки, бюджет и качество UX.',
            },
            {
              question: 'Можно ли сделать мобильный кабинет для команды?',
              answer:
                'Да, мы разрабатываем не только клиентские приложения, но и внутренние инструменты для сотрудников, логистики, продаж и операционных процессов.',
            },
          ]),
        ]}
      />
      <ServiceLayout
        title="МОБИЛЬНЫЕ ПРИЛОЖЕНИЯ"
        subtitle="iOS и Android"
        description="Разрабатываем нативные и кроссплатформенные мобильные приложения для бизнеса. Создаем удобные сервисы для ваших клиентов и инструменты для оптимизации внутренних процессов."
        benefits={[
          { title: 'Удержание клиентов', desc: 'Мобильное приложение всегда под рукой у клиента, что повышает лояльность и частоту покупок.' },
          { title: 'Новый канал продаж', desc: 'Прямой доступ к аудитории через push-уведомления и персонализированные предложения.' },
          { title: 'Ускорение работы', desc: 'Внутренние приложения для сотрудников сокращают время на рутину и улучшают коммуникацию.' },
        ]}
        process={[
          { title: 'Проектирование логики', desc: 'Определяем ключевые функции приложения и пользовательские сценарии.' },
          { title: 'Мобильный дизайн', desc: 'Создаем интерфейсы с учетом гайдлайнов iOS и Android для максимального удобства.' },
          { title: 'Разработка', desc: 'Пишем код, настраиваем API для связи с сервером и интегрируем сторонние сервисы.' },
          { title: 'Публикация в сторах', desc: 'Проходим модерацию и публикуем приложение в App Store и Google Play.' },
        ]}
      />
    </>
  );
}
