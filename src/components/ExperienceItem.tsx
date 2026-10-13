"use client";

import Image from "next/image";
import type { Experience } from "@/data";
import Chips from "./Chips";
import Rich from "./Rich";
import { useLens } from "./Lens";

export default function ExperienceItem({ exp }: { exp: Experience }) {
  const { lens } = useLens();
  const matches = (tracks: string[]) => lens === "all" || tracks.includes(lens);
  const roleDimmed = !exp.bullets.some((b) => matches(b.tracks));

  return (
    <article
      data-dim={roleDimmed}
      className="lens-item group/exp grid gap-4 border-t border-border py-10 md:grid-cols-[200px_1fr] md:gap-10"
    >
      <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-subtle">
        <p className="text-muted transition-colors group-hover/exp:text-accent">
          {exp.start} <span className="text-subtle">→</span> {exp.end}
        </p>
        <p className="mt-1.5">{exp.location}</p>
      </div>

      <div>
        <header className="flex items-start gap-4">
          {exp.logo && (
            <Image
              src={exp.logo}
              alt=""
              width={40}
              height={40}
              className="size-10 shrink-0 rounded-lg border border-border bg-white object-contain transition-transform duration-300 group-hover/exp:-rotate-3 group-hover/exp:scale-105"
            />
          )}
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-fg">{exp.role}</h3>
            <p className="text-[15px] text-muted">{exp.company}</p>
            {exp.context && <p className="mt-0.5 text-[13px] text-subtle">{exp.context}</p>}
          </div>
        </header>

        <p className="mt-5 text-[15px] text-fg">{exp.summary}</p>

        <ul className="mt-3 space-y-2.5">
          {exp.bullets.map((b) => {
            const hit = matches(b.tracks);
            const highlighted = lens !== "all" && hit;
            return (
              <li
                key={b.text}
                data-dim={!hit}
                className={`lens-item relative rounded-md py-0.5 pl-5 text-[15px] leading-relaxed text-muted transition-colors before:absolute before:left-0 before:top-[0.85em] before:h-0.5 before:rounded-full before:transition-all before:duration-300 ${
                  highlighted
                    ? "bg-accent-soft pr-2 before:w-3 before:bg-cornflower"
                    : "before:w-2.5 before:bg-border-strong"
                }`}
              >
                <Rich text={b.text} />
              </li>
            );
          })}
        </ul>

        <Chips items={exp.stack} className="mt-5" />
      </div>
    </article>
  );
}
