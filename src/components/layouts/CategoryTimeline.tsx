"use client";

import { motion } from "framer-motion";
import type { Category } from "@/data/achievements";
import CountUp from "@/components/CountUp";
import ImageSlot from "@/components/ImageSlot";

const historicalEvents = [
  { year: "1948", label: "검찰청 창설", tone: "neutral" },
  { year: "2022.08", label: "경찰국 신설", tone: "neutral" },
  { year: "2025.08.26", label: "경찰국 폐지 공포", tone: "accent", highlight: true },
  { year: "2026.01.02", label: "정부조직 대개편 시행", tone: "accent", highlight: true },
  { year: "2026.10.02", label: "검찰청 77년 만에 폐지", tone: "accent", highlight: true },
];

type Props = { category: Category };

export default function CategoryTimeline({ category }: Props) {
  return (
    <section
      id={category.id}
      className={`relative overflow-hidden ${category.color.bg} ${category.color.text}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-32 md:px-12 md:py-40">
        {/* Header image slot */}
        <div className={`mb-16 ${category.color.accent}`}>
          <ImageSlot
            label="HERO IMAGE · 01 정부혁신"
            caption="국회의사당 · 공문서 · 서명식 이미지 예정"
            accent={category.color.accent}
          />
        </div>

        {/* Giant 77 + header split */}
        <div className="mb-20 grid gap-12 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <CountUp
                value="77"
                duration={2}
                className={`text-display text-[clamp(8rem,18vw,16rem)] leading-[0.8] ${category.color.accent}`}
              />
              <div className="mt-4 text-xl font-bold tracking-widest md:text-2xl">
                년 만의 변화
              </div>
            </motion.div>
          </div>
          <div className="md:col-span-3 md:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div
                className={`mb-6 text-xs font-bold tracking-[0.3em] ${category.color.accent}`}
              >
                {category.badge}
              </div>
              <h2 className="text-headline text-[clamp(2rem,5vw,4rem)] text-balance">
                {category.tagline}
              </h2>
              <p className="mt-6 text-base leading-relaxed opacity-75 md:text-lg">
                {category.intro}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Historical timeline */}
        <div className="relative mb-24 border-t border-white/15 pt-16">
          <div
            className={`absolute -top-1 left-0 h-0.5 w-12 ${category.color.accent.replace("text-", "bg-")}`}
          />
          <div className="mb-8 text-xs font-bold tracking-[0.3em] opacity-60">
            HISTORICAL TIMELINE
          </div>
          <ol className="grid gap-6 md:grid-cols-5">
            {historicalEvents.map((e, i) => (
              <motion.li
                key={e.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`border-l-2 pl-4 ${
                  e.highlight
                    ? `${category.color.accent.replace("text-", "border-")}`
                    : "border-white/20"
                }`}
              >
                <div
                  className={`text-xs font-bold tracking-widest ${
                    e.highlight ? category.color.accent : "opacity-50"
                  }`}
                >
                  {e.year}
                </div>
                <div
                  className={`mt-2 text-sm font-bold leading-tight md:text-base ${
                    e.highlight ? "" : "opacity-70"
                  }`}
                >
                  {e.label}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Achievement cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {category.achievements.map((a, i) => (
            <motion.article
              key={a.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/[0.06]"
            >
              <div
                className={`mb-3 text-xs font-bold tracking-widest ${category.color.accent}`}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-bold leading-tight md:text-xl">
                {a.title}
              </h3>
              <p className="mt-2 text-xs opacity-60">{a.lead}</p>
              <p className="mt-4 text-sm leading-relaxed opacity-75">
                {a.description}
              </p>
              {a.impact && (
                <div
                  className={`mt-4 text-xs font-bold ${category.color.accent}`}
                >
                  {a.impact}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
