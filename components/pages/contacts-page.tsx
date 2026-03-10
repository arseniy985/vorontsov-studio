'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function ContactsPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative overflow-hidden px-6 pb-20 pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,59,48,0.18),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(13,13,13,0.06),transparent_22%)]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-accent">Контакты</p>
            <h1 className="mb-12 mt-5 text-6xl font-display font-bold uppercase leading-[0.85] tracking-tighter md:text-8xl lg:text-[9rem]">
              КОНТАКТЫ
            </h1>
            <p className="mb-20 max-w-3xl text-xl leading-relaxed text-ink/70 md:text-2xl">
              Пишите напрямую. Без формы и лишних шагов. Если задача уже сформулирована, ответим по делу. Если нет,
              поможем собрать адекватный первый запуск.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,420px)] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-ink/50">
                  <Mail size={16} /> Email
                </h3>
                <a
                  href={siteConfig.contacts.emailHref}
                  className="group flex items-center gap-4 text-3xl font-display font-bold transition-colors hover:text-accent md:text-5xl"
                >
                  {siteConfig.contacts.email}
                  <ArrowUpRight className="opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </div>

              <div>
                <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-ink/50">
                  <Phone size={16} /> Телефон
                </h3>
                <a
                  href={siteConfig.contacts.phoneHref}
                  className="group flex items-center gap-4 text-3xl font-display font-bold transition-colors hover:text-accent md:text-5xl"
                >
                  {siteConfig.contacts.phoneDisplay}
                  <ArrowUpRight className="opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </div>

              <div className="rounded-[12px] border border-ink/10 bg-[#f6f3ef] p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">Как удобнее</p>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/68">
                  <p>Почта подходит для подробного описания проекта, ссылок и материалов.</p>
                  <p>Телефон подходит, если задачу нужно быстро собрать голосом и определить следующий шаг.</p>
                  <p>После первого контакта уже решим, нужен ли созвон, переписка или короткий бриф.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative overflow-hidden rounded-[12px] bg-ink p-10 text-bg md:p-12"
            >
              <div className="absolute left-0 top-0 h-[2px] w-full bg-accent" />
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-bg/55">Что можно прислать сразу</p>
              <h2 className="mb-8 mt-4 text-3xl font-display font-bold uppercase md:text-4xl">Чтобы мы быстрее включились</h2>

              <div className="space-y-5 text-base leading-relaxed text-bg/72">
                <p>1. Чем занимается бизнес и что именно сейчас мешает расти.</p>
                <p>2. Что нужно запустить: сайт, MVP, AI-автоматизацию, внутренний кабинет или переработку текущего продукта.</p>
                <p>3. Какие сроки критичны и где сейчас главный узкий участок.</p>
              </div>

              <div className="mt-10 rounded-[12px] border border-white/12 bg-white/6 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Важно</p>
                <p className="mt-4 text-base leading-relaxed text-bg/72">
                  Если нужен юридический текст по обработке данных, он уже доступен на странице политики
                  конфиденциальности.
                </p>
                <Link
                  href="/privacy"
                  className="mt-6 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-bg transition-colors hover:text-accent"
                >
                  Открыть политику
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
