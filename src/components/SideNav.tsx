"use client";

import { SECTIONS } from "@/data";

interface SideNavProps {
  active: string;
  onNav: (section: string) => void;
}

export default function SideNav({ active, onNav }: SideNavProps) {
  return (
    <nav className="fixed right-7 top-1/2 -translate-y-1/2 flex flex-col gap-3.5 z-[100] items-end max-md:hidden">
      {SECTIONS.map((s) => (
        <button
          key={s}
          onClick={() => onNav(s)}
          className="flex items-center gap-2.5 bg-transparent border-none cursor-pointer p-0"
        >
          <span
            className="text-[10px] uppercase tracking-widest font-semibold transition-colors duration-300"
            style={{ color: active === s ? "#0078D4" : "transparent" }}
          >
            {s}
          </span>
          <div
            className="h-2 rounded transition-all duration-500"
            style={{
              width: active === s ? 32 : 8,
              background:
                active === s
                  ? "linear-gradient(90deg, #0078D4, #00A6FB)"
                  : "#CBD5E0",
              boxShadow:
                active === s ? "0 0 12px rgba(0,120,212,0.3)" : "none",
              transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
            }}
          />
        </button>
      ))}
    </nav>
  );
}
