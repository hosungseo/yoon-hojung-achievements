"use client";

import { motion } from "framer-motion";
import type { Category } from "@/data/achievements";

type Props = {
  category: Category;
  index: number;
};

export default function CategorySection({ category, index }: Props) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={category.id}
      className={`relative overflow-hidden ${category.color.bg} ${category.color.text}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className={`mb-16 max-w-4xl ${isEven ? "" : "ml-auto text-right"}`}
        >
          <div
            className={`mb-6 text-xs font-bold tracking-[0.3em] ${category.color.accent}`}
          >
            {category.badge}
          </div>
          <h2 className="text-headline text-[clamp(2.25rem,6vw,5rem)] text-balance">
            {category.tagline}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-75 md:text-lg">
            {category.intro}
          </p>
        </motion.div>

        {/* Achievements grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {category.achievements.map((a, i) => (
            <motion.article
              key={a.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/[0.06]"
            >
              <div
                className={`mb-4 text-xs font-bold tracking-widest ${category.color.accent}`}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-bold leading-tight md:text-2xl">
                {a.title}
              </h3>
              <p className="mt-3 text-sm opacity-70">{a.lead}</p>
              <div className="mt-6 h-px w-12 bg-white/20 transition group-hover:w-20 group-hover:bg-white/50" />
              <p className="mt-6 text-sm leading-relaxed opacity-80">
                {a.description}
              </p>
              {a.impact && (
                <div className="mt-6 border-l-2 border-white/30 pl-4 text-sm">
                  <span className="opacity-60">성과 · </span>
                  <span className={category.color.accent}>{a.impact}</span>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
