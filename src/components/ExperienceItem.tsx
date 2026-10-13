import Image from "next/image";
import type { Experience } from "@/data";
import Chips from "./Chips";
import Rich from "./Rich";

export default function ExperienceItem({ exp }: { exp: Experience }) {
  return (
    <article className="group/exp grid gap-4 border-t border-border py-10 md:grid-cols-[200px_1fr] md:gap-10"
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
          {exp.bullets.map((b) => (
            <li
              key={b}
              className="relative pl-5 text-[15px] leading-relaxed text-muted before:absolute before:left-0 before:top-[0.75em] before:h-0.5 before:w-2.5 before:rounded-full before:bg-cf-300"
            >
              <Rich text={b} />
            </li>
          ))}
        </ul>

        <Chips items={exp.stack} className="mt-5" />
      </div>
    </article>
  );
}
