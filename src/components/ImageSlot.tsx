"use client";

import { motion } from "framer-motion";

type Props = {
  label: string;
  caption: string;
  accent?: string;
  aspect?: string;
  variant?: "strip" | "portrait" | "square";
  className?: string;
  src?: string;
  alt?: string;
  credit?: string;
  objectPosition?: string;
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
  src,
  alt,
  credit,
  objectPosition = "center",
}: Props) {
  const aspectClass =
    aspect ??
    (variant === "portrait"
      ? "aspect-[3/4]"
      : variant === "square"
        ? "aspect-square"
        : "aspect-[16/5]");

  // Real image mode
  if (src) {
    return (
      <motion.figure
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`relative w-full overflow-hidden border border-current/20 ${aspectClass} ${className}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt ?? caption}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition }}
          loading="lazy"
        />
        {/* Subtle gradient for legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
        {/* Corner crosshairs */}
        <div className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-white/50" />
        <div className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-white/50" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-white/50" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-white/50" />
        {/* Label */}
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 text-white">
          <div
            className={`text-[10px] font-bold tracking-[0.3em] ${accent}`}
          >
            {label}
          </div>
          {credit && (
            <div className="text-[10px] tracking-wider text-white/70">
              {credit}
            </div>
          )}
        </figcaption>
      </motion.figure>
    );
  }

  // Placeholder mode
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full overflow-hidden border border-current/20 ${aspectClass} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, currentColor 0, currentColor 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          background:
            "radial-gradient(ellipse at center, currentColor 0%, transparent 70%)",
        }}
      />
      <div className="absolute left-3 top-3 h-3 w-3 border-l border-t border-current/40" />
      <div className="absolute right-3 top-3 h-3 w-3 border-r border-t border-current/40" />
      <div className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-current/40" />
      <div className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-current/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className={`text-[10px] font-bold tracking-[0.35em] ${accent}`}>
          {label}
        </div>
        <div className="mt-2 max-w-[80%] text-xs leading-relaxed opacity-50">
          {caption}
        </div>
      </div>
    </motion.div>
  );
}
