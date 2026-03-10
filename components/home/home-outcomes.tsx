'use client';

import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/shared/reveal';

const outcomes = [
  {
    index: '01',
    title: 'Сайт становится каналом продаж',
    description: 'Не набором экранов, а маршрутом к заявке, звонку или покупке. Каждая секция работает на доверие и следующий шаг клиента.',
    accent: 'Воронка, а не витрина',
  },
  {
    index: '02',
    title: 'Команда тратит меньше времени на рутину',
    description: 'Формы, интеграции, AI-ассистенты и внутренние интерфейсы снимают повторяющиеся действия и освобождают ресурс на рост.',
    accent: 'Автоматизация без лишнего шума',
  },
  {
    index: '03',
    title: 'Гипотезы быстрее доходят до рынка',
    description: 'Когда запуск не растянут на месяцы, бизнес быстрее понимает, что реально приносит деньги и куда вкладываться дальше.',
    accent: 'Скорость как рычаг',
  },
];

export function HomeOutcomes() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid gap-8 border-b border-ink/10 pb-10 md:grid-cols-[minmax(0,1.1fr)_minmax(260px,340px)] md:items-end">
          <h2 className="max-w-4xl text-[2.5rem] font-display font-bold uppercase leading-[0.9] tracking-[-0.05em] md:text-[4.75rem]">
            Что меняется,
            <br />
            когда digital <span className="text-accent">работает на бизнес</span>
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-ink/62 md:justify-self-end md:text-lg">
            Выстраиваем продукт так, чтобы каждая вложенная неделя превращалась в движение по воронке, а не в бесконечную доработку ради доработки.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {outcomes.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} y={36}>
              <article className="group flex h-full flex-col rounded-[12px] border border-ink/10 bg-white p-7 shadow-[0_24px_60px_rgba(13,13,13,0.05)] transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">{item.index}</span>
                  <ArrowUpRight className="text-ink/20 transition-colors group-hover:text-accent" />
                </div>

                <h3 className="mt-10 text-2xl font-display font-bold uppercase leading-tight tracking-[-0.04em]">
                  {item.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-ink/68">{item.description}</p>

                <div className="mt-auto pt-8">
                  <span className="inline-flex rounded-full bg-accent/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    {item.accent}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
