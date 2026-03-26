"use client";

import { useRef, useState, ReactNode, MouseEvent } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  accent?: boolean;
  href?: string;
}

export default function MagneticButton({ children, onClick, accent = false, href }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setOffset({
      x: (e.clientX - r.left - r.width / 2) * 0.25,
      y: (e.clientY - r.top - r.height / 2) * 0.25,
    });
  };

  const baseClass = `font-semibold text-sm px-9 py-3.5 rounded-full cursor-pointer inline-block text-center tracking-wide`;

  const style = {
    border: accent ? "none" : "1.5px solid #0078D4",
    background: accent ? "linear-gradient(135deg, #0078D4, #00A6FB)" : "transparent",
    color: accent ? "#fff" : "#0078D4",
    transform: `translate(${offset.x}px, ${offset.y}px) scale(${hovered ? 1.05 : 1})`,
    transition: hovered
      ? "transform 0.15s ease-out, box-shadow 0.3s"
      : "transform 0.5s cubic-bezier(.16,1,.3,1), box-shadow 0.3s",
    boxShadow: hovered && accent
      ? "0 8px 32px rgba(0,120,212,0.35)"
      : hovered
        ? "0 4px 20px rgba(0,120,212,0.15)"
        : "none",
    textDecoration: "none",
  };

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        style={style}
        onMouseMove={handleMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setOffset({ x: 0, y: 0 }); }}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      className={baseClass}
      style={style}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setOffset({ x: 0, y: 0 }); }}
    >
      {children}
    </button>
  );
}
