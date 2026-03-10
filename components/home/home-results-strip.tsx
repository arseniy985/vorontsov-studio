'use client';

import { Reveal } from '@/components/shared/reveal';

const resultSignals = [
  {
    kicker: '24ч',
    title: 'Скоростная разработка',
    description: 'Запускаем MVP и промо-сайты в короткие сроки, чтобы гипотезы быстрее доходили до рынка и начинали приносить деньги.',
  },
  {
    kicker: 'AI',
    title: 'ИИ-автоматизация',
    description: 'Встраиваем агентов и чат-ботов в продажи, поддержку и внутренние операции, чтобы команда тратила меньше времени на повторяющиеся касания.',
  },
  {
    kicker: 'FULL',
    title: 'Под ключ',
    description: 'Берем путь от идеи и архитектуры до запуска и поддержки, чтобы проект не зависал между подрядчиками и не терял темп.',
  },
];

export function HomeResultsStrip() {
  return (
    <section className="border-y border-ink/8 bg-[#f4f1ed] px-6 py-18 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
        <Reveal className="max-w-2xl">
          <p className="text-[2.8rem] font-display font-bold uppercase leading-[0.9] tracking-[-0.05em] text-ink md:text-[4.75rem]">
            Бизнесу нужен
            <br />
            <span className="text-accent">результат</span>
          </p>
          <div className="mt-10 h-px w-full bg-ink/10" />
          <p className="mt-10 text-xl leading-relaxed text-ink/72">
            Мы не просто пишем код. Мы собираем цифровые инструменты, которые помогают бизнесу быстрее
            продавать, разгружать команду и не терять деньги на хаосе в процессах.
          </p>
        </Reveal>

        <div className="space-y-10">
          {resultSignals.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} x={20}>
              <article className="grid gap-4 border-b border-ink/10 pb-8 md:grid-cols-[120px_minmax(0,1fr)] md:items-start">
                <p className="text-[2.25rem] font-display font-bold uppercase tracking-[-0.06em] text-accent md:text-[3.2rem]">
                  {item.kicker}
                </p>
                <div>
                  <h2 className="text-2xl font-display font-bold uppercase tracking-[-0.04em] md:text-[2rem]">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/66 md:text-lg">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
