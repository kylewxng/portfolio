import {
  EDUCATION,
  EXPERIENCE,
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
import { ArrowDown, ArrowUpRight, GitHubIcon, LinkedInIcon } from "@/components/icons";

const CONTACT_ROWS = [
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, copy: true },
  { label: "LinkedIn", value: "in/kylewxng", href: SITE.linkedin },
  { label: "GitHub", value: "kylewxng", href: SITE.github },
  { label: "Resume", value: "Kyle_Wong_Resume.pdf", href: SITE.resume },
];

export default function Portfolio() {
  return (
    <>
      <Nav />

      <main id="main">
        {/* ═══════ HERO ═══════ */}
        <section id="top" className="relative overflow-hidden">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

          <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
            <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-end">
              <div>
                <p className="rise flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  <span className="status-dot size-1.5 rounded-full bg-ok" aria-hidden="true" />
                  Open to PM, data science & ML roles
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
                  I turn messy data into tools people actually use:{" "}
                  <span className="text-muted">
                    LLM agents, ML models, and the products around them.
                  </span>
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
                    className="inline-flex h-10 items-center gap-1.5 rounded-md bg-fg px-4 text-sm font-medium text-bg transition-opacity hover:opacity-85"
                  >
                    View work <ArrowDown />
                  </a>
                  <a
                    href={SITE.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-1.5 rounded-md border border-border-strong bg-surface px-4 text-sm font-medium text-fg transition-colors hover:border-fg"
                  >
                    Resume <span className="font-mono text-[11px] text-subtle">PDF</span>
                  </a>
                  <a
                    href={SITE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="grid size-10 place-items-center rounded-md border border-border text-muted transition-colors hover:border-border-strong hover:text-fg"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    href={SITE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="grid size-10 place-items-center rounded-md border border-border text-muted transition-colors hover:border-border-strong hover:text-fg"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>

              {/* Profile spec sheet */}
              <div
                className="rise rounded-xl border border-border bg-surface/80 backdrop-blur-sm"
                style={{ animationDelay: "400ms" }}
              >
                <div className="flex items-center justify-between border-b border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
                  <span>Profile</span>
                  <span>Rev. Oct 2026</span>
                </div>
                <dl className="divide-y divide-border">
                  {PROFILE.map((row) => (
                    <div key={row.label} className="grid grid-cols-[96px_1fr] gap-3 px-5 py-3">
                      <dt className="pt-px font-mono text-[11px] uppercase tracking-widest text-subtle">
                        {row.label}
                      </dt>
                      <dd className="text-[13px] text-fg">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Metrics */}
            <ul
              className="rise mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4"
              style={{ animationDelay: "480ms" }}
            >
              {METRICS.map((m) => (
                <li key={m.label} className="bg-surface p-5 sm:p-6">
                  <p className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                    {m.value}
                  </p>
                  <p className="mt-2 text-[13px] leading-snug text-muted">{m.label}</p>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
                    {m.source}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══════ ABOUT ═══════ */}
        <Section
          id="about"
          num="01"
          label="About"
          title="Between the data and the decision"
        >
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
                  product management, data science, ML/AI, and analytics
                </span>
                , where understanding the model and understanding the user both matter.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-xl border border-border bg-surface p-5">
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
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="bg-surface p-6">
                <p className="font-mono text-[11px] text-accent">0{i + 1}</p>
                <h3 className="mt-3 font-semibold tracking-tight text-fg">{p.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{p.body}</p>
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
          intro="Most recent first: internships, research, and client work across data science, ML, and product."
        >
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
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.id} delay={(i % 2) * 0.08}>
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
                      className="rounded-md border border-border bg-surface px-2.5 py-1 text-[13px] text-fg"
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
          intro="I’m open to product, data science, ML/AI, and analytics roles. Email is the fastest way to reach me."
        >
          <Reveal>
            <a
              href={`mailto:${SITE.email}`}
              className="group inline-flex items-center gap-3 text-2xl font-semibold tracking-tight text-fg sm:text-4xl"
            >
              <span className="underline decoration-border-strong decoration-1 underline-offset-[6px] transition-colors group-hover:decoration-accent">
                {SITE.email}
              </span>
              <ArrowUpRight className="size-6 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </a>
          </Reveal>

          <Reveal delay={0.08} className="mt-12">
            <ul className="border-b border-border">
              {CONTACT_ROWS.map((row) => (
                <li
                  key={row.label}
                  className="grid grid-cols-[88px_1fr_auto] items-center gap-4 border-t border-border py-4 sm:grid-cols-[200px_1fr_auto] sm:gap-10"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
                    {row.label}
                  </span>
                  <a
                    href={row.href}
                    target={row.copy ? undefined : "_blank"}
                    rel={row.copy ? undefined : "noopener noreferrer"}
                    className="truncate text-[15px] text-fg hover:text-accent"
                  >
                    {row.value}
                  </a>
                  {row.copy ? (
                    <CopyEmail email={SITE.email} />
                  ) : (
                    <ArrowUpRight className="size-3.5 text-subtle" />
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-border px-5 py-8 font-mono text-[11px] uppercase tracking-[0.12em] text-subtle sm:px-8">
        <span>© 2026 Kyle Wong · {SITE.location}</span>
        <span>Next.js · Vercel</span>
        <a href="#top" className="hover:text-fg">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}
