import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/json-ld';
import { ServiceLayout } from '@/components/service-layout';
import { createMetadata } from '@/lib/seo';
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildServiceJsonLd } from '@/lib/structured-data';

const title = 'SEO и продвижение';
const path = '/services/seo';
const description =
  'Выстраиваем SEO как систему: техническая оптимизация, семантика, структура, контент и аналитика для устойчивого роста органического трафика.';

export const metadata: Metadata = createMetadata({
  title,
  description,
  path,
  keywords: ['seo продвижение', 'техническое seo', 'поисковая оптимизация сайта', 'рост органического трафика'],
});

export default function SeoPage() {
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
            serviceType: 'Search Engine Optimization',
            offers: ['Технический аудит', 'Сбор семантики', 'Оптимизация контента', 'SEO-аналитика'],
          }),
          buildFaqJsonLd([
            {
              question: 'Что входит в SEO-продвижение сайта?',
              answer:
                'Обычно это технический аудит, исправление ошибок индексации, сбор семантики, доработка структуры, оптимизация контента и регулярная аналитика роста.',
            },
            {
              question: 'SEO можно делать для нового сайта?',
              answer:
                'Да, и это часто эффективнее: правильная структура, metadata и техническая база на старте помогают быстрее и чище попасть в индекс.',
            },
          ]),
        ]}
      />
      <ServiceLayout
        title="SEO И ПРОДВИЖЕНИЕ"
        subtitle="Органический рост трафика"
        description="Выстраиваем SEO как систему: технический аудит, семантика, структура контента, внутренняя и внешняя оптимизация. Выводим сайты в топ поисковых систем."
        benefits={[
          { title: 'Больше целевых клиентов', desc: 'Привлекаем горячую аудиторию, которая уже ищет ваши товары или услуги.' },
          { title: 'Снижение стоимости лида', desc: 'Органический трафик обходится дешевле контекстной рекламы в долгосрочной перспективе.' },
          { title: 'Доверие к бренду', desc: 'Сайты в топе поисковой выдачи вызывают больше доверия у потенциальных клиентов.' },
        ]}
        process={[
          { title: 'Технический аудит', desc: 'Находим и исправляем ошибки, мешающие сайту ранжироваться в поисковиках.' },
          { title: 'Сбор семантики', desc: 'Собираем ключевые запросы и формируем структуру сайта под потребности аудитории.' },
          { title: 'Оптимизация контента', desc: 'Пишем полезные тексты, прописываем мета-теги и улучшаем поведенческие факторы.' },
          { title: 'Регулярная аналитика', desc: 'Отслеживаем позиции, анализируем трафик и корректируем стратегию продвижения.' },
        ]}
      />
    </>
  );
}
