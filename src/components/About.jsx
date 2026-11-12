
import {
  Mail,
  GraduationCap,
  CalendarDays,
  UserRound,
} from "lucide-react";

import { ABOUT, PERSON } from "../data/portfolio";
import { Overline, Reveal } from "./Reveal";

const DETAILS = [
  {
    label: "Name",
    value: "Ayush Sharma",
    Icon: UserRound,
  },
  {
    label: "Degree",
    value: "B.Tech CSE (AI)",
    Icon: GraduationCap,
  },
  {
    label: "University",
    value: "Poornima Institute of Engineering & Technology",
    Icon: GraduationCap,
  },
  {
    label: "Graduation Year",
    value: "2026",
    Icon: CalendarDays,
  },
  {
    label: "Email",
    value: PERSON.email,
    href: PERSON.mailto,
    Icon: Mail,
  },
];

export const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-20 md:py-28 relative overflow-hidden"
      aria-label="About Ayush Sharma"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#7DD3FC]/[0.04] blur-[140px] pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20 relative">

        {/* Section Heading */}
        <Reveal className="max-w-2xl mb-14">
          <Overline>01 — About</Overline>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mt-5 text-[#EAF6FF]">
            A Little About{" "}
            <span className="italic text-[#7DD3FC]">
              Me
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-[#94A9BE] leading-relaxed max-w-xl">
            A little about my journey, technical background,
            and the systems I'm passionate about building.
          </p>
        </Reveal>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left Column - About Description */}
          <Reveal className="h-full">
            <div className="h-full border border-[#263F55] bg-[#0A111B]/70 rounded-xl p-6 sm:p-9">

              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono-tech text-xs tracking-[0.2em] text-[#7DD3FC]">
                  ABOUT ME
                </span>
                <span className="h-px flex-1 bg-[#263F55]" />
              </div>

              <div className="space-y-7">
                {ABOUT.bio.map((paragraph, index) => (
                  <div key={index}>

                    

                    <p
                      data-testid={`about-bio-para-${index}`}
                      className="text-sm sm:text-base text-[#A8B8C9] leading-[1.9]"
                    >
                      {paragraph}
                    </p>

                  </div>
                ))}
              </div>

              {/* Bottom Label */}
              <div className="mt-9 pt-5 border-t border-[#263F55]">
                <p className="font-mono-tech text-[10px] tracking-[0.2em] uppercase text-[#647F99]">
                  Building ideas into intelligent solutions
                </p>
              </div>

            </div>
          </Reveal>

          {/* Right Column - Information Cards */}
          <div className="flex flex-col gap-4">

            <Reveal>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono-tech text-xs tracking-[0.2em] text-[#7DD3FC]">
                  PERSONAL INFORMATION
                </span>
                <span className="h-px flex-1 bg-[#263F55]" />
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {DETAILS.map(({ label, value, Icon, href }, index) => (
                <Reveal key={label} delay={index * 0.07}>
                  <div className="h-full min-h-[120px] border border-[#263F55] bg-[#0A111B]/80 rounded-xl p-5 hover:border-[#7DD3FC]/60 hover:bg-[#101D2B] transition-all duration-300">

                    <div className="flex items-center gap-2 mb-4">
                      <Icon
                        size={15}
                        className="text-[#7DD3FC]"
                      />

                      <span className="font-mono-tech text-[10px] tracking-[0.2em] uppercase text-[#647F99]">
                        {label}
                      </span>
                    </div>

                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-semibold text-[#EAF6FF] hover:text-[#7DD3FC] transition-colors break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-[#EAF6FF] leading-relaxed">
                        {value}
                      </p>
                    )}

                  </div>
                </Reveal>
              ))}

            </div>

            {/* Availability Status */}
            <Reveal delay={0.4}>
              <div className="border border-[#164C42] bg-[#071914]/70 rounded-xl p-6 hover:border-emerald-400/60 transition-all duration-300">

                <div className="font-mono-tech text-[10px] tracking-[0.2em] uppercase text-[#647F99] mb-4">
                  Status
                </div>

                <div className="flex items-center gap-3">

                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                  </span>

                  <p className="text-sm font-semibold text-emerald-400">
                    Open to Full-Time Opportunities
                  </p>

                </div>

              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
};
