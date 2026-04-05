"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  value: string;
  duration?: number;
  className?: string;
};

type Parsed = {
  target: number;
  prefix: string;
  suffix: string;
  decimals: number;
  useComma: boolean;
};

function parse(value: string): Parsed | null {
  const match = value.match(/^([^\d\-+]*)([+-]?[\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  const useComma = numStr.includes(",");
  const clean = numStr.replace(/,/g, "");
  const decimals = clean.includes(".") ? clean.split(".")[1].length : 0;
  const target = parseFloat(clean);
  if (Number.isNaN(target)) return null;
  return { target, prefix, suffix, decimals, useComma };
}

function format(n: number, decimals: number, useComma: boolean) {
  const fixed = n.toFixed(decimals);
  if (!useComma) return fixed;
  const [int, dec] = fixed.split(".");
  const withCommas = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return dec ? `${withCommas}.${dec}` : withCommas;
}

/**
 * Animated count-up that parses strings like "4,900만", "9조원+", "1.3%", "320만", "77".
 * Falls back to rendering the raw string if the format cannot be parsed.
 */
export default function CountUp({ value, duration = 1.6, className = "" }: Props) {
  const parsed = useMemo(() => parse(value), [value]);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const initial = parsed
    ? `${parsed.prefix}${format(0, parsed.decimals, parsed.useComma)}${parsed.suffix}`
    : value;
  const [display, setDisplay] = useState(initial);

  useEffect(() => {
    if (!parsed || !inView) return;
    const controls = animate(0, parsed.target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        setDisplay(
          `${parsed.prefix}${format(v, parsed.decimals, parsed.useComma)}${parsed.suffix}`,
        );
      },
    });
    return () => controls.stop();
  }, [inView, parsed, duration]);

  return (
    <span ref={ref} className={className}>
      {parsed ? display : value}
    </span>
  );
}
