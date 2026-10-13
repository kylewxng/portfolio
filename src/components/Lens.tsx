"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { TRACKS, type Track } from "@/data";

type LensValue = Track | "all";

const LensContext = createContext<{ lens: LensValue; setLens: (l: LensValue) => void }>({
  lens: "all",
  setLens: () => {},
});

export function LensProvider({ children }: { children: ReactNode }) {
  const [lens, setLens] = useState<LensValue>("all");
  return <LensContext.Provider value={{ lens, setLens }}>{children}</LensContext.Provider>;
}

export function useLens() {
  return useContext(LensContext);
}

/** True when an item tagged with `tracks` should fade back under the current lens. */
export function useDimmed(tracks: Track[]) {
  const { lens } = useLens();
  return lens !== "all" && !tracks.includes(lens);
}

export function LensControl({ caption }: { caption?: string }) {
  const { lens, setLens } = useLens();

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">View as</span>
      <div
        role="radiogroup"
        aria-label="Highlight work by track"
        className="inline-flex flex-wrap gap-1 rounded-lg border border-border bg-surface p-1"
      >
        {TRACKS.map((t) => {
          const active = lens === t.id;
          return (
            <button
              key={t.id}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setLens(t.id)}
              className={`rounded-md px-3 py-1 text-[13px] font-medium transition-all duration-200 ${
                active
                  ? "bg-cf-400 text-white shadow-[0_1px_8px_-2px_var(--cf-400)]"
                  : "text-muted hover:bg-accent-soft hover:text-fg"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>
      {caption && <span className="text-[13px] text-subtle">{caption}</span>}
    </div>
  );
}
