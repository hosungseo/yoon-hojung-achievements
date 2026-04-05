"use client";

import { motion } from "framer-motion";
import { categories } from "@/data/achievements";

export default function ScrollNav() {
  return (
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
              <span className="uppercase">{String(c.order).padStart(2, "0")}</span>
              <span className="hidden opacity-0 transition-opacity group-hover:opacity-100 xl:inline-block">
                {c.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
