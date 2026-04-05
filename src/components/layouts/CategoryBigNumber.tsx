"use client";

import { motion } from "framer-motion";
import type { Category } from "@/data/achievements";
import CountUp from "@/components/CountUp";
import ImageSlot from "@/components/ImageSlot";
import SourceLinks from "@/components/SourceLinks";
import { asset } from "@/lib/asset";

type Props = { category: Category };

export default function CategoryBigNumber({ category }: Props) {
  const stats = [
    { value: "4,900만", label: "지급 대상 국민" },
    { value: "9조원+", label: "총 지급 규모" },
    { value: "111.4", label: "소비자심리지수" },
    { value: "1.3%", label: "2025년 3Q GDP 성장률" },
  ];

  return (
    <section
      id={category.id}
      className={`relative overflow-hidden ${category.color.bg} ${category.color.text}`}
    >
      {/* Giant background number */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div
          className={`text-display opacity-[0.06] ${category.color.accent}`}
          style={{ fontSize: "clamp(18rem, 50vw, 50rem)" }}
        >
          9조
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 md:px-12 md:py-48">
        {/* Header image slot */}
        <div className={`mb-16 ${category.color.accent}`}>
          <ImageSlot
            label="02 · LIVELIHOOD RECOVERY"
            caption="마을공동체 우수사례 현장방문"
            accent={category.color.accent}
            src={asset("/photos/02-livelihood.jpg")}
            alt="윤호중 장관 마을공동체 우수사례 현장방문"
            credit="출처 : 행정안전부 · 정책브리핑"
          />
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 max-w-3xl"
        >
          <div
            className={`mb-6 text-xs font-bold tracking-[0.3em] ${category.color.accent}`}
          >
            {category.badge}
          </div>
          <h2 className="text-headline text-[clamp(2.25rem,6vw,5rem)] text-balance">
            {category.tagline}
          </h2>
          <p className="mt-6 text-lg leading-relaxed opacity-75">
            {category.intro}
          </p>
        </motion.div>

        {/* Stats grid — huge numbers */}
        <div className="mb-24 grid gap-10 border-y border-white/15 py-16 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <CountUp
                value={s.value}
                className={`text-display text-[clamp(2.75rem,6vw,5rem)] leading-none ${category.color.accent}`}
              />
              <div className="mt-4 text-sm opacity-70 md:text-base">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements — alternating rows, not grid */}
        <div className="space-y-12">
          {category.achievements.map((a, i) => (
            <motion.article
              key={a.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`grid gap-6 border-b border-white/10 pb-12 last:border-0 md:grid-cols-[auto_1fr] ${
                i % 2 === 1 ? "md:text-right md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div
                className={`text-display text-6xl leading-none md:text-7xl ${category.color.accent}`}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-2xl font-bold leading-tight md:text-3xl">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm font-semibold opacity-70 md:text-base">
                  {a.lead}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed opacity-75 md:text-base">
                  {a.description}
                </p>
                {a.impact && (
                  <div
                    className={`mt-5 inline-block border-b-2 pb-1 text-xs font-bold tracking-wider md:text-sm ${category.color.accent} ${category.color.accent.replace(
                      "text-",
                      "border-",
                    )}`}
                  >
                    {a.impact}
                  </div>
                )}
                <SourceLinks
                  sources={a.sources}
                  accent={category.color.accent}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
