"use client";

import { motion } from "framer-motion";

type Props = {
  label: string;
  caption: string;
  accent?: string;
  aspect?: string;
  variant?: "strip" | "portrait" | "square";
  className?: string;
};

/**
 * Placeholder for future photography. Renders a subtle monochrome frame with
 * a label so editors know what content is expected. Uses the parent text
 * color via `currentColor` so it blends with each section's palette.
 */
export default function ImageSlot({
  label,
  caption,
  accent = "text-white/70",
  aspect,
  variant = "strip",
  className = "",
}: Props) {
  const aspectClass =
    aspect ??
    (variant === "portrait"
      ? "aspect-[3/4]"
      : variant === "square"
        ? "aspect-square"
        : "aspect-[16/5]");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full overflow-hidden border border-current/20 ${aspectClass} ${className}`}
    >
      {/* Diagonal stripes for "empty slot" hint */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, currentColor 0, currentColor 1px, transparent 1px, transparent 14px)",
        }}
      />
      {/* Subtle vignette */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          background:
            "radial-gradient(ellipse at center, currentColor 0%, transparent 70%)",
        }}
      />

      {/* Corner crosshairs */}
      <div className="absolute left-3 top-3 h-3 w-3 border-l border-t border-current/40" />
      <div className="absolute right-3 top-3 h-3 w-3 border-r border-t border-current/40" />
      <div className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-current/40" />
      <div className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-current/40" />

      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div
          className={`text-[10px] font-bold tracking-[0.35em] ${accent}`}
        >
          {label}
        </div>
        <div className="mt-2 max-w-[80%] text-xs leading-relaxed opacity-50">
          {caption}
        </div>
      </div>
    </motion.div>
  );
}
