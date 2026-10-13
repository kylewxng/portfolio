"use client";

import { MoonIcon, SunIcon } from "./icons";

export function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {}
}

export default function ThemeToggle() {
  // Both icons render; CSS shows the right one, so server and client markup match.
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="grid size-8 place-items-center rounded-md border border-border text-muted transition-colors hover:border-cf-300 hover:text-accent"
    >
      <MoonIcon className="size-4 transition-transform duration-300 hover:-rotate-12 dark:hidden" />
      <SunIcon className="hidden size-4 transition-transform duration-500 hover:rotate-90 dark:block" />
    </button>
  );
}
