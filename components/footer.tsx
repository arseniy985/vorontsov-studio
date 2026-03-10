import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Logo } from '@/components/brand/logo';
import { siteConfig } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-bg pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Logo
              priority="footer"
              className="mb-6 inline-flex items-center gap-4"
              iconClassName="h-16 w-16 shrink-0"
              textClassName="font-display text-lg font-bold uppercase leading-[0.88] tracking-[0.24em] text-ink md:text-xl"
            />
            <p className="max-w-md text-ink/60">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider">Навигация</h3>
            <ul className="space-y-4">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink/60 transition-colors hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="text-ink/60 transition-colors hover:text-accent">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider">Контакты</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={siteConfig.contacts.emailHref}
                  className="group flex items-center gap-1 text-ink/60 transition-colors hover:text-accent"
                >
                  {siteConfig.contacts.email}
                  <ArrowUpRight size={16} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contacts.phoneHref}
                  className="group flex items-center gap-1 text-ink/60 transition-colors hover:text-accent"
                >
                  {siteConfig.contacts.phoneDisplay}
                  <ArrowUpRight size={16} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-ink/8 pt-8 text-sm text-ink/40 md:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.brandName}. Все права защищены.</p>
          <p>Сайты, AI и автоматизация для роста бизнеса.</p>
        </div>
      </div>
    </footer>
  );
}
