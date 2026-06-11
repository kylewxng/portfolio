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
  "Software Development",
  "Computer Vision",
  "Data Analytics",
  "NLP",
  "PyTorch",
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
          if (
            r.top <= window.innerHeight / 2 &&
            r.bottom > window.innerHeight / 2
          ) {
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
              <div className="mb-7">
                <div className="text-[13px] text-[#0078D4] tracking-[0.18em] uppercase flex items-center gap-3 font-semibold">
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
                <div className="text-[12px] text-[#9BA8B4] tracking-[0.14em] uppercase mt-2.5 ml-13 font-medium">
                  Minor in Data Science Engineering
                </div>
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
                Data Scientist, Data Analyst, and software developer building
                tools, from RAG-Powered NBA Play Analysis to agentic AI research
                platforms.
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
                <TimelineItem exp={exp} isLast={i === EXPERIENCE.length - 1} />
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ═══════ SKILLS ═══════ */}
        <section id="skills" className="py-[120px] px-[clamp(32px,10vw,140px)]">
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
              <MagneticButton
                href="https://linkedin.com/in/kylewxng"
                icon
                ariaLabel="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
              </MagneticButton>
              <MagneticButton
                href="https://github.com/kylewxng"
                icon
                ariaLabel="GitHub"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.6 8.21 11.16.6.11.82-.25.82-.56 0-.28-.01-1.02-.02-2-3.34.71-4.04-1.59-4.04-1.59-.55-1.37-1.33-1.74-1.33-1.74-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.21 1.84 1.21 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.57-2.67-.3-5.47-1.31-5.47-5.84 0-1.29.47-2.34 1.24-3.17-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.21a11.6 11.6 0 0 1 6 0c2.29-1.53 3.3-1.21 3.3-1.21.66 1.64.24 2.86.12 3.16.77.83 1.23 1.88 1.23 3.17 0 4.54-2.81 5.53-5.49 5.83.43.36.81 1.08.81 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.83.56A12.02 12.02 0 0 0 24 12.29C24 5.78 18.63.5 12 .5z" />
                </svg>
              </MagneticButton>
              <MagneticButton
                href="mailto:kylewxng06@gmail.com"
                icon
                ariaLabel="Email"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
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
