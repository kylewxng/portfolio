"use client";

import Image from "next/image";
import type { Project } from "@/data";
import Chips from "./Chips";
import Rich from "./Rich";
import Spotlight from "./Spotlight";
import { useDimmed } from "./Lens";
import { ArrowUpRight } from "./icons";

export default function ProjectCard({ project }: { project: Project }) {
  const phone = project.imageKind === "phone";
  const dimmed = useDimmed(project.tracks);

  return (
    <Spotlight
      data-dim={dimmed}
      className="lens-item group h-full overflow-hidden rounded-xl border border-border bg-surface transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-cf-300 hover:shadow-[0_18px_50px_-20px_var(--cf-400)]"
    >
      <article className="flex h-full flex-col">
        <div className="relative aspect-16/10 overflow-hidden border-b border-border bg-surface-2">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 768px) 560px, 100vw"
            className={
              phone
                ? "object-contain py-5 transition-transform duration-700 group-hover:scale-[1.04]"
                : "object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
            }
          />
          {project.award && (
            <span className="absolute left-3 top-3 z-2 rounded-full bg-cf-400 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-widest text-white shadow-[0_4px_14px_-4px_var(--cf-400)]">
              {project.award}
            </span>
          )}
        </div>

        <div className="relative z-2 flex flex-1 flex-col p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-subtle">
            {project.org} · {project.year}
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-fg transition-colors group-hover:text-accent">
            {project.title}
          </h3>
          <p className="text-[15px] text-muted">{project.tagline}</p>

          <p className="mt-4 text-[14px] leading-relaxed text-muted">{project.summary}</p>

          <ul className="mt-4 space-y-1.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-[14px] leading-relaxed text-muted">
                <span className="mt-[0.6em] size-1 shrink-0 rounded-full bg-cornflower" aria-hidden="true" />
                <span>
                  <Rich text={h} />
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-6">
            <Chips items={project.stack} />
            {project.links && (
              <div className="mt-5 flex gap-4 border-t border-border pt-4">
                {project.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1 text-[13px] font-medium text-accent hover:underline hover:underline-offset-4"
                  >
                    {l.label}
                    <ArrowUpRight className="size-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    </Spotlight>
  );
}
