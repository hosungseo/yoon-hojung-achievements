"use client";

import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section className="relative overflow-hidden bg-[#faf7f0] py-32 md:py-48">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-[clamp(1.75rem,4.5vw,3.75rem)] font-black leading-[1.15] tracking-tight text-slate-900 text-balance"
        >
          <span className="text-[#c8102e]">“</span>
          국민의 삶에 플러스가 되는 정부,
          <br />
          지방과 현장에서 답을 찾는 정부.
          <br />
          그것이 우리가 만들어야 할{" "}
          <span className="text-[#c8102e]">국민주권 정부</span>입니다.
          <span className="text-[#c8102e]">”</span>
        </motion.blockquote>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-sm font-bold uppercase tracking-[0.3em] text-slate-500"
        >
          — 윤호중 · 행정안전부 장관
        </motion.div>
      </div>
    </section>
  );
}
