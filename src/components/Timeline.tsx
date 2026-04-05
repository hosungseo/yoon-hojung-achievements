"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    date: "2026",
    title: "정부조직 개편안 추진",
    desc: "국민주권 정부의 성과 창출을 제도로 뒷받침",
  },
  {
    date: "2026",
    title: "경찰국 폐지 · 중대재해수사청(안)",
    desc: "검·경 본래 역할 회복을 위한 제도 개편",
  },
  {
    date: "2026",
    title: "AI 국민비서 · 정부24",
    desc: "세계 최고 AI 민주정부 실현의 첫 단계",
  },
  {
    date: "2026",
    title: "중앙지방협력회의 개편",
    desc: "지방을 대등한 국정 파트너로",
  },
  {
    date: "2026",
    title: "사회연대경제기본법 제정",
    desc: "지방소멸 해법의 제도적 토대",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative overflow-hidden bg-[#0b0f19] py-32 text-white md:py-48"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="mb-6 text-xs font-bold tracking-[0.3em] text-amber-300">
            CHRONOLOGY
          </div>
          <h2 className="text-headline text-[clamp(2.25rem,6vw,5rem)] text-balance">
            제도로 남는 성과
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative flex gap-8 ${
                  i % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-amber-300 ring-4 ring-amber-300/20 md:left-1/2" />

                {/* Content */}
                <div
                  className={`ml-12 flex-1 md:ml-0 md:max-w-md ${
                    i % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <div className="text-xs font-bold tracking-widest text-amber-300">
                    {m.date}
                  </div>
                  <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-white/60">{m.desc}</p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
