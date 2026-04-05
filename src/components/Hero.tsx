"use client";

import { motion } from "framer-motion";
import { heroStats } from "@/data/achievements";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a1020] text-white grain">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1020] via-[#0f1b3d] to-[#1a0f2e]" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-10 md:px-12 md:py-16">
        {/* Top bar */}
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between text-xs md:text-sm"
        >
          <div className="font-bold tracking-widest text-amber-300">
            MOIS · 2026
          </div>
          <div className="hidden items-center gap-6 text-white/60 md:flex">
            <a href="#achievements" className="hover:text-white">
              주요 성과
            </a>
            <a href="#timeline" className="hover:text-white">
              추진 연혁
            </a>
            <a href="#communication" className="hover:text-white">
              현장 소통
            </a>
          </div>
        </motion.header>

        {/* Main headline */}
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300 md:text-base"
          >
            Ministry of the Interior and Safety
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="text-display text-[clamp(2.75rem,9vw,7.5rem)] text-balance"
          >
            국민주권 정부,
            <br />
            <span className="text-amber-300">윤호중</span>의 기록.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 max-w-3xl text-lg text-white/75 md:text-xl"
          >
            정부혁신 · 지방분권 · AI 디지털정부 · 재난안전 · 민생치안.
            <br className="hidden md:inline" />
            제도로 뒷받침한 국민주권 정부의 성과를 기록합니다.
          </motion.p>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 md:grid-cols-4 md:gap-10"
        >
          {heroStats.map((s) => (
            <div key={s.label}>
              <div className="text-display text-5xl text-amber-300 md:text-6xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-white/60 md:text-base">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-10 flex items-center gap-3 text-xs text-white/40"
        >
          <div className="h-px w-10 bg-white/40" />
          <span className="tracking-widest">SCROLL</span>
        </motion.div>
      </div>
    </section>
  );
}
