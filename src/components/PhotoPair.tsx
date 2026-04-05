"use client";

import { motion } from "framer-motion";

type Photo = {
  src: string;
  alt: string;
  caption?: string;
  objectPosition?: string;
};

type Props = {
  photos: [Photo, Photo];
  accent: string;
  credit?: string;
  className?: string;
};

/**
 * Two-photo asymmetric pair: a wider hero shot (60%) + a narrower detail
 * shot (40%) on desktop, stacked on mobile. Shares the credit line.
 */
export default function PhotoPair({ photos, accent, credit, className = "" }: Props) {
  return (
    <div className={`grid gap-3 md:grid-cols-5 ${className}`}>
      {photos.map((p, i) => (
        <motion.figure
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.8,
            delay: i * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`relative aspect-[4/3] overflow-hidden border border-current/20 md:aspect-auto md:h-[22rem] ${
            i === 0 ? "md:col-span-3" : "md:col-span-2"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.src}
            alt={p.alt}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: p.objectPosition ?? "center" }}
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" />
          {p.caption && (
            <figcaption
              className={`pointer-events-none absolute bottom-3 left-3 right-3 text-[11px] font-bold tracking-[0.2em] ${accent}`}
            >
              {p.caption}
            </figcaption>
          )}
        </motion.figure>
      ))}
      {credit && (
        <div className="col-span-full mt-1 text-right text-[10px] tracking-wider opacity-50">
          {credit}
        </div>
      )}
    </div>
  );
}
