
import {
  Code2,
  BrainCircuit,
  Layers3,
  Database,
  Terminal,
  ArrowUpRight,
} from "lucide-react";

import { SKILL_CATEGORIES } from "../data/portfolio";
import { Overline, Reveal } from "./Reveal";

const getCategoryIcon = (id) => {
  const icons = {
    languages: Code2,
    "ai-ml": BrainCircuit,
    ai: BrainCircuit,
    libraries: Layers3,
    databases: Database,
    tools: Terminal,
  };

  return icons[id?.toLowerCase()] || Code2;
};

export const Skills = () => {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="relative py-24 md:py-32 bg-[#05080D] border-y border-[#162B3D] overflow-hidden"
      aria-label="Technical skills"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7DD3FC]/[0.04] blur-[140px] rounded-full pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20 relative">

        {/* Heading */}
        <Reveal className="max-w-2xl">
          <Overline>02 — Capabilities</Overline>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mt-5 text-[#EAF6FF]">
            The technology behind{" "}
            <span className="italic text-[#7DD3FC]">
              my work
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-[#94A9BE] leading-relaxed max-w-xl">
            Technologies and tools I use to develop intelligent
            applications, machine learning solutions, and scalable software.
          </p>
        </Reveal>

        {/* Skills Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {SKILL_CATEGORIES.map((cat, i) => {
            const Icon = getCategoryIcon(cat.id);

            return (
              <Reveal
                key={cat.id}
                delay={0.06 * i}
                className={`group relative ${
                  cat.id === "libraries" ? "lg:col-span-2" : ""
                }`}
              >
                <div
                  data-testid={`skills-card-${cat.id}`}
                  className="relative h-full min-h-[210px] overflow-hidden rounded-xl border border-[#1B344A] bg-gradient-to-br from-[#0D1926] to-[#080E17] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#7DD3FC]/60 hover:shadow-[0_12px_40px_rgba(56,189,248,0.08)]"
                >

                  {/* Decorative glow */}
                  <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#7DD3FC]/[0.04] blur-3xl group-hover:bg-[#7DD3FC]/[0.10] transition-all duration-500" />

                  {/* Card Header */}
                  <div className="relative flex items-center justify-between mb-8">

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-lg flex items-center justify-center border border-[#28465F] bg-[#102235] text-[#7DD3FC] group-hover:bg-[#7DD3FC] group-hover:text-[#05080D] transition-all duration-300">
                        <Icon size={22} strokeWidth={1.7} />
                      </div>

                      <div>
                        <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#EAF6FF]">
                          {cat.name}
                        </h3>

                        <p className="font-mono-tech text-[9px] tracking-[0.2em] uppercase text-[#66839D] mt-1">
                          Technical Stack
                        </p>
                      </div>

                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-[#45647D] group-hover:text-[#7DD3FC] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    />

                  </div>

                  {/* Skill Badges */}
                  <div className="relative flex flex-wrap gap-2.5">

                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center text-xs sm:text-sm text-[#A8B8C9] border border-[#243B50] bg-[#0B1622]/80 rounded-md px-3.5 py-2 transition-all duration-300 hover:text-[#7DD3FC] hover:border-[#7DD3FC]/50 hover:bg-[#102235]"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#7DD3FC] group-hover:w-full transition-all duration-500" />

                </div>
              </Reveal>
            );
          })}

        </div>
      </div>
    </section>
  );
};
