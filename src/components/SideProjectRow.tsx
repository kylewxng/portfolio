import Image from "next/image";
import type { SideProject } from "@/data";
import Rich from "./Rich";

export default function SideProjectRow({ project }: { project: SideProject }) {
  return (
    <article className="grid gap-5 border-t border-border py-6 sm:grid-cols-[168px_1fr_auto] sm:items-start">
      <div className="relative aspect-16/10 overflow-hidden rounded-md border border-border bg-surface-2">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="168px"
          className="object-cover object-top"
        />
      </div>
      <div>
        <h4 className="font-semibold tracking-tight text-fg">{project.title}</h4>
        <p className="mt-1 text-[14px] leading-relaxed text-muted">
          <Rich text={project.summary} />
        </p>
        <p className="mt-2 font-mono text-[11px] text-subtle">{project.stack.join(" · ")}</p>
      </div>
      <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-subtle sm:text-right">
        <p>{project.year}</p>
        {project.award && <p className="mt-1 text-accent">{project.award}</p>}
      </div>
    </article>
  );
}
