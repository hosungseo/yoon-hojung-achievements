"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type QuoteItem = {
  body: React.ReactNode;
  context: string;
  date?: string;
};

const quotes: QuoteItem[] = [
  {
    body: (
      <>
        민생을 회복하고,
        <br />
        국민께 평온한 일상을
        <br />
        되돌려 드리는 것.
        <br />
        그것이 정부의{" "}
        <span className="text-[#c8102e]">첫 번째 책무</span>입니다.
      </>
    ),
    context: "취임사 중",
    date: "2025.07.25",
  },
  {
    body: (
      <>
        검찰 개혁은 국민과의 약속입니다.
        <br />
        <span className="text-[#c8102e]">결자해지</span>의 마음으로
        <br />
        중대범죄수사청 설치를 추진하겠습니다.
      </>
    ),
    context: "경찰국 폐지·중수청 관련 발언",
    date: "2025.07",
  },
  {
    body: (
      <>
        광주 5·18 정신을 이어
        <br />
        <span className="text-[#c8102e]">지방자치를 더욱 성숙</span>
        <br />
        시켜 나가겠습니다.
      </>
    ),
    context: "5·18 민주묘지 참배 발언",
    date: "2025",
  },
  {
    body: (
      <>
        통합의 성공은
        <br />
        <span className="text-[#c8102e]">특례가 현장에서 제대로</span>
        <br />
        작동하는 데 달려 있습니다.
      </>
    ),
    context: "전남광주통합특별시 출범 준비 합동 워크숍",
    date: "2026",
  },
  {
    body: (
      <>
        갑질은{" "}
        <span className="text-[#c8102e]">반드시 없어져야 할</span>
        <br />
        관행입니다.
      </>
    ),
    context: "국회·부처 조직문화 관련 발언",
    date: "2025",
  },
];

export default function Quote() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, 7000);
    return () => clearInterval(t);
  }, [paused]);

  const current = quotes[index];

  return (
    <section
      className="relative overflow-hidden bg-[#faf7f0] py-32 md:py-48"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <div className="mb-10 text-xs font-bold tracking-[0.3em] text-[#c8102e]">
          MINISTER&apos;S WORDS · {String(index + 1).padStart(2, "0")} /{" "}
          {String(quotes.length).padStart(2, "0")}
        </div>

        <div className="relative min-h-[280px] md:min-h-[360px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(1.75rem,4.5vw,3.75rem)] font-black leading-[1.15] tracking-tight text-slate-900 text-balance"
            >
              <span className="text-[#c8102e]">“</span>
              {current.body}
              <span className="text-[#c8102e]">”</span>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <motion.div
          key={`attr-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-baseline gap-x-4 gap-y-2 text-slate-600"
        >
          <div className="text-sm font-bold uppercase tracking-[0.3em] text-slate-500">
            — 윤호중 · 행정안전부 장관
          </div>
          <div className="text-xs text-slate-500">
            {current.context}
            {current.date ? ` · ${current.date}` : ""}
          </div>
        </motion.div>

        {/* Nav dots */}
        <div className="mt-12 flex items-center gap-3">
          {quotes.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`인용구 ${i + 1}번으로 이동`}
              aria-current={i === index ? "true" : undefined}
              className={`h-1.5 transition-all ${
                i === index
                  ? "w-10 bg-[#c8102e]"
                  : "w-5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % quotes.length)}
            aria-label="다음 인용구"
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-slate-500 transition hover:border-[#c8102e] hover:text-[#c8102e]"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
