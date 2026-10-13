"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_SECTIONS, SITE } from "@/data";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? el.scrollTop / max : 0})`;
      }
      setScrolled(el.scrollTop > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const s of NAV_SECTIONS) {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-border bg-bg/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-fg focus:px-3 focus:py-1.5 focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>

      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-mono text-[13px] font-medium tracking-tight text-fg">
          kyle<span className="text-accent">.</span>wong
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_SECTIONS.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={active === s.id ? "true" : undefined}
                className={`rounded-md px-3 py-1.5 text-[13px] transition-colors ${
                  active === s.id ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                <span className="mr-1.5 font-mono text-[11px] text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={SITE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-8 items-center rounded-md bg-fg px-3 text-[13px] font-medium text-bg transition-opacity hover:opacity-85 sm:inline-flex"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Menu"
            className="grid size-8 place-items-center rounded-md border border-border text-muted md:hidden"
          >
            <svg className="size-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
              {open ? (
                <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
              ) : (
                <path d="M2.5 5h11M2.5 11h11" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="mx-auto max-w-6xl px-5 pb-4 md:hidden">
          {NAV_SECTIONS.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 border-t border-border py-3 text-sm text-fg"
              >
                <span className="font-mono text-[11px] text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={SITE.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-baseline gap-3 border-t border-border py-3 text-sm text-accent"
            >
              <span className="font-mono text-[11px] text-subtle">PDF</span>
              Resume
            </a>
          </li>
        </ul>
      )}

      <div
        ref={progressRef}
        aria-hidden="true"
        className="absolute bottom-[-1px] left-0 h-px w-full origin-left bg-accent"
        style={{ transform: "scaleX(0)" }}
      />
    </header>
  );
}
