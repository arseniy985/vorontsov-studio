'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 right-10 w-24 h-[1px] bg-accent/50 hidden md:block" />

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent font-bold uppercase tracking-widest mb-4">О СТУДИИ</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tighter mb-12 max-w-4xl">
              {siteConfig.brandMark}
            </h1>
            <p className="text-xl md:text-2xl text-ink/70 max-w-3xl leading-relaxed mb-12">
              Мы собираем сайты, интерфейсы и AI-автоматизацию для бизнеса, которому важны не красивые обещания, а запуск, продажи и ясная рабочая логика без лишней бюрократии.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-muted/50 pt-12">
              <div>
                <div className="text-4xl font-display font-bold text-accent mb-2">24ч</div>
                <div className="text-sm font-bold uppercase text-ink/60">Быстрые запуски для первых гипотез</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-accent mb-2">MVP</div>
                <div className="text-sm font-bold uppercase text-ink/60">Собираем первый рабочий контур без перегруза</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-accent mb-2">AI</div>
                <div className="text-sm font-bold uppercase text-ink/60">Автоматизация продаж, поддержки и процессов</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-accent mb-2">FULL</div>
                <div className="text-sm font-bold uppercase text-ink/60">От идеи и структуры до запуска и развития</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 bg-ink text-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-16">
            НАШ <span className="text-accent">ПОДХОД</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border border-bg/10 p-10 hover:bg-bg/5 transition-colors">
              <h3 className="text-2xl font-bold uppercase mb-6 text-accent">Бизнес-ориентированность</h3>
              <p className="text-bg/70 text-lg leading-relaxed">
                Мы говорим на языке бизнеса. Нам важно, чтобы разработанный продукт приносил реальную пользу: увеличивал конверсию, снижал издержки или открывал новые рынки.
              </p>
            </div>
            <div className="border border-bg/10 p-10 hover:bg-bg/5 transition-colors">
              <h3 className="text-2xl font-bold uppercase mb-6 text-accent">Техническая экспертиза</h3>
              <p className="text-bg/70 text-lg leading-relaxed">
                Подбираем стек технологий индивидуально под каждую задачу. От простых лендингов до сложных высоконагруженных систем с интеграцией искусственного интеллекта.
              </p>
            </div>
            <div className="border border-bg/10 p-10 hover:bg-bg/5 transition-colors">
              <h3 className="text-2xl font-bold uppercase mb-6 text-accent">Прозрачность процессов</h3>
              <p className="text-bg/70 text-lg leading-relaxed">
                Вы всегда знаете, на каком этапе находится проект. Мы фиксируем сроки, бюджет и регулярно предоставляем отчеты о проделанной работе.
              </p>
            </div>
            <div className="border border-bg/10 p-10 hover:bg-bg/5 transition-colors">
              <h3 className="text-2xl font-bold uppercase mb-6 text-accent">Долгосрочное партнерство</h3>
              <p className="text-bg/70 text-lg leading-relaxed">
                Мы не бросаем проекты после релиза. Обеспечиваем техническую поддержку, развиваем функционал и помогаем продукту расти вместе с вашим бизнесом.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-accent text-bg">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8 max-w-3xl">
            ДАВАЙТЕ ЗНАКОМИТЬСЯ
          </h2>
          <p className="text-xl max-w-2xl mb-12 opacity-90">
            Напишите или позвоните. Дальше быстро соберем, что именно стоит запускать первым и где будет бизнес-эффект.
          </p>
          <Link
            href="/contacts"
            className="bg-bg text-ink px-10 py-5 text-xl font-bold uppercase hover:bg-ink hover:text-bg transition-colors flex items-center gap-4 group"
          >
            СВЯЗАТЬСЯ С НАМИ
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
