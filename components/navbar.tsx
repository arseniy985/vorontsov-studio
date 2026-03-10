'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/brand/logo';
import { siteConfig } from '@/lib/site-config';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-ink/8 bg-bg/82 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo
          className="flex items-center gap-3"
          iconClassName="h-11 w-11 shrink-0"
          textClassName="font-display text-[0.78rem] font-bold uppercase leading-[0.92] tracking-[0.28em] text-ink"
        />

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium transition-colors hover:text-accent">
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.contacts.phoneHref}
            className="rounded-full border border-ink/12 px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            {siteConfig.contacts.phoneDisplay}
          </a>
        </nav>

        <button
          className="md:hidden p-2 -mr-2 text-ink"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute left-0 right-0 top-20 flex flex-col gap-6 border-b border-ink/8 bg-bg p-6 md:hidden"
        >
          <Logo
            className="flex items-center gap-3 border-b border-ink/8 pb-6"
            iconClassName="h-12 w-12 shrink-0"
            textClassName="font-display text-sm font-bold uppercase leading-[0.92] tracking-[0.28em] text-ink"
          />
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="text-lg font-medium">
              {item.label}
            </Link>
          ))}
          <a href={siteConfig.contacts.phoneHref} className="text-lg font-medium text-accent">
            {siteConfig.contacts.phoneDisplay}
          </a>
        </motion.div>
      )}
    </header>
  );
}
