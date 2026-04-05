"use client";

import { motion } from "framer-motion";
import type { Category } from "@/data/achievements";
import CountUp from "@/components/CountUp";
import ImageSlot from "@/components/ImageSlot";
import { asset } from "@/lib/asset";

type Props = { category: Category };

const chatScript = [
  { role: "user", text: "주민등록등본 한 통 떼 줘", delay: 0 },
  { role: "ai", text: "네, 주민등록등본을 발급해 드릴게요. 본인 인증만 해주시면 바로 처리됩니다.", delay: 0.8 },
  { role: "user", text: "응", delay: 1.8 },
  { role: "ai", text: "✓ 발급 완료 (3초)\n📄 주민등록등본.pdf", delay: 2.6, highlight: true },
];

export default function CategoryPhoneDemo({ category }: Props) {
  return (
    <section
      id={category.id}
      className={`relative overflow-hidden ${category.color.bg} ${category.color.text}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-32 md:px-12 md:py-40">
        {/* Header image slot */}
        <div className={`mb-16 ${category.color.accent}`}>
          <ImageSlot
            label="04 · AI DEMOCRATIC GOV"
            caption="AI 딥페이크 탐지 분석모델 시연회"
            accent={category.color.accent}
            src={asset("/photos/04-ai-democracy.jpg")}
            alt="AI 딥페이크 탐지 분석모델 시연회"
            credit="출처 : 행정안전부 · 정책브리핑"
          />
        </div>

        <div className="grid gap-16 md:grid-cols-2 md:items-center md:gap-20">
          {/* Left: Text */}
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
            <h2 className="text-headline text-[clamp(2rem,5.5vw,4.5rem)] text-balance">
              {category.tagline}
            </h2>
            <p className="mt-6 text-base leading-relaxed opacity-75 md:text-lg">
              {category.intro}
            </p>

            <motion.div
              className="mt-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <div
                className={`relative mx-0 h-48 w-48 md:h-64 md:w-64 ${category.color.accent}`}
              >
                <svg viewBox="-60 -60 120 120" className="h-full w-full">
                  {/* Background ring */}
                  <circle
                    cx="0"
                    cy="0"
                    r="52"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    opacity="0.18"
                  />
                  {/* Progress ring */}
                  <motion.circle
                    cx="0"
                    cy="0"
                    r="52"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 52}
                    variants={{
                      hidden: { strokeDashoffset: 2 * Math.PI * 52 },
                      visible: {
                        strokeDashoffset: 0,
                        transition: {
                          duration: 1.8,
                          ease: [0.16, 1, 0.3, 1],
                        },
                      },
                    }}
                    transform="rotate(-90)"
                  />
                  {/* Hour tick marks */}
                  {[...Array(12)].map((_, i) => {
                    const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
                    const x1 = Math.cos(angle) * 44;
                    const y1 = Math.sin(angle) * 44;
                    const x2 = Math.cos(angle) * 49;
                    const y2 = Math.sin(angle) * 49;
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="currentColor"
                        strokeWidth="2"
                        opacity="0.5"
                      />
                    );
                  })}
                </svg>
                {/* Number overlay inside the ring */}
                <div className="pointer-events-none absolute inset-0 flex items-baseline justify-center">
                  <div className="flex items-baseline gap-1">
                    <CountUp
                      value="15"
                      duration={1.8}
                      className={`text-display text-[clamp(3.5rem,12vw,6rem)] leading-none ${category.color.accent}`}
                    />
                    <div className="text-xl font-bold md:text-2xl">초</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="mt-2 text-sm opacity-60">
              AI 국민비서 · 주민등록등본 발급 소요시간
            </div>
          </motion.div>

          {/* Right: Phone mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone frame */}
              <div className="relative h-[600px] w-[300px] rounded-[3rem] border-[8px] border-white/20 bg-[#0a0a0f] p-3 shadow-2xl">
                {/* Notch */}
                <div className="absolute left-1/2 top-1 z-10 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-black" />
                {/* Screen */}
                <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#0b1220] to-[#0a0a14] p-4 pt-10">
                  {/* Top bar */}
                  <div className="mb-4 flex items-center justify-between text-[10px] font-bold text-white/70">
                    <span>9:41</span>
                    <span>AI 국민비서</span>
                    <span>●●●</span>
                  </div>

                  {/* Chat */}
                  <div className="space-y-3">
                    {chatScript.map((m, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + m.delay,
                          ease: "easeOut",
                        }}
                        className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] whitespace-pre-line rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                            m.role === "user"
                              ? "rounded-br-sm bg-amber-400 text-black font-semibold"
                              : m.highlight
                                ? `rounded-bl-sm border border-current ${category.color.accent} font-semibold`
                                : "rounded-bl-sm bg-white/10 text-white/90"
                          }`}
                        >
                          {m.text}
                        </div>
                      </motion.div>
                    ))}

                    {/* Typing indicator (flair) */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: [0, 1, 0] }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 3.4, repeat: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex gap-1 rounded-2xl bg-white/10 px-3 py-2">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/60 [animation-delay:-0.3s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/60 [animation-delay:-0.15s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/60" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Input bar (decorative) */}
                  <div className="absolute inset-x-4 bottom-4 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[10px] text-white/40">
                    <span>메시지 입력…</span>
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className={`absolute -right-16 top-8 rounded-full border px-4 py-2 text-xs font-bold ${category.color.accent} ${category.color.accent.replace("text-", "border-")}`}
              >
                네이버 · 카카오
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className={`absolute -left-12 bottom-20 rounded-full border px-4 py-2 text-xs font-bold ${category.color.accent} ${category.color.accent.replace("text-", "border-")}`}
              >
                2026.03.09
              </motion.div>
            </div>
          </div>
        </div>

        {/* Achievement cards */}
        <div className="mt-24 border-t border-white/15 pt-16">
          <div className="mb-10 text-xs font-bold tracking-[0.3em] opacity-60">
            AI GOV AGENDA
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {category.achievements.map((a, i) => (
              <motion.article
                key={a.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
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
