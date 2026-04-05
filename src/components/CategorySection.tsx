"use client";

import { motion } from "framer-motion";
import type { Category } from "@/data/achievements";
import ImageSlot from "./ImageSlot";
import SourceLinks from "./SourceLinks";
import { asset } from "@/lib/asset";

const categoryImageHints: Record<
  string,
  {
    label: string;
    caption: string;
    src: string;
    alt: string;
    aspect?: string;
    secondary?: {
      label: string;
      caption: string;
      src: string;
      alt: string;
    };
  }
> = {
  "democracy-restoration": {
    label: "06 · DEMOCRACY RESTORED",
    caption: "사회연대경제 정책 현장 방문",
    src: asset("/photos/06-democracy.jpg"),
    alt: "윤호중 장관 사회연대경제 정책 현장 방문",
    aspect: "aspect-[8/5]",
    secondary: {
      label: "FIELD · 06",
      caption: "광주 사회적경제 현장",
      src: asset("/photos/06-democracy-2.jpg"),
      alt: "윤호중 장관 광주 사회적경제 현장",
    },
  },
  "new-ministry": {
    label: "07 · NEW MINISTRY",
    caption: "고향사랑기부 및 마약범죄 근절 현장점검",
    src: asset("/photos/07-new-ministry.jpg"),
    alt: "윤호중 장관 제주 현장점검",
    secondary: {
      label: "FIELD · 07",
      caption: "제주 현장점검",
      src: asset("/photos/07-new-ministry-2.jpg"),
      alt: "윤호중 장관 제주 현장점검 2",
    },
  },
};

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
        {/* Header image slot */}
        {categoryImageHints[category.id] && (
          <div className={`mb-16 ${category.color.accent}`}>
            <ImageSlot
              label={categoryImageHints[category.id].label}
              caption={categoryImageHints[category.id].caption}
              accent={category.color.accent}
              src={categoryImageHints[category.id].src}
              alt={categoryImageHints[category.id].alt}
              aspect={categoryImageHints[category.id].aspect}
              credit="출처 : 행정안전부 · 정책브리핑"
            />
          </div>
        )}

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
              <SourceLinks sources={a.sources} accent={category.color.accent} />
            </motion.article>
          ))}
        </div>

        {/* Secondary supporting photo */}
        {categoryImageHints[category.id]?.secondary && (
          <div className={`mt-20 ${category.color.accent}`}>
            <ImageSlot
              label={categoryImageHints[category.id].secondary!.label}
              caption={categoryImageHints[category.id].secondary!.caption}
              accent={category.color.accent}
              src={categoryImageHints[category.id].secondary!.src}
              alt={categoryImageHints[category.id].secondary!.alt}
              credit="출처 : 행정안전부 · 정책브리핑"
              aspect="aspect-[21/9]"
            />
          </div>
        )}
      </div>
    </section>
  );
}
