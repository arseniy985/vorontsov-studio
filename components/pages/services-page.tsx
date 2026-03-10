'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Bot, Code, Search, Smartphone, Wrench, Zap } from 'lucide-react';

const services = [
  {
    title: 'РАЗРАБОТКА САЙТОВ',
    description: 'Корпоративные сайты, промо-страницы и веб-платформы. Фуллстек, фронтенд и бэкенд. Фокус на конверсию и рост заявок.',
    href: '/services/web-development',
    icon: <Code size={32} strokeWidth={1} />,
    colSpan: 'md:col-span-2 lg:col-span-2',
    accent: 'конверсию',
  },
  {
    title: 'МОБИЛЬНЫЕ ПРИЛОЖЕНИЯ',
    description: 'iOS и Android приложения для бизнеса. Оптимизация процессов и удержание клиентов.',
    href: '/services/mobile-apps',
    icon: <Smartphone size={32} strokeWidth={1} />,
    colSpan: 'md:col-span-1 lg:col-span-1',
    accent: 'удержание',
  },
  {
    title: 'ИНТЕГРАЦИЯ AI',
    description: 'Внедрение ИИ-агентов и чат-ботов в любую логику. Автоматизация рутины и сокращение издержек.',
    href: '/services/ai-integration',
    icon: <Bot size={32} strokeWidth={1} />,
    colSpan: 'md:col-span-1 lg:col-span-1',
    accent: 'Автоматизация',
  },
  {
    title: 'SEO И ПРОДВИЖЕНИЕ',
    description: 'Органический рост трафика и вывод в топ. Больше целевых клиентов без постоянных затрат на рекламу.',
    href: '/services/seo',
    icon: <Search size={32} strokeWidth={1} />,
    colSpan: 'md:col-span-2 lg:col-span-2',
    accent: 'Больше целевых клиентов',
  },
  {
    title: 'РАЗРАБОТКА ПОД КЛЮЧ',
    description: 'От идеи до работающего продукта и техподдержки. Скоростная разработка от 24 часов.',
    href: '/services/turnkey',
    icon: <Zap size={32} strokeWidth={1} />,
    colSpan: 'md:col-span-2 lg:col-span-1',
    accent: 'от 24 часов',
  },
  {
    title: 'СПАСЕНИЕ ПРОЕКТОВ',
    description: 'Берем на доработку и завершение существующие проекты. Исправляем ошибки, если пропал разработчик.',
    href: '/services/project-rescue',
    icon: <Wrench size={32} strokeWidth={1} />,
    colSpan: 'md:col-span-1 lg:col-span-2',
    accent: 'завершение',
  },
];

export function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-8">
              НАШИ <span className="text-accent">УСЛУГИ</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl text-ink/70 mb-16">
              Мы создаем цифровые продукты, которые решают бизнес-задачи. От быстрых промо-сайтов до сложных AI-интеграций.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {services.map((service, index) => {
              const parts = service.description.split(service.accent);

              return (
                <motion.div
                  key={service.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={service.colSpan}
                >
                  <Link
                    href={service.href}
                    className="group relative border border-ink/10 bg-bg p-10 flex flex-col justify-between min-h-[320px] hover:bg-ink hover:text-bg transition-colors overflow-hidden h-full block"
                  >
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />

                    <div className="flex justify-between items-start mb-12">
                      <div className="text-accent opacity-80 group-hover:opacity-100 transition-opacity">
                        {service.icon}
                      </div>
                      <ArrowUpRight size={32} className="text-ink/30 group-hover:text-accent group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-300" />
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold uppercase mb-4 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-ink/60 group-hover:text-bg/60 text-lg leading-relaxed transition-colors">
                        {parts.map((part, i) => (
                          <span key={`${service.href}-${i}`}>
                            {part}
                            {i < parts.length - 1 && <span className="text-ink group-hover:text-bg font-medium transition-colors">{service.accent}</span>}
                          </span>
                        ))}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-accent text-bg mt-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-8">
            НУЖЕН ПРОЕКТ?
          </h2>
          <Link
            href="/contacts"
            className="bg-bg text-ink px-10 py-5 text-xl font-bold uppercase hover:bg-ink hover:text-bg transition-colors flex items-center gap-4 group"
          >
            ОБСУДИТЬ ЗАДАЧУ
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
