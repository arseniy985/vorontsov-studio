'use client';

import Link from 'next/link';
import { ArrowUpRight, Bot, Code, Search, Smartphone, Wrench, Zap } from 'lucide-react';
import { Reveal } from '@/components/shared/reveal';

const services = [
  {
    title: 'Разработка сайтов',
    description: 'Промо, корпоративные сайты и веб-платформы, которые ведут пользователя к действию, а не просто занимают экран.',
    href: '/services/web-development',
    accent: 'Конверсия и масштабирование',
    icon: Code,
    span: 'lg:col-span-2',
  },
  {
    title: 'AI-интеграция',
    description: 'Агенты, чат-боты и автоматизация внутренних сценариев, чтобы команда тратила меньше сил на повторяющуюся работу.',
    href: '/services/ai-integration',
    accent: 'Снижение ручной нагрузки',
    icon: Bot,
    span: 'lg:col-span-1',
  },
  {
    title: 'Мобильные продукты',
    description: 'Интерфейсы под iOS и Android, если бизнесу нужен быстрый канал в кармане клиента или команды.',
    href: '/services/mobile-apps',
    accent: 'Новый цифровой канал',
    icon: Smartphone,
    span: 'lg:col-span-1',
  },
  {
    title: 'SEO и органический рост',
    description: 'Помогаем сделать так, чтобы сайт не жил только на рекламе, а стабильно собирал целевой спрос.',
    href: '/services/seo',
    accent: 'Долгий источник заявок',
    icon: Search,
    span: 'lg:col-span-2',
  },
  {
    title: 'Разработка под ключ',
    description: 'От структуры и дизайна до разработки, интеграций и запуска, когда нужен единый ответственный контур.',
    href: '/services/turnkey',
    accent: 'Один партнер вместо цепочки подрядчиков',
    icon: Zap,
    span: 'lg:col-span-1',
  },
  {
    title: 'Спасение проектов',
    description: 'Подхватываем недоделанные продукты, если сроки горят, подрядчик пропал или кодовая база зашла в тупик.',
    href: '/services/project-rescue',
    accent: 'Возвращаем проект в рабочий ритм',
    icon: Wrench,
    span: 'lg:col-span-2',
  },
];

export function HomeServices() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 grid gap-8 border-b border-ink/10 pb-10 md:grid-cols-[minmax(0,1fr)_320px] md:items-end">
          <h2 className="text-[2.6rem] font-display font-bold uppercase leading-[0.9] tracking-[-0.05em] md:text-[4.8rem]">
            Что можем
            <br />
            <span className="text-accent">собрать для бизнеса</span>
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-ink/62 md:justify-self-end md:text-lg">
            Упаковываем задачу в понятный продукт: сайт, систему, внутренний инструмент или AI-слой для уже работающего бизнеса.
          </p>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.05} y={28} className={service.span}>
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-[12px] border border-ink/10 bg-white p-7 shadow-[0_24px_60px_rgba(13,13,13,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-accent/8 text-accent">
                      <Icon size={24} strokeWidth={1.8} />
                    </span>
                    <ArrowUpRight className="text-ink/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
                  </div>

                  <h3 className="mt-10 text-[1.9rem] font-display font-bold uppercase leading-[0.96] tracking-[-0.04em]">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-ink/68">{service.description}</p>

                  <div className="mt-auto pt-8">
                    <span className="inline-flex rounded-full border border-ink/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-ink/55 transition-colors group-hover:border-accent/25 group-hover:text-accent">
                      {service.accent}
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
