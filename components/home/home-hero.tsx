'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HomeHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6">
      <div className="absolute top-1/4 left-10 w-24 h-[1px] bg-accent/50 hidden md:block" />
      <div className="absolute bottom-1/4 right-10 w-12 h-12 border border-accent/50 hidden md:block" />

      <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <p className="text-sm md:text-base font-medium tracking-widest uppercase text-ink/60 mb-4 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-ink/60 block" />
            web platforms / ecommerce / interfaces
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] font-display font-bold tracking-tighter uppercase">
            МЫ СОЗДАЁМ
            <br />
            <span className="text-accent">ЦИФРОВЫЕ</span>
            <br />
            ПРОДУКТЫ
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-12"
        >
          <Link
            href="/contacts"
            className="group flex items-center gap-4 bg-ink text-bg px-8 py-4 text-lg font-medium hover:bg-accent transition-colors"
          >
            ОБСУДИТЬ ПРОЕКТ
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
          <p className="text-ink/60 max-w-xs text-sm">
            Разработка от <span className="text-ink font-bold">24 часов</span>. Фокус на бизнес-показатели и рост
            прибыли.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
