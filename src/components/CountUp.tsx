"use client";

import { useEffect, useRef, useState } from "react";
import type { Metric } from "@/data";

const DURATION = 1400;

/** Counts a metric up from zero the first time it scrolls into view. */
export default function CountUp({ metric }: { metric: Metric }) {
  const { prefix = "", value, decimals = 0, suffix = "" } = metric;
  const ref = useRef<HTMLSpanElement>(null);
  // Server render shows the final value so it reads correctly without JS.
  const [current, setCurrent] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setCurrent(0);
    let frame = 0;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION, 1);
          const eased = 1 - Math.pow(1 - t, 4);
          setCurrent(value * eased);
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {current.toFixed(decimals)}
      {suffix}
    </span>
  );
}
