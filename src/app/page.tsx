import {
  EDUCATION,
  EXPERIENCE,
  HERO_WORDS,
  METRICS,
  PILLARS,
  PROFILE,
  PROJECTS,
  SIDE_PROJECTS,
  SITE,
  SKILLS,
} from "@/data";
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import ExperienceItem from "@/components/ExperienceItem";
import ProjectCard from "@/components/ProjectCard";
import SideProjectRow from "@/components/SideProjectRow";
import CopyEmail from "@/components/CopyEmail";
import CommandPalette from "@/components/CommandPalette";
import CountUp from "@/components/CountUp";
import LocalTime from "@/components/LocalTime";
import RotatingWords from "@/components/RotatingWords";
import Spotlight from "@/components/Spotlight";
import { LensControl, LensProvider } from "@/components/Lens";
import { ArrowDown, ArrowUpRight, GitHubIcon, LinkedInIcon } from "@/components/icons";

const CONTACT_ROWS = [
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, copy: true },
  { label: "LinkedIn", value: "in/kylewxng", href: SITE.linkedin },
  { label: "GitHub", value: "kylewxng", href: SITE.github },
];

export default function Portfolio() {
  return (
    <LensProvider>
      <Nav />
      <CommandPalette />

      <main id="main">
        {/* ═══════ HERO ═══════ */}
        <section id="top" className="relative overflow-hidden">
          <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

          <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
            <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-end">
              <div>
                <p className="rise inline-flex items-center gap-2 rounded-full border border-cf-200 bg-accent-soft px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent dark:border-cf-800">
                  <span className="status-dot size-1.5 rounded-full bg-ok" aria-hidden="true" />
                  Open to PM, Data Science & ML roles
                </p>

                <h1
                  className="rise mt-6 text-5xl font-semibold tracking-[-0.035em] text-fg sm:text-7xl"
                  style={{ animationDelay: "80ms" }}
                >
                  Kyle Wong
                </h1>

                <p
                  className="rise mt-5 max-w-xl text-xl leading-snug tracking-tight text-fg sm:text-2xl"
                  style={{ animationDelay: "160ms" }}
                >
                  I turn messy data into
                  <br />
                  <RotatingWords words={HERO_WORDS} />
                  <span className="text-cornflower">.</span>
                </p>

                <p
                  className="rise mt-5 max-w-xl text-[15px] leading-relaxed text-muted"
                  style={{ animationDelay: "240ms" }}
                >
                  Statistics & Data Science at UCLA. This summer I built fraud-investigation
                  agents in Snowflake at Pacific Life; before that, I led the frontend for an
                  AI data agent at UCLA’s Trustworthy AI Lab.
                </p>

                <div
                  className="rise mt-8 flex flex-wrap items-center gap-3"
                  style={{ animationDelay: "320ms" }}
                >
                  <a
                    href="#projects"
                    className="group inline-flex h-10 items-center gap-1.5 rounded-md bg-cf-600 px-4 text-sm font-medium text-white shadow-[0_6px_20px_-8px_var(--cf-500)] transition-all hover:-translate-y-0.5 hover:bg-cf-500 hover:shadow-[0_10px_28px_-8px_var(--cf-400)]"
                  >
                    View work <ArrowDown className="size-3.5 transition-transform group-hover:translate-y-0.5" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex h-10 items-center rounded-md border border-border-strong bg-surface px-4 text-sm font-medium text-fg transition-all hover:-translate-y-0.5 hover:border-cf-400 hover:text-accent"
                  >
                    Get in touch
                  </a>
                  <a
                    href={SITE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="grid size-10 place-items-center rounded-md border border-border text-muted transition-all hover:-translate-y-0.5 hover:border-cf-300 hover:text-accent"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    href={SITE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="grid size-10 place-items-center rounded-md border border-border text-muted transition-all hover:-translate-y-0.5 hover:border-cf-300 hover:text-accent"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>

              {/* Profile spec sheet */}
              <Spotlight
                className="rise rounded-xl border border-border bg-surface/80 backdrop-blur-sm transition-colors hover:border-cf-300"
                style={{ animationDelay: "400ms" }}
              >
                <div className="flex items-center justify-between border-b border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
                  <span className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-cornflower" aria-hidden="true" />
                    Profile
                  </span>
                  <span>Rev. Oct 2026</span>
                </div>
                <dl className="relative z-2 divide-y divide-border">
                  {PROFILE.map((row) => (
                    <div key={row.label} className="grid grid-cols-[96px_1fr] gap-3 px-5 py-3">
                      <dt className="pt-px font-mono text-[11px] uppercase tracking-widest text-subtle">
                        {row.label}
                      </dt>
                      <dd className="text-[13px] text-fg">{row.value}</dd>
                    </div>
                  ))}
                  <div className="grid grid-cols-[96px_1fr] gap-3 px-5 py-3">
                    <dt className="pt-px font-mono text-[11px] uppercase tracking-widest text-subtle">
                      Local time
                    </dt>
                    <dd className="text-[13px] text-fg">
                      <LocalTime />
                    </dd>
                  </div>
                </dl>
              </Spotlight>
            </div>

            {/* Metrics */}
            <ul
              className="rise mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4"
              style={{ animationDelay: "480ms" }}
            >
              {METRICS.map((m) => (
                <li key={m.label}>
                  <Spotlight className="group h-full bg-surface p-5 sm:p-6">
                    <p className="relative z-2 text-3xl font-semibold tracking-tight text-fg transition-colors group-hover:text-accent sm:text-4xl">
                      <CountUp metric={m} />
                    </p>
                    <p className="relative z-2 mt-2 text-[13px] leading-snug text-muted">{m.label}</p>
                    <p className="relative z-2 mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
                      {m.source}
                    </p>
                  </Spotlight>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══════ ABOUT ═══════ */}
        <Section id="about" num="01" label="About" title="Between the data and the decision">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            <Reveal className="space-y-5 text-[16px] leading-relaxed text-muted">
              <p>
                I’m a Statistics & Data Science student at UCLA (minor in Data Science
                Engineering). The work I like best is taking a vague question and turning
                it into something a team can use every day.
              </p>
              <p>
                At Pacific Life, that meant a text-to-SQL agent so fraud analysts could
                query <span className="text-fg">1.6M policies</span> without waiting on
                anyone, and a multi-agent workflow that cut manual case review by{" "}
                <span className="text-fg">~80%</span>. At the Trustworthy AI Lab, it meant
                writing the PRD with PhD researchers and building the interface for their
                data agent from scratch.
              </p>
              <p>
                I’m looking for roles in{" "}
                <span className="text-fg">
                  Product Management, Data Science, ML/AI, and Analytics
                </span>
                , where understanding the model and understanding the user both matter.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <Spotlight className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-cf-300">
                <div className="relative z-2">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
                    Education
                  </p>
                  <p className="mt-3 font-semibold tracking-tight text-fg">{EDUCATION.school}</p>
                  <p className="text-[14px] text-muted">{EDUCATION.degree}</p>
                  <p className="text-[14px] text-muted">{EDUCATION.minor}</p>
                  <p className="mt-1 font-mono text-[11px] text-subtle">{EDUCATION.period}</p>
                  <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
                    Coursework
                  </p>
                  <ul className="mt-2 space-y-1 text-[13px] text-muted">
                    {EDUCATION.coursework.map((c) => (
                      <li key={c} className="flex gap-2">
                        <span className="text-cornflower" aria-hidden="true">›</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Spotlight>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="h-full">
                <Spotlight className="group h-full bg-surface p-6">
                  <div className="relative z-2">
                    <p className="font-mono text-[11px] text-cornflower">0{i + 1}</p>
                    <h3 className="mt-3 font-semibold tracking-tight text-fg transition-colors group-hover:text-accent">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted">{p.body}</p>
                  </div>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ═══════ EXPERIENCE ═══════ */}
        <Section
          id="experience"
          num="02"
          label="Experience"
          title="Where I’ve worked"
          intro="Most recent first. Pick a lens to highlight the work most relevant to the role you’re hiring for."
        >
          <Reveal className="mb-8">
            <LensControl />
          </Reveal>
          <div className="border-b border-border">
            {EXPERIENCE.map((exp) => (
              <Reveal key={exp.id}>
                <ExperienceItem exp={exp} />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ═══════ PROJECTS ═══════ */}
        <Section
          id="projects"
          num="03"
          label="Projects"
          title="Selected work"
          intro="Things I’ve built end to end, from retrieval pipelines to the interface people actually touch."
        >
          <Reveal className="mb-8">
            <LensControl />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.id} delay={(i % 2) * 0.08} className="h-full">
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
              More work
            </h3>
            <div className="mt-4 border-b border-border">
              {SIDE_PROJECTS.map((p) => (
                <SideProjectRow key={p.id} project={p} />
              ))}
            </div>
          </Reveal>
        </Section>

        {/* ═══════ SKILLS ═══════ */}
        <Section id="skills" num="04" label="Skills" title="Toolkit">
          <div className="border-b border-border">
            {SKILLS.map((s, i) => (
              <Reveal
                key={s.group}
                delay={i * 0.05}
                className="grid gap-3 border-t border-border py-5 md:grid-cols-[200px_1fr] md:gap-10"
              >
                <h3 className="pt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
                  {s.group}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="cursor-default rounded-md border border-border bg-surface px-2.5 py-1 text-[13px] text-fg transition-all duration-200 hover:-translate-y-0.5 hover:border-cf-300 hover:bg-accent-soft hover:text-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ═══════ CONTACT ═══════ */}
        <Section
          id="contact"
          num="05"
          label="Contact"
          title="Let’s talk"
          intro="I’m open to Product, Data Science, ML/AI, and Analytics roles. Email is the fastest way to reach me."
        >
          <Reveal>
            <a
              href={`mailto:${SITE.email}`}
              className="group inline-flex items-center gap-3 text-2xl font-semibold tracking-tight text-fg sm:text-4xl"
            >
              <span className="bg-linear-to-r from-cf-400 to-cf-600 bg-size-[0%_2px] bg-bottom-left bg-no-repeat pb-1 transition-[background-size,color] duration-500 group-hover:bg-size-[100%_2px] group-hover:text-accent">
                {SITE.email}
              </span>
              <ArrowUpRight className="size-6 text-subtle transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cornflower" />
            </a>
          </Reveal>

          <Reveal delay={0.08} className="mt-12">
            <ul className="border-b border-border">
              {CONTACT_ROWS.map((row) => (
                <li
                  key={row.label}
                  className="group grid grid-cols-[88px_1fr_auto] items-center gap-4 border-t border-border py-4 transition-colors hover:bg-accent-soft sm:grid-cols-[200px_1fr_auto] sm:gap-10"
                >
                  <span className="pl-2 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
                    {row.label}
                  </span>
                  <a
                    href={row.href}
                    target={row.copy ? undefined : "_blank"}
                    rel={row.copy ? undefined : "noopener noreferrer"}
                    className="truncate text-[15px] text-fg transition-colors group-hover:text-accent"
                  >
                    {row.value}
                  </a>
                  <span className="pr-2">
                    {row.copy ? (
                      <CopyEmail email={SITE.email} />
                    ) : (
                      <ArrowUpRight className="size-3.5 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cornflower" />
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-border px-5 py-8 font-mono text-[11px] uppercase tracking-[0.12em] text-subtle sm:px-8">
        <span>© 2026 Kyle Wong · {SITE.location}</span>
        <span>
          Press <kbd className="rounded border border-border px-1 text-accent">Ctrl/⌘ K</kbd> to navigate
        </span>
        <a href="#top" className="transition-colors hover:text-accent">
          Back to top ↑
        </a>
      </footer>
    </LensProvider>
  );
}
