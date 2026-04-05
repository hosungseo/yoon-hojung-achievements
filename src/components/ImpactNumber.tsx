"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  number: string;
  unit?: string;
  caption: string;
  subcaption?: string;
  bg?: string;
  accent?: string;
};

/**
 * Full-screen intercept section between categories.
 * Single giant number, minimal text.
 */
export default function ImpactNumber({
  number,
  unit,
  caption,
  subcaption,
  bg = "bg-black",
  accent = "text-amber-300",
}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section
      ref={ref}
      className={`${bg} relative overflow-hidden text-white`}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />
      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-6 py-32 text-center md:px-12 md:py-48">
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-baseline justify-center gap-3"
        >
          <span
            className={`text-display text-[clamp(6rem,22vw,18rem)] leading-[0.85] ${accent}`}
          >
            {number}
          </span>
          {unit && (
            <span className="text-[clamp(2rem,6vw,5rem)] font-black text-white/70">
              {unit}
            </span>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10 max-w-3xl"
        >
          <p className="text-2xl font-bold leading-tight md:text-4xl">
            {caption}
          </p>
          {subcaption && (
            <p className="mt-4 text-sm tracking-widest text-white/50 md:text-base">
              {subcaption}
            </p>
          )}
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.7 }}
          className={`mt-12 h-px w-24 origin-center ${accent.replace("text-", "bg-")}`}
        />
      </div>
    </section>
  );
}
