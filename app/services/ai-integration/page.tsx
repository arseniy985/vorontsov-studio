import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/json-ld';
import { ServiceLayout } from '@/components/service-layout';
import { createMetadata } from '@/lib/seo';
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildServiceJsonLd } from '@/lib/structured-data';

const title = 'Интеграция AI';
const path = '/services/ai-integration';
const description =
  'Внедряем AI-агентов, чат-ботов и автоматизацию в рабочие процессы, поддержку, продажи и внутренние операции бизнеса.';

export const metadata: Metadata = createMetadata({
  title,
  description,
  path,
  keywords: ['интеграция ai', 'чат-бот для бизнеса', 'ai автоматизация', 'внедрение искусственного интеллекта'],
});

export default function AiIntegrationPage() {
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
            serviceType: 'AI Integration',
            offers: ['AI-агенты', 'Чат-боты', 'Автоматизация поддержки', 'AI для внутренних процессов'],
          }),
          buildFaqJsonLd([
            {
              question: 'Куда можно внедрить AI в бизнесе?',
              answer:
                'AI можно встроить в продажи, поддержку, обработку лидов, внутренние кабинеты, аналитику и повторяющиеся операционные сценарии.',
            },
            {
              question: 'Вы работаете только с чат-ботами?',
              answer:
                'Нет, помимо чат-ботов мы проектируем AI-агентов, которые умеют вызывать инструменты, работать с данными и становиться частью бизнес-логики продукта.',
            },
          ]),
        ]}
      />
      <ServiceLayout
        title="ИНТЕГРАЦИЯ AI"
        subtitle="Чат-боты и ИИ-агенты"
        description="Внедряем искусственный интеллект в любую логику вашего продукта. Создаем ИИ-агентов, способных вызывать инструменты, анализировать данные и общаться с клиентами."
        benefits={[
          { title: 'Снижение затрат', desc: 'Автоматизация поддержки и рутинных задач позволяет экономить на операционных расходах.' },
          { title: 'Круглосуточная работа', desc: 'ИИ-агенты работают 24/7 без выходных, мгновенно отвечая на запросы клиентов.' },
          { title: 'Персонализация', desc: 'Нейросети анализируют поведение пользователей и предлагают индивидуальные решения.' },
        ]}
        process={[
          { title: 'Аудит процессов', desc: 'Находим узкие места в вашем бизнесе, которые можно автоматизировать с помощью AI.' },
          { title: 'Выбор модели', desc: 'Подбираем оптимальную нейросеть (Gemini, GPT и др.) под ваши задачи и бюджет.' },
          { title: 'Интеграция и обучение', desc: 'Встраиваем AI в ваш продукт, настраиваем промпты и обучаем на ваших данных.' },
          { title: 'Тестирование логики', desc: 'Проверяем корректность работы ИИ-агентов и их способность вызывать нужные инструменты.' },
        ]}
      />
    </>
  );
}
