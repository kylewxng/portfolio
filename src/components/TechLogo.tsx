"use client";

import { useState } from "react";
import type { TechItem } from "@/data";

interface TechLogoProps {
  item: TechItem;
}

export default function TechLogo({ item }: TechLogoProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center gap-2.5 cursor-default"
      style={{
        transform: hovered ? "translateY(-8px) scale(1.1)" : "translateY(0) scale(1)",
        transition: "all 0.4s cubic-bezier(.16,1,.3,1)",
      }}
    >
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300"
        style={{
          background: hovered ? "rgba(0,120,212,0.08)" : "rgba(0,0,0,0.02)",
          border: `1.5px solid ${hovered ? "rgba(0,120,212,0.2)" : "#E8EDF2"}`,
          boxShadow: hovered ? "0 8px 24px rgba(0,120,212,0.12)" : "none",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.logo}
          alt={item.name}
          className="w-9 h-9 object-contain transition-[filter] duration-300"
          style={{
            filter:
              item.name === "Vercel"
                ? hovered
                  ? "none"
                  : "brightness(0.3)"
                : "none",
          }}
        />
      </div>
      <span
        className="text-xs font-medium transition-colors duration-300"
        style={{ color: hovered ? "#0078D4" : "#6B7B8D" }}
      >
        {item.name}
      </span>
    </div>
  );
}
