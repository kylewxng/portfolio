"use client";

import { KeyboardEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { NAV_SECTIONS, PROJECTS, SITE, TRACKS } from "@/data";
import { useLens } from "./Lens";
import { toggleTheme } from "./ThemeToggle";

interface Command {
  id: string;
  group: string;
  label: string;
  hint?: string;
  run: () => void;
}

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
const open = (href: string) => window.open(href, "_blank", "noopener,noreferrer");

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const [isMac, setIsMac] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { setLens } = useLens();

  const flash = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 1800);
  };

  const commands = useMemo<Command[]>(() => {
    const lensLabel = (label: string) => (label === "Everything" ? "Show everything" : `View as ${label}`);
    return [
      ...NAV_SECTIONS.map((s, i) => ({
        id: `go-${s.id}`,
        group: "Go to",
        label: s.label,
        hint: String(i + 1).padStart(2, "0"),
        run: () => go(s.id),
      })),
      ...TRACKS.map((t) => ({
        id: `lens-${t.id}`,
        group: "Lens",
        label: lensLabel(t.label),
        run: () => {
          setLens(t.id);
          go("experience");
        },
      })),
      {
        id: "copy-email",
        group: "Actions",
        label: "Copy email address",
        hint: SITE.email,
        run: () => {
          navigator.clipboard?.writeText(SITE.email).then(() => flash("Email copied"), () => {});
        },
      },
      { id: "theme", group: "Actions", label: "Toggle light / dark", run: toggleTheme },
      { id: "github", group: "Links", label: "GitHub", hint: "kylewxng", run: () => open(SITE.github) },
      { id: "linkedin", group: "Links", label: "LinkedIn", hint: "in/kylewxng", run: () => open(SITE.linkedin) },
      ...PROJECTS.flatMap((p) =>
        (p.links ?? []).map((l) => ({
          id: `${p.id}-${l.label}`,
          group: "Links",
          label: `${p.title}: ${l.label}`,
          run: () => open(l.href),
        })),
      ),
    ];
  }, [setLens]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => `${c.group} ${c.label} ${c.hint ?? ""}`.toLowerCase().includes(q));
  }, [commands, query]);

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setIndex(0);
  }, []);

  const runAt = (i: number) => {
    const cmd = filtered[i];
    if (!cmd) return;
    close();
    // Let the dialog unmount before scrolling or opening links.
    setTimeout(cmd.run, 0);
  };

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform));
    const onKey = (e: globalThis.KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((o) => !o);
      }
    };
    const onOpen = () => setIsOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") close();
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => (i + 1) % Math.max(filtered.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => (i - 1 + filtered.length) % Math.max(filtered.length, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      runAt(index);
    }
  };

  let lastGroup = "";

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-[#0a0c11]/40 px-4 pt-[14vh] backdrop-blur-sm"
          style={{ animation: "fade-in 0.15s ease-out" }}
          onMouseDown={(e) => e.target === e.currentTarget && close()}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Command menu"
            onKeyDown={onKeyDown}
            className="w-full max-w-lg overflow-hidden rounded-xl border border-border bg-surface shadow-[0_24px_80px_-12px_rgba(15,20,32,0.35)]"
            style={{ animation: "pop-in 0.2s cubic-bezier(0.16,1,0.3,1)" }}
          >
            <div className="flex items-center gap-3 border-b border-border px-4">
              <svg className="size-4 shrink-0 text-cornflower" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
                <circle cx="7" cy="7" r="4.5" />
                <path d="M10.5 10.5 14 14" strokeLinecap="round" />
              </svg>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setIndex(0);
                }}
                placeholder="Jump to a section, switch lens, copy email…"
                aria-label="Search commands"
                aria-controls="command-list"
                aria-activedescendant={filtered[index] ? `cmd-${filtered[index].id}` : undefined}
                className="h-12 w-full bg-transparent text-[15px] text-fg outline-none placeholder:text-subtle"
              />
              <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-subtle">ESC</kbd>
            </div>

            <ul id="command-list" role="listbox" className="max-h-[55vh] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-8 text-center text-sm text-subtle">No matches for “{query}”</li>
              )}
              {filtered.map((c, i) => {
                const header = c.group !== lastGroup;
                lastGroup = c.group;
                return (
                  <li key={c.id} role="presentation">
                    {header && (
                      <p className="px-3 pb-1 pt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-subtle first:pt-1">
                        {c.group}
                      </p>
                    )}
                    <button
                      id={`cmd-${c.id}`}
                      type="button"
                      role="option"
                      aria-selected={i === index}
                      onMouseMove={() => setIndex(i)}
                      onClick={() => runAt(i)}
                      className={`flex w-full items-center justify-between gap-4 rounded-md px-3 py-2 text-left text-[14px] transition-colors ${
                        i === index ? "bg-accent-soft text-fg" : "text-muted"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span
                          className={`size-1.5 rounded-full transition-colors ${i === index ? "bg-cornflower" : "bg-border-strong"}`}
                          aria-hidden="true"
                        />
                        {c.label}
                      </span>
                      {c.hint && <span className="truncate font-mono text-[11px] text-subtle">{c.hint}</span>}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-4 border-t border-border px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-subtle">
              <span>↑↓ navigate</span>
              <span>↵ select</span>
              <span className="ml-auto">{isMac ? "⌘" : "Ctrl"} K to toggle</span>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 rounded-full bg-fg px-4 py-2 text-[13px] font-medium text-bg shadow-lg"
          style={{ animation: "pop-in 0.2s cubic-bezier(0.16,1,0.3,1)" }}
        >
          {toast}
        </div>
      )}
    </>
  );
}

/** Opens the palette from a button anywhere on the page. */
export function openCommandPalette() {
  window.dispatchEvent(new Event("open-command-palette"));
}
