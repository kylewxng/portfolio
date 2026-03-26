"use client";

import { useRef, useState, MouseEvent } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";
import type { Project } from "@/data";

interface ProjectCardProps {
  project: Project;
  index: number;
  isExpanded: boolean;
  onClick: () => void;
}

export default function ProjectCard({ project, index, isExpanded, onClick }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  const handleMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    setTilt({ x: (y - 0.5) * -8, y: (x - 0.5) * 8 });
    setGlare({ x: x * 100, y: y * 100 });
  };

  const isMobile = project.id === "scenetic";
  const cropTop = project.id === "transfermate";

  const shimmerBg = isExpanded
    ? "linear-gradient(90deg, #0078D4, #00A6FB, #0078D4)"
    : hovering
      ? "linear-gradient(90deg, transparent, #0078D4, transparent)"
      : "transparent";

  return (
    <FadeIn delay={index * 0.1}>
      <div
        ref={ref}
        onClick={onClick}
        onMouseMove={handleMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => {
          setTilt({ x: 0, y: 0 });
          setHovering(false);
        }}
        className="rounded-[20px] bg-white cursor-pointer relative overflow-hidden will-change-transform"
        style={{
          border: isExpanded ? "2px solid #0078D4" : "1.5px solid #E8EDF2",
          transition: "border-color 0.4s, box-shadow 0.4s",
          transform: `perspective(800px) rotateX(${hovering ? tilt.x : 0}deg) rotateY(${hovering ? tilt.y : 0}deg)`,
          transformStyle: "preserve-3d",
          boxShadow: hovering
            ? "0 20px 60px rgba(0,120,212,0.1), 0 8px 24px rgba(0,0,0,0.05)"
            : "0 2px 12px rgba(0,0,0,0.03)",
        }}
      >
        {/* Glare overlay */}
        <div
          className="absolute inset-0 rounded-[20px] pointer-events-none z-[3]"
          style={{
            background: hovering
              ? `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(0,120,212,0.07) 0%, transparent 60%)`
              : "none",
          }}
        />

        {/* Top accent bar */}
        <div
          className="h-1"
          style={{
            backgroundImage: shimmerBg,
            backgroundSize: isExpanded ? "200% 100%" : "100% 100%",
            transition: "background-image 0.4s",
            animation: isExpanded ? "barShimmer 2s linear infinite" : "none",
          }}
        />

        <div className="px-8 py-7 relative z-[2]">
          {/* Header row */}
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-3.5">
              <span
                className="text-[34px] inline-block"
                style={{
                  transform: hovering ? "scale(1.15) rotate(-5deg)" : "scale(1)",
                  transition: "transform 0.4s cubic-bezier(.16,1,.3,1)",
                }}
              >
              </span>
              <div>
                <h3 className="text-2xl font-bold text-[#0A1628] tracking-tight">
                  {project.title}
                </h3>
                <p className="text-[13px] text-[#6B7B8D] font-medium">
                  {project.subtitle} · {project.org}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <span className="text-[11px] text-[#0078D4] font-semibold bg-[rgba(0,120,212,0.08)] px-3 py-1 rounded-full whitespace-nowrap">
                {project.highlight}
              </span>
              <span className="text-[11px] text-[#9BA8B4] font-medium">
                {project.year}
              </span>
            </div>
          </div>

          {/* Expandable content */}
          <div
            style={{
              maxHeight: isExpanded ? 800 : 0,
              opacity: isExpanded ? 1 : 0,
              overflow: "hidden",
              transition:
                "max-height 0.7s cubic-bezier(.16,1,.3,1), opacity 0.5s ease",
            }}
          >
            {/* Screenshot */}
            <div
              className={`mt-5 mb-5 rounded-xl overflow-hidden border border-[#E8EDF2] ${isMobile ? "bg-transparent flex justify-center" : "bg-[#f0f2f5]"}`}
            >
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                width={isMobile ? 200 : 800}
                height={isMobile ? 400 : 500}
                className="block"
                style={{
                  width: isMobile ? "auto" : "100%",
                  height: isMobile ? "auto" : "auto",
                  maxHeight: isMobile ? 400 : undefined,
                  objectFit: isMobile ? "contain" : "contain",
                  objectPosition: "top",
                  marginTop: cropTop ? -5 : undefined,
                }}
              />
            </div>

            <p className="text-sm text-[#4A5568] leading-7 mb-5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold text-[#0078D4] bg-[rgba(0,120,212,0.06)] px-3.5 py-1.5 rounded-full border border-[rgba(0,120,212,0.1)]"
                  style={{
                    transform: isExpanded ? "translateY(0)" : "translateY(10px)",
                    opacity: isExpanded ? 1 : 0,
                    transition: `all 0.4s cubic-bezier(.16,1,.3,1) ${0.2 + i * 0.05}s`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Expand arrow */}
          <div className="flex justify-center mt-3">
            <span
              className="text-lg text-[#0078D4] inline-block opacity-40"
              style={{
                transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.4s cubic-bezier(.16,1,.3,1)",
              }}
            >
              ↓
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
