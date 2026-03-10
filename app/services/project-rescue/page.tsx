import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/json-ld';
import { ServiceLayout } from '@/components/service-layout';
import { createMetadata } from '@/lib/seo';
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildServiceJsonLd } from '@/lib/structured-data';

const title = 'Спасение проектов';
const path = '/services/project-rescue';
const description =
  'Подхватываем и доводим до результата проблемные проекты: аудит кода, исправление ошибок, рефакторинг и внедрение недостающего функционала.';

export const metadata: Metadata = createMetadata({
  title,
  description,
  path,
  keywords: ['доработка сайта', 'спасение проекта', 'аудит кода', 'рефакторинг веб проекта'],
});

export default function ProjectRescuePage() {
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
            serviceType: 'Project Rescue and Refactoring',
            offers: ['Аудит кода', 'Срочные доработки', 'Рефакторинг', 'Передача и стабилизация проекта'],
          }),
          buildFaqJsonLd([
            {
              question: 'Берете ли вы проекты после другого подрядчика?',
              answer:
                'Да, мы подключаемся к существующим сайтам и продуктам, разбираемся в текущем состоянии кода и формируем реалистичный план доработок.',
            },
            {
              question: 'Что делать, если проект нестабилен и горят сроки?',
              answer:
                'В таких случаях мы начинаем с аудита критичных узлов, стабилизации и поэтапного закрытия самых рискованных проблем, чтобы быстро вернуть проект в рабочее состояние.',
            },
          ]),
        ]}
      />
      <ServiceLayout
        title="СПАСЕНИЕ ПРОЕКТОВ"
        subtitle="Доработка и завершение"
        description="Берем на доработку, правки и завершение существующие проекты. Помогаем, если пропал разработчик, код написан некачественно или просто потребовались срочные доработки."
        benefits={[
          { title: 'Сохранение инвестиций', desc: 'Не нужно переписывать проект с нуля, мы спасем то, что уже сделано.' },
          { title: 'Быстрое включение', desc: 'Оперативно разбираемся в чужом коде и приступаем к работе.' },
          { title: 'Стабильность', desc: 'Исправляем критические ошибки и обеспечиваем бесперебойную работу продукта.' },
        ]}
        process={[
          { title: 'Аудит кода', desc: 'Изучаем текущее состояние проекта, находим ошибки и узкие места.' },
          { title: 'Оценка задач', desc: 'Составляем план работ, оцениваем сроки и стоимость доработок.' },
          { title: 'Рефакторинг', desc: 'Оптимизируем код, улучшаем архитектуру и закрываем уязвимости.' },
          { title: 'Внедрение фич', desc: 'Разрабатываем новый функционал и интегрируем его в существующий проект.' },
        ]}
      />
    </>
  );
}
