import { EXPERIENCE } from "../data/portfolio";
import { Overline, Reveal } from "./Reveal";

export const Experience = () => {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="py-20 md:py-32 bg-[#0A0A0A] border-y border-[#1C1A19]"
      aria-label="Experience and education"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-8 order-2 lg:order-1">
            <div className="relative border-l border-[#262422] pl-6 md:pl-10 space-y-12">
              {EXPERIENCE.map((job, i) => (
                <Reveal key={job.id} delay={0.06 * i}>
                  <article
                    data-testid={`experience-item-${job.id}`}
                    className="relative group"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-[#050505] border-2 border-[#7DD3FC] group-hover:bg-[#7DD3FC] transition-colors duration-300"
                    />
                    <p className="font-mono-tech text-xs tracking-[0.25em] text-[#7DD3FC] uppercase">
                      {job.period}
                    </p>
                    <h3 className="font-display text-xl sm:text-2xl font-medium text-[#F5F2EE] mt-2">
                      {job.role}
                    </h3>
                    <p className="text-sm text-[#9A9895] mt-1">
                      {job.org} · {job.location}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {job.points.map((pt, j) => (
                        <li
                          key={j}
                          className="text-sm text-[#9A9895] leading-relaxed flex gap-3"
                        >
                          <span className="text-[#7DD3FC] shrink-0">—</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 order-1 lg:order-2">
            <div className="lg:sticky lg:top-28 space-y-8">
              <Reveal>
                <Overline>04 — Trajectory</Overline>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mt-4">
                  Career & <span className="italic text-[#7DD3FC]">education</span>
                </h2>
              </Reveal>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
