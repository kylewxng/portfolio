import Image from "next/image";
import type { SideProject } from "@/data";
import Rich from "./Rich";
import { ArrowUpRight } from "./icons";

export default function SideProjectRow({ project }: { project: SideProject }) {
  return (
    <article className="group grid gap-5 border-t border-border py-6 sm:grid-cols-[168px_1fr_auto] sm:items-start">
      <div className="relative aspect-16/10 overflow-hidden rounded-md border border-border bg-surface-2 transition-colors group-hover:border-cf-300">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="168px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div>
        <h4 className="font-semibold tracking-tight text-fg transition-colors group-hover:text-accent">
          {project.title}
        </h4>
        <p className="mt-1 text-[14px] leading-relaxed text-muted">
          <Rich text={project.summary} />
        </p>
        <p className="mt-2 font-mono text-[11px] text-subtle">{project.stack.join(" · ")}</p>
      </div>
      <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-subtle sm:text-right">
        <p>{project.year}</p>
        {project.award && <p className="mt-1 text-accent">{project.award}</p>}
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link mt-2 inline-flex items-center gap-1 text-accent hover:underline hover:underline-offset-4"
          >
            Live demo
            <ArrowUpRight className="size-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          </a>
        )}
      </div>
    </article>
  );
}
