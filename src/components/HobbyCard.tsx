import Image from "next/image";
import type { Hobby } from "@/data";
import Spotlight from "./Spotlight";

/** Line drawings shown in place of a photo, in the site's spec-sheet style. */
function Art({ kind }: { kind: Hobby["art"] }) {
  const common = {
    viewBox: "0 0 200 160",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-auto w-3/4 text-cornflower transition-transform duration-700 group-hover:scale-[1.06]",
    "aria-hidden": true,
  };

  if (kind === "court") {
    return (
      <svg {...common}>
        {/* Half court seen from above */}
        <rect x="20" y="20" width="160" height="120" rx="2" opacity="0.5" />
        <rect x="76" y="20" width="48" height="58" />
        <circle cx="100" cy="78" r="24" strokeDasharray="4 5" />
        <path d="M34 20 V44 A66 66 0 0 0 166 44 V20" />
        <path d="M86 26 H114" opacity="0.7" />
        <circle cx="100" cy="32" r="5" />
        <path d="M76 140 A24 24 0 0 1 124 140" opacity="0.5" />
        {/* Ball */}
        <g transform="translate(150 108)" strokeWidth="1.25">
          <circle r="12" />
          <path d="M-12 0 H12 M0 -12 V12" />
          <path d="M-8.5 -8.5 A12 12 0 0 1 -8.5 8.5 M8.5 -8.5 A12 12 0 0 0 8.5 8.5" />
        </g>
      </svg>
    );
  }

  if (kind === "kitchen") {
    return (
      <svg {...common}>
        {/* Pot with steam */}
        <path className="steam" d="M80 52 C74 44 86 38 80 28" opacity="0.7" />
        <path className="steam" d="M100 50 C94 40 106 34 100 22" opacity="0.7" style={{ animationDelay: "0.4s" }} />
        <path className="steam" d="M120 52 C114 44 126 38 120 28" opacity="0.7" style={{ animationDelay: "0.8s" }} />
        <path d="M56 66 H144" />
        <path d="M92 60 H108" strokeWidth="3" />
        <path d="M60 66 V112 A12 12 0 0 0 72 124 H128 A12 12 0 0 0 140 112 V66" />
        <path d="M60 78 H46 M140 78 H154" />
        <path d="M66 96 H134" strokeDasharray="3 6" opacity="0.5" />
        {/* Burner */}
        <path d="M40 136 H160" opacity="0.5" />
        <path d="M76 130 V136 M100 130 V136 M124 130 V136" opacity="0.5" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      {/* Floor plan */}
      <rect x="24" y="24" width="152" height="112" />
      <path d="M96 24 V64 M96 84 V136" />
      <path d="M24 82 H60 M78 82 H96" />
      <path d="M96 100 H140 M158 100 H176" />
      <path d="M60 82 A18 18 0 0 1 78 64" strokeDasharray="2 3" opacity="0.6" />
      <path d="M96 64 A20 20 0 0 1 116 84" strokeDasharray="2 3" opacity="0.6" />
      <path d="M140 100 A18 18 0 0 0 158 118" strokeDasharray="2 3" opacity="0.6" />
      <path d="M40 24 H72" strokeWidth="4" opacity="0.35" />
      <path d="M124 136 H160" strokeWidth="4" opacity="0.35" />
      <path d="M24 146 H176 M24 142 V150 M176 142 V150" opacity="0.5" />
      <rect x="112" y="40" width="44" height="28" rx="3" opacity="0.5" />
    </svg>
  );
}

export default function HobbyCard({ hobby, index }: { hobby: Hobby; index: number }) {
  return (
    <Spotlight className="group h-full overflow-hidden rounded-xl border border-border bg-surface transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-cf-300 hover:shadow-[0_18px_50px_-20px_var(--cf-400)]">
      <figure className="flex h-full flex-col">
        <div
          className={`relative overflow-hidden border-b border-border bg-surface-2 ${
            hobby.image ? "aspect-4/5" : "aspect-4/3 md:aspect-4/5"
          }`}
        >
          {hobby.image ? (
            <Image
              src={hobby.image}
              alt={hobby.alt ?? hobby.title}
              fill
              sizes="(min-width: 768px) 360px, 100vw"
              style={{ objectPosition: hobby.imagePosition }}
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          ) : (
            <div className="hobby-art absolute inset-0 grid place-items-center pt-8">
              <Art kind={hobby.art} />
            </div>
          )}
          <span className="absolute left-3 top-3 z-2 rounded-full border border-border bg-surface/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-subtle backdrop-blur-sm">
            Fig. {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <figcaption className="relative z-2 flex flex-1 flex-col p-5">
          <h3 className="text-lg font-semibold tracking-tight text-fg transition-colors group-hover:text-accent">
            {hobby.title}
          </h3>
          <p className="mt-2 text-[14px] leading-relaxed text-muted">{hobby.blurb}</p>
          <p className="mt-auto pt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
            {hobby.tags.join(" · ")}
          </p>
        </figcaption>
      </figure>
    </Spotlight>
  );
}
