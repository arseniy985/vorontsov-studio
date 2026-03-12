'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import type { CaseStudy } from '@/lib/case-studies';

type CaseStudySectionProps = {
  caseStudy: CaseStudy;
};

export function CaseStudySection({ caseStudy }: CaseStudySectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const cardY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [42, -18]);
  const accentScale = useTransform(scrollYProgress, [0, 1], [0.25, 1]);
  const resultY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [56, -16]);

  return (
    <section
      ref={sectionRef}
      className="relative border-t border-ink/8 px-6 py-14 first:border-t-0 md:py-20"
    >
      <motion.div
        style={{ y: cardY }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[16px] border border-ink/10 bg-white shadow-[0_24px_80px_rgba(13,13,13,0.05)]"
      >
        <motion.div
          style={{ scaleX: accentScale }}
          className="h-[3px] origin-left bg-accent"
        />

        <div className="grid gap-8 px-6 py-8 md:px-10 md:py-10 xl:grid-cols-[minmax(0,1fr)_minmax(320px,396px)] xl:gap-10 2xl:grid-cols-[minmax(0,1fr)_minmax(340px,420px)] 2xl:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="min-w-0 xl:pr-2 2xl:pr-4"
          >
            <div className="max-w-[44rem]">
              <div className="mb-8 grid gap-5 md:grid-cols-[auto_minmax(0,1fr)] md:items-end">
                <span className="font-display text-6xl font-bold uppercase tracking-[-0.08em] text-accent md:text-8xl">
                  {caseStudy.index}
                </span>
                <div className="min-w-0 pb-1">
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-accent/80">
                    {caseStudy.industry}
                  </p>
                  <h2 className="mt-2 max-w-[9ch] text-4xl font-display font-bold uppercase leading-[0.88] tracking-[-0.06em] text-ink break-words md:max-w-[10ch] md:text-5xl xl:max-w-[8ch] xl:text-[3.7rem] 2xl:max-w-[9ch] 2xl:text-[4.2rem]">
                    {caseStudy.client}
                  </h2>
                </div>
              </div>

              <p className="max-w-2xl text-lg leading-relaxed text-ink/68 md:text-xl">
                {caseStudy.summary}
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {caseStudy.highlights.map((highlight) => (
                  <div key={highlight} className="rounded-[12px] border border-ink/10 bg-white px-5 py-4">
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/55">Фокус</span>
                    <p className="mt-3 text-base font-medium text-ink">{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Технологии</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {caseStudy.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-ink/10 bg-bg px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink/72"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.aside
            style={{ y: resultY }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="xl:pt-6"
          >
            <div className="rounded-[16px] bg-accent px-6 py-6 text-bg md:px-7">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-bg/80">Ключевые метрики</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {caseStudy.metrics.map((metric) => (
                  <div key={`${metric.value}-${metric.label}`} className="rounded-[12px] border border-bg/18 bg-bg/10 px-4 py-4">
                    <p className="font-display text-3xl font-bold uppercase leading-none tracking-[-0.06em] text-bg md:text-4xl">
                      {metric.value}
                    </p>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-bg/92">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-bg/72">
                      {metric.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}
