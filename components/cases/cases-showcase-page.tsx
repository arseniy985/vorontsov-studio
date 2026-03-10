'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '@/lib/case-studies';
import { CaseStudySection } from '@/components/cases/case-study-section';

export function CasesShowcasePage() {
  return (
    <div className="flex w-full flex-col">
      <section className="relative overflow-hidden px-6 pb-20 pt-28 md:pb-28 md:pt-32">
        <div className="absolute left-[7%] top-28 hidden h-32 w-px bg-accent/30 md:block" />
        <div className="absolute right-[8%] top-44 hidden h-16 w-16 border border-accent/35 md:block" />

        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <p className="text-[0.82rem] font-semibold uppercase tracking-[0.24em] text-accent md:text-sm md:tracking-[0.32em]">
              Cases / delivery / motion
            </p>
            <h1 className="mt-5 max-w-[11.5ch] text-[3.15rem] font-display font-bold uppercase leading-[0.84] tracking-[-0.05em] text-ink sm:max-w-[12ch] sm:text-[4.1rem] md:mt-6 md:max-w-none md:text-8xl md:leading-[0.88] md:tracking-[-0.07em]">
              Кейсы,
              <br />
              где <span className="text-accent">цифровой продукт</span>
              <br />
              становится инструментом роста
            </h1>
            <p className="mt-6 max-w-[22rem] text-base leading-relaxed text-ink/68 sm:text-lg md:mt-8 md:max-w-3xl md:text-2xl">
              Подборка проектов, где лендинги, сервисы и внутренние системы решают конкретные бизнес-задачи:
              помогают продавать, упрощают операционку и делают продукт понятнее для клиента.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 grid gap-4 md:mt-12 md:grid-cols-4"
          >
            {caseStudies.map((caseStudy) => (
              <div key={caseStudy.id} className="rounded-[12px] border border-ink/10 bg-white px-5 py-5">
                <p className="font-display text-4xl font-bold uppercase tracking-[-0.08em] text-accent">
                  {caseStudy.index}
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-ink/52">
                  {caseStudy.industry}
                </p>
                <p className="mt-2 text-lg font-medium text-ink">{caseStudy.client}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {caseStudies.map((caseStudy) => (
        <CaseStudySection key={caseStudy.id} caseStudy={caseStudy} />
      ))}

      <section className="bg-accent px-6 py-20 text-bg md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-bg/78">Следующий проект</p>
            <h2 className="mt-5 max-w-[11ch] text-[2.7rem] font-display font-bold uppercase leading-[0.88] tracking-[-0.05em] md:max-w-none md:text-7xl md:leading-[0.9] md:tracking-[-0.06em]">
              Если нужен кейс,
              <br />
              который будет работать
            </h2>
          </div>

          <Link
            href="/contacts"
            className="group inline-flex items-center gap-3 rounded-full border border-bg/22 bg-bg px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-bg md:gap-4 md:px-8 md:text-sm md:tracking-[0.2em]"
          >
            Обсудить задачу
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
