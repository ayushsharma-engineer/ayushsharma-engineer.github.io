import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data/portfolio";
import { Overline, Reveal } from "./Reveal";

const StatusBadge = ({ status, label }) => (
  <span
    data-testid={`project-badge-${status}`}
    className={`font-mono-tech text-[10px] px-3 py-1 uppercase tracking-widest border ${
      status === "completed"
        ? "bg-emerald-950/60 text-emerald-400 border-emerald-800/50"
        : "bg-amber-950/60 text-amber-400 border-amber-800/50"
    }`}
  >
    {label}
  </span>
);

export const Projects = () => {
  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="py-20 md:py-32"
      aria-label="Projects"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-8">
              <Reveal>
                <Overline>03 — Work</Overline>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mt-4">
                  Featured <span className="italic text-[#7DD3FC]">builds</span>
                </h2>
                <p className="mt-5 text-sm sm:text-base text-[#9A9895] leading-relaxed max-w-sm">
                  Real systems from my work in applied AI — clearly marked as
                  completed projects or in-development prototypes.
                </p>
              </Reveal>
              
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.id} delay={0.08 * i}>
                <article
                  data-testid={`project-card-${p.id}`}
                  className="group border border-[#262422] bg-[#0A0A0A] hover:bg-[#121111] hover:border-[#7DD3FC] transition-all duration-300 ease-out p-6 sm:p-10"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <span className="font-mono-tech text-[10px] tracking-[0.3em] text-[#6E6C69] uppercase">
                      Project 0{i + 1}
                    </span>
                    <StatusBadge status={p.status} label={p.statusLabel} />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#F5F2EE] leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-[#9A9895] leading-relaxed">
                    {p.description}
                  </p>
                  <p className="mt-3 text-sm sm:text-base text-[#6E6C69] leading-relaxed">
                    {p.details}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono-tech text-[11px] text-[#9A9895] border border-[#1C1A19] px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    data-testid={`project-link-${p.id}`}
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-sm text-[#F5F2EE] hover:text-[#7DD3FC] transition-colors duration-200 tracking-wide"
                  >
                    {p.linkLabel}
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
