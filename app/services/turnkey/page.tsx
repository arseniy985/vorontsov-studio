import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/json-ld';
import { ServiceLayout } from '@/components/service-layout';
import { createMetadata } from '@/lib/seo';
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildServiceJsonLd } from '@/lib/structured-data';

const title = 'Разработка под ключ';
const path = '/services/turnkey';
const description =
  'Берем на себя проект целиком: аналитика, дизайн, разработка, тестирование, запуск и развитие цифрового продукта под цели бизнеса.';

export const metadata: Metadata = createMetadata({
  title,
  description,
  path,
  keywords: ['разработка под ключ', 'запуск продукта', 'создание digital продукта', 'mvp под ключ'],
});

export default function TurnkeyPage() {
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
            serviceType: 'Turnkey Product Development',
            offers: ['Аналитика', 'Дизайн', 'Разработка', 'Техническая поддержка'],
          }),
          buildFaqJsonLd([
            {
              question: 'Что значит разработка под ключ?',
              answer:
                'Это формат, в котором одна команда берет на себя полный цикл работ: от стратегии и проектирования до кода, запуска и последующего развития продукта.',
            },
            {
              question: 'Можно ли стартовать быстро и без перегруза?',
              answer:
                'Да, мы можем собрать быстрый первый запуск или MVP, а затем поэтапно усиливать продукт без лишней бюрократии.',
            },
          ]),
        ]}
      />
      <ServiceLayout
        title="РАЗРАБОТКА ПОД КЛЮЧ"
        subtitle="От идеи до работающего продукта"
        description="Берем на себя весь процесс создания цифрового продукта. От аналитики и дизайна до программирования, тестирования и технической поддержки. Скоростная разработка от 24 часов."
        benefits={[
          { title: 'Экономия времени', desc: 'Вам не нужно искать разных подрядчиков и координировать их работу.' },
          { title: 'Гарантия результата', desc: 'Отвечаем за качество продукта на каждом этапе его жизненного цикла.' },
          { title: 'Быстрый запуск', desc: 'Скоростная разработка от 24 часов для проверки гипотез и быстрого старта.' },
        ]}
        process={[
          { title: 'Брифинг и оценка', desc: 'Обсуждаем вашу идею, формируем техническое задание и оцениваем сроки.' },
          { title: 'Проектирование', desc: 'Создаем прототипы, дизайн-макеты и архитектуру будущего продукта.' },
          { title: 'Разработка', desc: 'Пишем код, настраиваем серверную инфраструктуру и интеграции.' },
          { title: 'Запуск и поддержка', desc: 'Деплоим проект, обучаем вашу команду и обеспечиваем техническую поддержку.' },
        ]}
      />
    </>
  );
}
