import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Политика конфиденциальности',
  description: 'Политика конфиденциальности сайта Vorontsov Labs и условия обработки данных при обращении через сайт.',
  path: '/privacy',
  keywords: ['политика конфиденциальности', 'обработка персональных данных'],
});

const policySections = [
  {
    title: '1. Какие данные мы можем получать',
    content:
      'Через сайт и прямые обращения мы можем получать имя, номер телефона, email, описание задачи, а также технические данные о посещении сайта, если они передаются стандартными средствами аналитики и браузера.',
  },
  {
    title: '2. Для чего используются данные',
    content:
      'Мы используем данные, чтобы ответить на обращение, обсудить проект, подготовить предложение, поддерживать коммуникацию по текущим задачам и улучшать работу сайта.',
  },
  {
    title: '3. Как данные хранятся и защищаются',
    content:
      'Мы ограничиваем доступ к информации только теми лицами, которым она нужна для обработки обращения и ведения проекта. Технические и организационные меры защиты уточняются в зависимости от используемых сервисов и инфраструктуры.',
  },
  {
    title: '4. Передача третьим лицам',
    content:
      'Мы не передаем персональные данные третьим лицам без законного основания, за исключением случаев, когда это необходимо для работы подключенных сервисов, исполнения договора или выполнения требований законодательства.',
  },
  {
    title: '5. Права пользователя',
    content:
      'Вы можете запросить уточнение, обновление или удаление своих данных, а также задать вопрос о порядке их обработки, написав нам на контактный email.',
  },
];

export default function PrivacyPage() {
  return (
    <div className="px-6 py-32 md:py-40">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Документ</p>
        <h1 className="mt-5 text-[2.8rem] font-display font-bold uppercase leading-[0.9] tracking-[-0.05em] md:text-[4.8rem]">
          Политика конфиденциальности
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/70">
          Актуально на 10 марта 2026 года. Если вам нужна юридически полная версия с реквизитами оператора,
          добавьте данные ИП или ООО перед публикацией финальной редакции.
        </p>

        <div className="mt-12 rounded-[12px] border border-ink/10 bg-[#f7f5f2] p-6 text-base leading-relaxed text-ink/72">
          <p>
            Используя сайт Vorontsov Labs, вы соглашаетесь с тем, что информация, которую вы отправляете через
            контактные каналы, может использоваться для обработки вашего запроса и дальнейшей коммуникации по
            проекту.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {policySections.map((section) => (
            <section key={section.title} className="border-b border-ink/10 pb-8 last:border-b-0">
              <h2 className="text-2xl font-display font-bold uppercase tracking-[-0.04em]">{section.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-ink/72 md:text-lg">{section.content}</p>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-[12px] border border-ink/10 bg-ink p-6 text-bg md:p-8">
          <h2 className="text-2xl font-display font-bold uppercase tracking-[-0.04em]">Контакты по вопросам данных</h2>
          <p className="mt-4 text-base leading-relaxed text-bg/70 md:text-lg">
            По вопросам обработки персональных данных пишите на{' '}
            <a className="text-bg underline decoration-accent/60 underline-offset-4" href={siteConfig.contacts.emailHref}>
              {siteConfig.contacts.email}
            </a>{' '}
            или звоните по номеру{' '}
            <a className="text-bg underline decoration-accent/60 underline-offset-4" href={siteConfig.contacts.phoneHref}>
              {siteConfig.contacts.phoneDisplay}
            </a>
            .
          </p>
        </section>

        <Link
          href="/"
          className="mt-12 inline-flex rounded-full border border-ink/12 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
