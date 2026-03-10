"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Reveal } from "@/components/shared/reveal";

const processSteps = [
  {
    index: "01",
    title: "Разбираем, где бизнес теряет деньги или темп",
    description:
      "На старте фиксируем цель проекта: больше заявок, быстрее запуск, меньше ручной рутины, прозрачнее внутренняя логика или новый цифровой канал продаж.",
  },
  {
    index: "02",
    title: "Собираем решение вокруг результата, а не вокруг модных технологий",
    description:
      "Определяем сценарии, структуру, стек и состав MVP так, чтобы не переплачивать за лишнее и не замедлять запуск ради красоты.",
  },
  {
    index: "03",
    title: "Запускаем, тестируем, дорабатываем",
    description:
      "Выводим продукт в рабочий режим, смотрим на фактическое поведение пользователей и усиливаем то, что двигает продажи, обращения или эффективность команды.",
  },
  {
    index: "04",
    title: "Поддерживаем и развиваем без потери скорости",
    description:
      "После релиза проект не зависает. Продолжаем дорабатывать интерфейсы, автоматизацию и контент так, чтобы бизнес не терял инерцию.",
  },
];

export function HomeProcessStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 75%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-ink px-6 py-20 text-bg md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,59,48,0.22),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_22%)]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-bg/55">
            Storyline / процесс / рост
          </p>
          <h2 className="mt-5 text-[2.7rem] font-display font-bold uppercase leading-[0.9] tracking-[-0.05em] md:text-[5rem]">
            Как мы ведем клиента
            <br />
            <span className="text-accent">к рабочему результату</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bg/68 md:text-xl">
            Без хаотичных итераций и бесконечных кругов согласования. Каждый
            этап отвечает за конкретный сдвиг к запуску и бизнес-эффекту.
          </p>
        </Reveal>

        <div className="relative mt-14 md:mt-20">
          <div className="absolute bottom-0 left-4 top-0 hidden w-px bg-white/12 md:block" />
          <motion.div
            className="absolute bottom-0 left-4 top-0 hidden origin-top bg-accent md:block md:w-px"
            style={{ scaleY: shouldReduceMotion ? 1 : lineScale }}
          />

          <div className="space-y-8 md:space-y-12">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? 24 : -24, y: 32 }
                }
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: shouldReduceMotion ? 0.2 : 0.7,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative grid gap-5 md:grid-cols-[68px_minmax(0,1fr)] md:gap-8"
              >
                <div className="relative z-10 flex items-center md:justify-center">
                  <span className="inline-flex h-8 w-8 rounded-full border border-accent/35 bg-ink text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-accent md:h-10 md:w-10">
                    <span className="m-auto">{step.index}</span>
                  </span>
                </div>

                <div className="rounded-[12px] border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent/80">
                    Шаг {step.index}
                  </p>
                  <h3 className="mt-4 max-w-3xl text-2xl font-display font-bold uppercase leading-tight tracking-[-0.04em] md:text-[2rem]">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-bg/70 md:text-lg">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
