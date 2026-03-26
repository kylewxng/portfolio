"use client";

import FadeIn from "./FadeIn";

interface SectionHeaderProps {
  num: string;
  label: string;
  title: string;
}

export default function SectionHeader({ num, label, title }: SectionHeaderProps) {
  return (
    <FadeIn>
      <div className="flex items-baseline gap-4 mb-3">
        <span className="text-xs text-[#0078D4] tracking-[0.2em] font-semibold">
          {num}
        </span>
        <div className="w-10 h-px bg-[#0078D4]" />
        <span className="text-xs text-[#9BA8B4] tracking-[0.15em] uppercase font-medium">
          {label}
        </span>
      </div>
      <h2 className="text-[clamp(36px,5vw,56px)] font-bold tracking-tight mb-14 text-[#0A1628]">
        {title}
      </h2>
    </FadeIn>
  );
}
