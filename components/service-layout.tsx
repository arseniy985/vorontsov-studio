'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: { title: string; desc: string }[];
  process: { title: string; desc: string }[];
}

export function ServiceLayout({ title, subtitle, description, benefits, process }: ServiceLayoutProps) {
  return (
    <div className="flex flex-col w-full">
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 right-10 w-24 h-[1px] bg-accent/50 hidden md:block" />
        
        <div className="max-w-7xl mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-ink/60 hover:text-accent transition-colors mb-12 uppercase text-sm font-bold tracking-widest">
            <ArrowLeft size={16} />
            ВСЕ УСЛУГИ
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent font-bold uppercase tracking-widest mb-4">{subtitle}</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tighter mb-12 max-w-4xl">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-ink/70 max-w-3xl leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-ink text-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-16">
            ПОЛЬЗА ДЛЯ <span className="text-accent">БИЗНЕСА</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="border border-bg/10 p-8 hover:bg-bg/5 transition-colors">
                <div className="text-accent font-display text-2xl font-bold mb-4">0{i + 1}</div>
                <h3 className="text-xl font-bold uppercase mb-4">{benefit.title}</h3>
                <p className="text-bg/60 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-16">
            КАК МЫ <span className="text-accent">РАБОТАЕМ</span>
          </h2>
          
          <div className="space-y-8">
            {process.map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 items-start border-b border-muted/50 pb-8">
                <div className="text-accent font-display text-4xl font-bold md:w-24 shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold uppercase mb-4">{step.title}</h3>
                  <p className="text-ink/70 text-lg max-w-3xl leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-accent text-bg">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8 max-w-3xl">
            ОБСУДИМ ВАШ ПРОЕКТ?
          </h2>
          <p className="text-xl max-w-2xl mb-12 opacity-90">
            Напишите нам напрямую, и мы предложим оптимальный первый шаг для вашей задачи.
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
