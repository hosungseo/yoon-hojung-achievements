"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    date: "2025.07.19",
    title: "제5대 행정안전부 장관 취임",
    desc: "첫 공식 일정은 집중호우 중앙재난안전대책본부 회의 주재",
  },
  {
    date: "2025.08.26",
    title: "경찰국 폐지 공포",
    desc: "2022년 8월 신설 이후 3년 만의 정상화",
  },
  {
    date: "2025.09.26",
    title: "국가정보자원관리원 화재",
    desc: "647개 시스템 마비 · 중대본 꾸려 총력 대응",
  },
  {
    date: "2025.12.30",
    title: "국정자원 전면 복구 완료",
    desc: "화재 발생 3개월 만에 647개 시스템 전체 복구",
  },
  {
    date: "2026.01.02",
    title: "정부조직 대개편 시행",
    desc: "기재부 분리 · 기후에너지환경부 신설 · 검찰청 폐지 수순",
  },
  {
    date: "2026.03.09",
    title: "AI 국민비서 시범서비스 개통",
    desc: "판교 · 네이버·카카오 연동 · 등본 발급 15초",
  },
  {
    date: "2026.07.01",
    title: "전남광주통합특별시 출범 (예정)",
    desc: "40년 만의 재결합 · 인구 320만 · 대한민국 1호 통합특별시",
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
