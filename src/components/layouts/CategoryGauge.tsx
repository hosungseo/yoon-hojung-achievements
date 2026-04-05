"use client";

import { motion } from "framer-motion";
import type { Category } from "@/data/achievements";
import ImageSlot from "@/components/ImageSlot";
import PhotoPair from "@/components/PhotoPair";
import SourceLinks from "@/components/SourceLinks";
import { asset } from "@/lib/asset";

type Props = { category: Category };

/**
 * Circular gauge for 647/647 systems recovery
 */
export default function CategoryGauge({ category }: Props) {
  const radius = 140;
  const circumference = 2 * Math.PI * radius;

  return (
    <section
      id={category.id}
      className={`relative overflow-hidden ${category.color.bg} ${category.color.text}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-32 md:px-12 md:py-40">
        {/* Header image slot */}
        <div className={`mb-16 ${category.color.accent}`}>
          <ImageSlot
            label="05 · PUBLIC SAFETY"
            caption="행정안전부·산림청·지방정부 합동 산불예방 캠페인"
            accent={category.color.accent}
            src={asset("/photos/05-public-safety.jpg")}
            alt="산불예방 캠페인 현장"
            credit="출처 : 행정안전부 · 정책브리핑"
          />
        </div>

        <div className="grid gap-16 md:grid-cols-2 md:items-center md:gap-20">
          {/* Left: Circular gauge */}
          <div className="relative flex items-center justify-center">
            <svg
              viewBox="-200 -200 400 400"
              className="h-full w-full max-w-md"
            >
              {/* Background circle */}
              <circle
                cx="0"
                cy="0"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                opacity="0.1"
              />
              {/* Progress circle */}
              <motion.circle
                cx="0"
                cy="0"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
                className={category.color.accent}
                transform="rotate(-90)"
              />
              {/* Center text */}
              <motion.text
                x="0"
                y="-20"
                textAnchor="middle"
                fontSize="120"
                fontWeight="900"
                className={`text-display ${category.color.accent}`}
                fill="currentColor"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                647
              </motion.text>
              <motion.text
                x="0"
                y="30"
                textAnchor="middle"
                fontSize="18"
                fontWeight="700"
                fill="currentColor"
                opacity="0.6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                / 647 시스템
              </motion.text>
              <motion.text
                x="0"
                y="70"
                textAnchor="middle"
                fontSize="14"
                fontWeight="700"
                className={category.color.accent}
                fill="currentColor"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                100% 복구 완료
              </motion.text>
            </svg>
            {/* Corner labels */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 2 }}
              className="absolute left-0 top-4 text-left text-xs"
            >
              <div
                className={`font-bold tracking-widest ${category.color.accent}`}
              >
                2025.09.26
              </div>
              <div className="opacity-60">화재 발생</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="absolute bottom-4 right-0 text-right text-xs"
            >
              <div
                className={`font-bold tracking-widest ${category.color.accent}`}
              >
                2025.12.30
              </div>
              <div className="opacity-60">전면 복구</div>
            </motion.div>
          </div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
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
            <div className="mt-10 space-y-4 border-l-2 border-white/20 pl-6">
              <div>
                <div className="text-xs font-bold tracking-widest opacity-60">
                  화재 규모
                </div>
                <div className="mt-1 text-lg font-bold">
                  647개 전체 정부 시스템 마비
                </div>
              </div>
              <div>
                <div className="text-xs font-bold tracking-widest opacity-60">
                  복구 시간
                </div>
                <div className="mt-1 text-lg font-bold">3개월 · 95일</div>
              </div>
              <div>
                <div className="text-xs font-bold tracking-widest opacity-60">
                  대응 체계
                </div>
                <div className="mt-1 text-lg font-bold">
                  중앙재난안전대책본부 총력
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Supporting photo pair */}
        <div className={`mt-24 ${category.color.accent}`}>
          <PhotoPair
            accent={category.color.accent}
            credit="출처 : 행정안전부 · 정책브리핑"
            photos={[
              {
                src: asset("/photos/05-public-safety-2.jpg"),
                alt: "산불예방 캠페인 현장",
                caption: "FIELD · 산불예방 캠페인",
              },
              {
                src: asset("/photos/05-public-safety-3.jpg"),
                alt: "산불 대응 현장 점검",
                caption: "RESPONSE · 현장 점검",
              },
            ]}
          />
        </div>

        {/* Achievements as compact rows */}
        <div className="mt-24 border-t border-white/15 pt-16">
          <div className="mb-10 text-xs font-bold tracking-[0.3em] opacity-60">
            SAFETY AGENDA
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {category.achievements.map((a, i) => (
              <motion.article
                key={a.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="border border-white/10 bg-white/[0.03] p-5"
              >
                <div
                  className={`mb-2 text-xs font-bold tracking-widest ${category.color.accent}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-base font-bold leading-tight">
                  {a.title}
                </h3>
                <p className="mt-2 text-xs opacity-60">{a.lead}</p>
                <SourceLinks
                  sources={a.sources}
                  accent={category.color.accent}
                  compact
                />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
