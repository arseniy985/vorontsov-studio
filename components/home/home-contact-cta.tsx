'use client';

import Link from 'next/link';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { Reveal } from '@/components/shared/reveal';
import { siteConfig } from '@/lib/site-config';

export function HomeContactCta() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="overflow-hidden rounded-[12px] bg-accent px-6 py-10 text-bg shadow-[0_30px_90px_rgba(255,59,48,0.18)] md:px-10 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:items-end">
            <div>
              <h2 className="max-w-4xl text-[2.8rem] font-display font-bold uppercase leading-[0.88] tracking-[-0.05em] md:text-[5rem]">
                Связь в один шаг.
                <br />
                Без лишних полей.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bg/82 md:text-xl">
                Если задача уже понятна, пишите или звоните напрямую. Если задача еще собирается, тоже пишите: поможем сформулировать, что именно стоит запускать первым.
              </p>
            </div>

            <div className="grid gap-4">
              <a
                href={siteConfig.contacts.emailHref}
                className="group flex items-center justify-between rounded-[12px] border border-white/20 bg-white/10 px-5 py-5 transition-colors hover:bg-white/16"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-bg/62">Email</p>
                  <p className="mt-2 text-xl font-display font-bold tracking-[-0.03em] md:text-2xl">{siteConfig.contacts.email}</p>
                </div>
                <Mail className="text-bg/60 transition-colors group-hover:text-bg" />
              </a>

              <a
                href={siteConfig.contacts.phoneHref}
                className="group flex items-center justify-between rounded-[12px] border border-white/20 bg-white/10 px-5 py-5 transition-colors hover:bg-white/16"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-bg/62">Телефон</p>
                  <p className="mt-2 text-xl font-display font-bold tracking-[-0.03em] md:text-2xl">{siteConfig.contacts.phoneDisplay}</p>
                </div>
                <Phone className="text-bg/60 transition-colors group-hover:text-bg" />
              </a>

              <Link
                href="/privacy"
                className="inline-flex items-center gap-3 pt-2 text-sm font-semibold uppercase tracking-[0.22em] text-bg/76 transition-colors hover:text-bg"
              >
                Политика конфиденциальности
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
