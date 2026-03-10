import type { Metadata } from 'next';
import { ContactsPage } from '@/components/pages/contacts-page';
import { JsonLd } from '@/components/seo/json-ld';
import { createMetadata } from '@/lib/seo';
import { buildBreadcrumbJsonLd, buildContactPageJsonLd, buildFaqJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = createMetadata({
  title: 'Контакты',
  description:
    'Контакты Vorontsov Labs для обсуждения сайта, AI-проекта, SEO или запуска цифрового продукта: email, телефон и быстрый первый контакт по делу.',
  path: '/contacts',
  keywords: ['контакты веб студии', 'связаться по разработке сайта', 'seo консультация', 'ai проект контакты'],
});

export default function ContactsRoute() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Главная', path: '/' },
            { name: 'Контакты', path: '/contacts' },
          ]),
          buildContactPageJsonLd(),
          buildFaqJsonLd([
            {
              question: 'Как быстрее всего обсудить проект?',
              answer:
                'Быстрее всего отправить описание задачи на email или позвонить, если нужно сразу собрать первый рабочий план и следующий шаг.',
            },
            {
              question: 'Что прислать в первом сообщении?',
              answer:
                'Достаточно коротко описать бизнес, текущую проблему, желаемый формат проекта и критичные сроки запуска.',
            },
          ]),
        ]}
      />
      <ContactsPage />
    </>
  );
}
