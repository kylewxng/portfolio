"use client";

import { useState } from "react";
import Image from "next/image";
import type { Experience } from "@/data";

interface TimelineItemProps {
  exp: Experience;
  isLast: boolean;
}

export default function TimelineItem({ exp, isLast }: TimelineItemProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex gap-7 relative pb-10"
    >
      {/* Dot + line */}
      <div className="flex flex-col items-center w-5 shrink-0">
        <div
          className="w-3.5 h-3.5 rounded-full border-2 border-[#0078D4] z-[1] transition-all duration-300"
          style={{
            background: exp.status === "upcoming" ? "#fff" : "#0078D4",
            boxShadow: hovered ? "0 0 16px rgba(0,120,212,0.3)" : "none",
            transform: hovered ? "scale(1.3)" : "scale(1)",
          }}
        />
        {!isLast && (
          <div
            className="w-0.5 flex-1 mt-1"
            style={{
              background:
                "linear-gradient(to bottom, #0078D4, rgba(0,120,212,0.1))",
            }}
          />
        )}
      </div>

      {/* Logo */}
      <div className="shrink-0 mt-0.5">
        <Image
          src={exp.logo}
          alt={exp.company}
          width={40}
          height={40}
          className="rounded-lg object-contain"
          style={{
            filter: hovered ? "none" : "grayscale(0.3)",
            transition: "filter 0.3s",
          }}
        />
      </div>

      {/* Content */}
      <div
        className="flex-1 transition-transform duration-300"
        style={{
          transform: hovered ? "translateX(8px)" : "translateX(0)",
          transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
        }}
      >
        <div className="flex justify-between items-baseline flex-wrap gap-2">
          <h3 className="text-[17px] font-semibold text-[#0A1628]">
            {exp.role}
          </h3>
          <span className="text-[11px] text-[#9BA8B4] font-medium">
            {exp.period}
          </span>
        </div>
        <p className="text-sm text-[#6B7B8D] mt-1">
          {exp.company}
        </p>
        {exp.status === "upcoming" && (
          <span className="inline-block mt-2.5 text-[10px] text-[#0078D4] font-semibold bg-[rgba(0,120,212,0.08)] px-3 py-1 rounded-full tracking-widest uppercase">
            Upcoming
          </span>
        )}
      </div>
    </div>
  );
}
