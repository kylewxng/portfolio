import { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  num: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

export default function Section({ id, num, label, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
          <span className="text-accent">§ {num}</span>
          <span>{label}</span>
          <span className="h-px flex-1 bg-border" />
        </div>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{title}</h2>
        {intro && <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">{intro}</p>}
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}
