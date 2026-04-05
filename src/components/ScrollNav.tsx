"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { categories } from "@/data/achievements";

export default function ScrollNav() {
  const [open, setOpen] = useState(false);

  // Close drawer on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when drawer open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Desktop rail — lg and up */}
      <motion.nav
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
        aria-label="섹션 네비게이션"
      >
        <ul className="flex flex-col gap-3 text-[11px] font-medium tracking-widest">
          {categories.map((c) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                className="group flex items-center gap-3 text-white/50 transition hover:text-white"
              >
                <span className="h-px w-4 bg-current transition-all group-hover:w-8" />
                <span className="uppercase">
                  {String(c.order).padStart(2, "0")}
                </span>
                <span className="hidden opacity-0 transition-opacity group-hover:opacity-100 xl:inline-block">
                  {c.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Mobile floating button — below lg */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="섹션 메뉴 열기"
        aria-expanded={open}
        className="fixed right-5 top-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:bg-black/80 lg:hidden"
      >
        <span className="sr-only">메뉴</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </svg>
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden"
              aria-hidden
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="섹션 네비게이션"
              className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-[#0a0d17] text-white lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <div className="text-xs font-bold tracking-[0.3em] text-amber-300">
                  MOIS · 2026
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="메뉴 닫기"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:bg-white/10"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden
                  >
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="6" y1="18" x2="18" y2="6" />
                  </svg>
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-6 py-6">
                <div className="mb-4 text-[10px] font-bold tracking-[0.3em] text-white/40">
                  CATEGORIES
                </div>
                <ul className="flex flex-col gap-1">
                  {categories.map((c) => (
                    <li key={c.id}>
                      <a
                        href={`#${c.id}`}
                        onClick={() => setOpen(false)}
                        className={`flex items-baseline gap-4 border-l-2 border-white/10 px-4 py-3 transition hover:border-amber-300 hover:bg-white/[0.04]`}
                      >
                        <span
                          className={`text-xs font-bold tracking-widest ${c.color.accent}`}
                        >
                          {String(c.order).padStart(2, "0")}
                        </span>
                        <span className="text-lg font-bold">{c.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 mb-4 text-[10px] font-bold tracking-[0.3em] text-white/40">
                  MORE
                </div>
                <ul className="flex flex-col gap-1">
                  <li>
                    <a
                      href="#timeline"
                      onClick={() => setOpen(false)}
                      className="block border-l-2 border-white/10 px-4 py-3 transition hover:border-amber-300 hover:bg-white/[0.04]"
                    >
                      <span className="text-base font-semibold">
                        추진 연혁
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#achievements"
                      onClick={() => setOpen(false)}
                      className="block border-l-2 border-white/10 px-4 py-3 transition hover:border-amber-300 hover:bg-white/[0.04]"
                    >
                      <span className="text-base font-semibold">
                        주요 성과
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="border-t border-white/10 px-6 py-4 text-[10px] opacity-40">
                Unofficial Archive · Not an official website
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
