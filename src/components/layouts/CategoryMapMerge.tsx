"use client";

import { motion } from "framer-motion";
import type { Category } from "@/data/achievements";
import CountUp from "@/components/CountUp";
import ImageSlot from "@/components/ImageSlot";
import { asset } from "@/lib/asset";

// 2025년 행정안전부 주민등록 인구 기준 (단위: 만 명, 소수점 첫째 자리 반올림)
const metroPopulation = [
  { name: "서울", value: 934, highlight: false },
  { name: "전남광주통합특별시", value: 320, highlight: true },
  { name: "부산", value: 325, highlight: false },
  { name: "인천", value: 302, highlight: false },
  { name: "대구", value: 231, highlight: false },
  { name: "대전", value: 142, highlight: false },
  { name: "광주 (단독)", value: 139, highlight: false },
  { name: "울산", value: 107, highlight: false },
];

type Props = { category: Category };

/**
 * Abstract map visualization: two regions (광주, 전남) merging into one.
 * Not geographically accurate — conceptual.
 */
export default function CategoryMapMerge({ category }: Props) {
  return (
    <section
      id={category.id}
      className={`relative overflow-hidden ${category.color.bg} ${category.color.text}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-32 md:px-12 md:py-40">
        {/* Header image slot */}
        <div className={`mb-16 ${category.color.accent}`}>
          <ImageSlot
            label="03 · DECENTRALIZATION"
            caption="행안부-기아 지방소멸 대응 상생협약 체결"
            accent={category.color.accent}
            src={asset("/photos/03-decentralization.jpg")}
            alt="행안부-기아 지방소멸 대응 상생협약 체결식"
            credit="출처 : 행정안전부 · 정책브리핑"
          />
        </div>

        <div className="grid gap-16 md:grid-cols-2 md:gap-24 md:items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
          >
            <div
              className={`mb-6 text-xs font-bold tracking-[0.3em] ${category.color.accent}`}
            >
              {category.badge}
            </div>
            <h2 className="text-headline text-[clamp(2.25rem,5.5vw,4.5rem)] text-balance">
              {category.tagline}
            </h2>
            <p className="mt-6 text-base leading-relaxed opacity-75 md:text-lg">
              {category.intro}
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/15 pt-8">
              <div>
                <CountUp
                  value="320만"
                  className={`text-display text-3xl md:text-4xl ${category.color.accent}`}
                />
                <div className="mt-2 text-xs opacity-60">통합 인구</div>
              </div>
              <div>
                <CountUp
                  value="40년"
                  className={`text-display text-3xl md:text-4xl ${category.color.accent}`}
                />
                <div className="mt-2 text-xs opacity-60">분리 이후 재결합</div>
              </div>
              <div>
                <CountUp
                  value="1호"
                  className={`text-display text-3xl md:text-4xl ${category.color.accent}`}
                />
                <div className="mt-2 text-xs opacity-60">통합특별시</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Abstract merge visualization */}
          <motion.div
            className={`relative aspect-square w-full max-w-lg mx-auto ${category.color.accent}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <svg
              viewBox="0 0 400 400"
              className="h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    opacity="0.15"
                  />
                </pattern>
                <radialGradient id="blobGrad" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
                </radialGradient>
                <marker
                  id="arrow"
                  markerWidth="10"
                  markerHeight="10"
                  refX="5"
                  refY="5"
                  orient="auto"
                >
                  <path
                    d="M0,0 L10,5 L0,10 z"
                    fill="currentColor"
                  />
                </marker>
              </defs>
              <rect width="400" height="400" fill="url(#grid)" />

              {/* 광주 blob */}
              <motion.g
                variants={{
                  hidden: { x: -80, opacity: 0 },
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 1.4,
                      delay: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                <circle cx="180" cy="180" r="55" fill="url(#blobGrad)" />
                <text
                  x="180"
                  y="185"
                  textAnchor="middle"
                  fontSize="18"
                  fontWeight="900"
                  fill="currentColor"
                >
                  광주
                </text>
                <text
                  x="180"
                  y="205"
                  textAnchor="middle"
                  fontSize="10"
                  fill="currentColor"
                  opacity="0.7"
                >
                  143만
                </text>
              </motion.g>

              {/* 전남 blob */}
              <motion.g
                variants={{
                  hidden: { x: 80, opacity: 0 },
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 1.4,
                      delay: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                <circle cx="250" cy="220" r="75" fill="url(#blobGrad)" />
                <text
                  x="250"
                  y="225"
                  textAnchor="middle"
                  fontSize="20"
                  fontWeight="900"
                  fill="currentColor"
                >
                  전남
                </text>
                <text
                  x="250"
                  y="247"
                  textAnchor="middle"
                  fontSize="10"
                  fill="currentColor"
                  opacity="0.7"
                >
                  177만
                </text>
              </motion.g>

              {/* Merge line */}
              <motion.line
                x1="180"
                y1="180"
                x2="250"
                y2="220"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: {
                    pathLength: 1,
                    opacity: 0.7,
                    transition: { duration: 1, delay: 1.3 },
                  },
                }}
              />

              {/* Arrow indicator */}
              <motion.path
                d="M 200 280 L 200 310"
                stroke="currentColor"
                strokeWidth="2"
                markerEnd="url(#arrow)"
                fill="none"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { delay: 1.6, duration: 0.6 },
                  },
                }}
              />

              {/* Final unified label */}
              <motion.g
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: 1.8 },
                  },
                }}
              >
                <rect
                  x="115"
                  y="315"
                  width="170"
                  height="36"
                  rx="2"
                  fill="currentColor"
                  opacity="0.15"
                />
                <text
                  x="200"
                  y="339"
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="900"
                  fill="currentColor"
                >
                  전남광주통합특별시
                </text>
              </motion.g>
            </svg>
          </motion.div>
        </div>

        {/* Metro population comparison bar chart */}
        <div className="mt-24 border-t border-white/15 pt-16">
          <div className="mb-3 text-xs font-bold tracking-[0.3em] opacity-60">
            POPULATION COMPARISON
          </div>
          <div className="mb-10 text-lg font-bold md:text-xl">
            전남광주통합특별시는 단숨에{" "}
            <span className={category.color.accent}>전국 4위권 광역시</span>로
            올라섭니다.
          </div>
          <div className="space-y-4">
            {metroPopulation.map((m, i) => {
              const max = Math.max(...metroPopulation.map((x) => x.value));
              const pct = (m.value / max) * 100;
              return (
                <div
                  key={m.name}
                  className="grid grid-cols-[7rem_1fr_4rem] items-center gap-4 md:grid-cols-[11rem_1fr_5rem]"
                >
                  <div
                    className={`text-xs font-bold md:text-sm ${
                      m.highlight ? category.color.accent : "opacity-75"
                    }`}
                  >
                    {m.name}
                  </div>
                  <div className="relative h-5 overflow-hidden bg-white/5">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 1.2,
                        delay: 0.1 + i * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{
                        width: `${pct}%`,
                        transformOrigin: "left center",
                      }}
                      className={`absolute inset-y-0 left-0 ${
                        m.highlight
                          ? category.color.accent.replace("text-", "bg-")
                          : "bg-white/25"
                      }`}
                    />
                  </div>
                  <div
                    className={`text-right text-xs font-bold md:text-sm ${
                      m.highlight ? category.color.accent : "opacity-75"
                    }`}
                  >
                    {m.value}만
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 text-xs opacity-50">
            * 2025년 행정안전부 주민등록 인구 통계 기준. 통합특별시 수치는
            광주 + 전남 합계 추정치.
          </div>
        </div>

        {/* Achievements as simple rows */}
        <div className="mt-24 border-t border-white/15 pt-16">
          <div className="mb-10 text-xs font-bold tracking-[0.3em] opacity-60">
            DECENTRALIZATION AGENDA
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {category.achievements.map((a, i) => (
              <motion.article
                key={a.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="border border-white/10 bg-white/[0.03] p-6"
              >
                <div
                  className={`mb-2 text-xs font-bold tracking-widest ${category.color.accent}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-bold leading-tight">{a.title}</h3>
                <p className="mt-2 text-xs opacity-60">{a.lead}</p>
                <p className="mt-3 text-sm leading-relaxed opacity-75">
                  {a.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
