"use client";

import { HTMLAttributes, PointerEvent } from "react";

/** Wrapper whose background glows where the cursor is. */
export default function Spotlight({ className = "", children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div {...rest} onPointerMove={onMove} className={`spotlight ${className}`}>
      {children}
    </div>
  );
}
