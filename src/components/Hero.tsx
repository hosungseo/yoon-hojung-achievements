"use client";

import { motion } from "framer-motion";
import { heroStats } from "@/data/achievements";
import CountUp from "./CountUp";
import ImageSlot from "./ImageSlot";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a1020] text-white grain">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1020] via-[#0f1b3d] to-[#1a0f2e]" />

      {/* Radial glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute left-1/2 top-1/3 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(251,191,36,0.18) 0%, rgba(251,191,36,0.05) 35%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(16)].map((_, i) => {
          const left = (i * 137) % 100;
          const top = (i * 79) % 100;
          const duration = 8 + (i % 5) * 2;
          const delay = (i * 0.4) % 4;
          return (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-amber-300/60"
              style={{ left: `${left}%`, top: `${top}%` }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Portrait placeholder (desktop only) */}
      <div className="pointer-events-none absolute right-12 top-1/2 z-[5] hidden w-[280px] -translate-y-1/2 text-amber-300/90 lg:block xl:right-20 xl:w-[320px]">
        <ImageSlot
          variant="portrait"
          label="MINISTER PORTRAIT"
          caption="장관 공식 포트레이트 · 흑백 예정"
          accent="text-amber-300"
        />
      </div>

      {/* Diagonal accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 top-[35%] h-px w-full origin-left bg-gradient-to-r from-transparent via-amber-300/40 to-transparent"
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
            77년 만의 변화,
            <br />
            <span className="text-amber-300">윤호중</span>의 기록.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 max-w-3xl text-lg text-white/75 md:text-xl"
          >
            검찰청 77년 만의 폐지 · 1호 통합특별시 · 9조원 민생회복 · AI 민주정부.
            <br className="hidden md:inline" />
            &ldquo;국민 삶에 플러스, 행복안전부&rdquo; — 제도로 남긴 약속을 기록합니다.
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
              <CountUp
                value={s.value}
                className="text-display text-5xl text-amber-300 md:text-6xl"
              />
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
