"use client";

import { useState, useEffect, useCallback } from "react";
import { PROJECTS, EXPERIENCE, TECH_LOGOS, SECTIONS } from "@/data";
import FloatingBlobs from "@/components/FloatingBlobs";
import SideNav from "@/components/SideNav";
import ParticleField from "@/components/ParticleField";
import MagneticButton from "@/components/MagneticButton";
import ProjectCard from "@/components/ProjectCard";
import TimelineItem from "@/components/TimelineItem";
import TechLogo from "@/components/TechLogo";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";

const MARQUEE_ITEMS = [
  "Machine Learning",
  "Data Science",
  "React.js",
  "Computer Vision",
  "Data Analytics",
  "NLP",
  "PyTorch",
  "Next.js",
  "Data Visualization",
];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    const handler = () => {
      for (const s of SECTIONS) {
        const el = document.getElementById(s);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= window.innerHeight / 2 && r.bottom > window.innerHeight / 2) {
            setActiveSection(s);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = useCallback((s: string) => {
    setActiveSection(s);
    document.getElementById(s)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <FloatingBlobs />
      <SideNav active={activeSection} onNav={scrollTo} />

      <div className="min-h-screen overflow-x-hidden relative z-[1]">
        {/* ═══════ HERO ═══════ */}
        <section
          id="hero"
          className="min-h-screen flex flex-col justify-center px-[clamp(32px,10vw,140px)] relative overflow-hidden"
        >
          <ParticleField />
          <div
            className="relative z-[2]"
            style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
          >
            {/* Tagline */}
            <div
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(60px)",
                transition: "all 1s cubic-bezier(.16,1,.3,1) 0.2s",
              }}
            >
              <div className="text-[13px] text-[#0078D4] tracking-[0.18em] uppercase mb-7 flex items-center gap-3 font-semibold">
                <div
                  className="w-10 h-0.5"
                  style={{
                    background: "linear-gradient(90deg, #0078D4, #00A6FB)",
                    animation: loaded
                      ? "lineGrow 0.8s cubic-bezier(.16,1,.3,1) 0.5s both"
                      : "none",
                    transformOrigin: "left",
                  }}
                />
                Statistics & Data Science · UCLA &apos;27
              </div>
            </div>

            {/* Name */}
            <div
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded
                  ? "translateY(0) scale(1)"
                  : "translateY(60px) scale(0.96)",
                transition: "all 1.2s cubic-bezier(.16,1,.3,1) 0.4s",
              }}
            >
              <h1 className="text-[clamp(52px,8.5vw,110px)] font-extrabold leading-tight tracking-tighter mb-7">
                Hi, I&apos;m{" "}
                <span
                  className="relative inline-block pb-2"
                  style={{
                    background:
                      "linear-gradient(135deg, #0078D4 0%, #00A6FB 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Kyle
                  <span
                    className="absolute bottom-[-4px] left-0 right-0 h-1 rounded-sm opacity-30"
                    style={{
                      background: "linear-gradient(90deg, #0078D4, #00A6FB)",
                    }}
                  />
                </span>
                <span className="text-[#0078D4]">.</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(40px)",
                transition: "all 1s cubic-bezier(.16,1,.3,1) 0.7s",
              }}
            >
              <p className="text-[19px] text-[#6B7B8D] max-w-[560px] leading-relaxed font-light">
                ML engineer, frontend developer, and data scientist building
                intelligent tools, from NBA prediction engines to agentic AI
                research platforms.
              </p>
            </div>

            {/* CTA buttons */}
            <div
              className="flex gap-4 mt-11 flex-wrap"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(30px)",
                transition: "all 1s cubic-bezier(.16,1,.3,1) 0.9s",
              }}
            >
              <MagneticButton accent onClick={() => scrollTo("projects")}>
                View Projects →
              </MagneticButton>
              <MagneticButton onClick={() => scrollTo("contact")}>
                Get In Touch
              </MagneticButton>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-[2]">
            <div className="w-6 h-10 rounded-xl border-2 border-[rgba(0,120,212,0.25)] flex justify-center pt-2">
              <div
                className="w-[3px] h-2 rounded-sm bg-[#0078D4]"
                style={{ animation: "scrollBounce 2s ease-in-out infinite" }}
              />
            </div>
          </div>
        </section>

        {/* ═══════ MARQUEE ═══════ */}
        <div className="overflow-hidden py-7 border-y border-[#E8EDF2] bg-white">
          <div
            className="flex gap-[60px] whitespace-nowrap w-max"
            style={{ animation: "marquee 25s linear infinite" }}
          >
            {[...Array(2)]
              .flatMap(() => MARQUEE_ITEMS)
              .map((t, i) => (
                <span
                  key={i}
                  className="text-[13px] font-medium tracking-wide"
                  style={{ color: i % 2 === 0 ? "#0078D4" : "#9BA8B4" }}
                >
                  {t}
                </span>
              ))}
          </div>
        </div>

        {/* ═══════ PROJECTS ═══════ */}
        <section
          id="projects"
          className="py-[120px] px-[clamp(32px,10vw,140px)]"
        >
          <SectionHeader num="02" label="Projects" title="Selected Work" />
          <div className="flex flex-col gap-5 max-w-[860px]">
            {PROJECTS.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={i}
                isExpanded={activeProject === p.id}
                onClick={() =>
                  setActiveProject(activeProject === p.id ? null : p.id)
                }
              />
            ))}
          </div>
        </section>

        {/* ═══════ EXPERIENCE ═══════ */}
        <section
          id="experience"
          className="py-[120px] px-[clamp(32px,10vw,140px)] bg-white border-y border-[#E8EDF2]"
        >
          <SectionHeader num="03" label="Experience" title="Where I've Been" />
          <div className="max-w-[760px]">
            {EXPERIENCE.map((exp, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <TimelineItem
                  exp={exp}
                  isLast={i === EXPERIENCE.length - 1}
                />
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ═══════ SKILLS ═══════ */}
        <section
          id="skills"
          className="py-[120px] px-[clamp(32px,10vw,140px)]"
        >
          <SectionHeader num="04" label="Skills" title="Tech Stack" />
          <div className="max-w-[900px]">
            {Object.entries(TECH_LOGOS).map(([category, items], ci) => (
              <FadeIn key={category} delay={ci * 0.1}>
                <div className="mb-12">
                  <h3 className="text-[13px] font-semibold text-[#0078D4] uppercase tracking-[0.15em] mb-6 pb-2.5 border-b-2 border-[rgba(0,120,212,0.1)]">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-7">
                    {items.map((item) => (
                      <TechLogo key={item.name} item={item} />
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ═══════ CONTACT ═══════ */}
        <section
          id="contact"
          className="py-[120px] px-[clamp(32px,10vw,140px)] min-h-[50vh] flex flex-col justify-center bg-white border-t border-[#E8EDF2]"
        >
          <SectionHeader num="05" label="Contact" title="Let's Connect" />
          <FadeIn>
            <p className="text-[17px] text-[#6B7B8D] max-w-[520px] leading-relaxed font-light mb-10 -mt-8">
              Currently seeking off-season internships for Fall 2026 – Spring
              2027 in data science, ML engineering, or analytics roles.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="flex gap-4 flex-wrap">
              <MagneticButton href="https://linkedin.com/in/kylewxng">
                LinkedIn ↗
              </MagneticButton>
              <MagneticButton href="https://github.com/kylewxng">
                GitHub ↗
              </MagneticButton>
              <MagneticButton href="mailto:kylewxng06@gmail.com">
                Email ↗
              </MagneticButton>
            </div>
          </FadeIn>
        </section>

        {/* ═══════ FOOTER ═══════ */}
        <footer className="px-[clamp(32px,10vw,140px)] py-9 border-t border-[#E8EDF2] flex justify-between items-center flex-wrap gap-4">
          <span className="text-[11px] text-[#9BA8B4] font-medium">
            © 2026 Kyle Wong · UCLA Statistics & Data Science
          </span>
          <span className="text-[11px] text-[#CBD5E0] font-normal">
            Designed & built with care
          </span>
        </footer>
      </div>
    </>
  );
}
