"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { categories, type Achievement, type Category } from "@/data/achievements";

type Hit = {
  achievement: Achievement;
  category: Category;
  matchField: "title" | "lead" | "description" | "impact";
};

function buildIndex(): { achievement: Achievement; category: Category }[] {
  const rows: { achievement: Achievement; category: Category }[] = [];
  for (const c of categories) {
    for (const a of c.achievements) {
      rows.push({ achievement: a, category: c });
    }
  }
  return rows;
}

function scoreHit(a: Achievement, q: string): Hit["matchField"] | null {
  const lq = q.toLowerCase();
  if (a.title.toLowerCase().includes(lq)) return "title";
  if (a.lead.toLowerCase().includes(lq)) return "lead";
  if (a.description.toLowerCase().includes(lq)) return "description";
  if (a.impact?.toLowerCase().includes(lq)) return "impact";
  return null;
}

function highlight(text: string, query: string): React.ReactNode {
  if (!query) return text;
  const i = text.toLowerCase().indexOf(query.toLowerCase());
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <mark className="bg-amber-300/30 text-amber-200 px-0.5">
        {text.slice(i, i + query.length)}
      </mark>
      {text.slice(i + query.length)}
    </>
  );
}

export default function SearchOverlay() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const index = useMemo(buildIndex, []);

  const hits: Hit[] = useMemo(() => {
    const q = query.trim();
    if (!q) return [];
    const results: Hit[] = [];
    for (const row of index) {
      const field = scoreHit(row.achievement, q);
      if (field) {
        results.push({
          achievement: row.achievement,
          category: row.category,
          matchField: field,
        });
      }
    }
    return results.slice(0, 30);
  }, [index, query]);

  // Open on Cmd/Ctrl+K, close on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        setOpen(false);
      } else if (e.key === "/" && !open) {
        const target = e.target as HTMLElement | null;
        if (
          target &&
          (target.tagName === "INPUT" ||
            target.tagName === "TEXTAREA" ||
            target.isContentEditable)
        ) {
          return;
        }
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Floating trigger button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="성과 검색 (단축키: / 또는 Cmd+K)"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-4 py-3 text-xs font-bold tracking-widest text-white/80 backdrop-blur-md transition hover:border-amber-300/60 hover:text-amber-300 md:bottom-8 md:right-8"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span className="hidden md:inline">성과 검색</span>
        <kbd className="hidden rounded border border-white/20 px-1.5 py-0.5 text-[9px] md:inline">
          /
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md"
              aria-hidden
            />
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="성과 검색"
              className="fixed left-1/2 top-[8%] z-[70] flex max-h-[84vh] w-[92vw] max-w-2xl -translate-x-1/2 flex-col overflow-hidden rounded-lg border border-white/10 bg-[#0a0d17] text-white shadow-2xl"
            >
              {/* Input */}
              <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white/40"
                  aria-hidden
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="키워드로 성과 검색 · 예: 경찰국, 15초, 320만"
                  className="flex-1 bg-transparent text-base outline-none placeholder:text-white/30 md:text-lg"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="닫기"
                  className="flex h-8 w-8 items-center justify-center rounded border border-white/15 text-xs text-white/50 transition hover:border-white/40 hover:text-white"
                >
                  Esc
                </button>
              </div>

              {/* Results */}
              <div className="flex-1 overflow-y-auto">
                {!query.trim() && (
                  <div className="px-5 py-10 text-center text-sm text-white/40">
                    키워드를 입력하면 제목·설명·임팩트를 모두 검색합니다.
                    <div className="mt-3 flex flex-wrap justify-center gap-2">
                      {["경찰국", "민생회복", "15초", "통합특별시", "AI"].map(
                        (t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setQuery(t)}
                            className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/60 transition hover:border-amber-300 hover:text-amber-300"
                          >
                            {t}
                          </button>
                        ),
                      )}
                    </div>
                  </div>
                )}

                {query.trim() && hits.length === 0 && (
                  <div className="px-5 py-10 text-center text-sm text-white/40">
                    <span className="text-white/60">&ldquo;{query}&rdquo;</span>{" "}
                    에 대한 결과가 없습니다
                  </div>
                )}

                {hits.length > 0 && (
                  <ul className="divide-y divide-white/5">
                    {hits.map((h, i) => (
                      <li key={`${h.category.id}-${h.achievement.id}-${i}`}>
                        <a
                          href={`#${h.category.id}`}
                          onClick={() => setOpen(false)}
                          className="group block px-5 py-4 transition hover:bg-white/[0.04]"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`text-[10px] font-bold tracking-[0.2em] ${h.category.color.accent}`}
                            >
                              {h.category.badge}
                            </div>
                            <div className="text-[10px] uppercase tracking-widest opacity-40">
                              {h.matchField}
                            </div>
                          </div>
                          <div className="mt-1.5 text-base font-bold leading-snug">
                            {highlight(h.achievement.title, query)}
                          </div>
                          <div className="mt-1 text-xs opacity-60">
                            {highlight(h.achievement.lead, query)}
                          </div>
                          {h.matchField === "description" && (
                            <div className="mt-1.5 line-clamp-2 text-xs opacity-50">
                              {highlight(h.achievement.description, query)}
                            </div>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Footer hint */}
              <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 text-[10px] tracking-widest text-white/30">
                <div>
                  <kbd className="rounded border border-white/20 px-1.5 py-0.5">
                    ↵
                  </kbd>{" "}
                  이동
                </div>
                <div>
                  <kbd className="rounded border border-white/20 px-1.5 py-0.5">
                    Esc
                  </kbd>{" "}
                  닫기
                </div>
                <div>
                  {hits.length > 0 ? `${hits.length} results` : ""}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
