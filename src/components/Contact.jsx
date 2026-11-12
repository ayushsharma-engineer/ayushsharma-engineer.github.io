
import {
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

import { PERSON } from "../data/portfolio";
import { Overline, Reveal } from "./Reveal";

const CHANNELS = [
  {
    id: "email",
    label: "Email",
    value: PERSON.email,
    href: PERSON.mailto,
    Icon: Mail,
  },
  {
    id: "phone",
    label: "Phone",
    value: PERSON.phone,
    href: PERSON.phoneHref,
    Icon: Phone,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "ayushsharma2702",
    href: PERSON.linkedin,
    Icon: Linkedin,
  },
  {
    id: "github",
    label: "GitHub",
    value: "ayushsharma-engineer",
    href: PERSON.github,
    Icon: Github,
  },
];

export const Contact = () => {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-20 md:py-32 relative overflow-hidden"
      aria-label="Contact"
    >
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 w-[560px] h-[560px] rounded-full bg-[#7DD3FC]/10 blur-[140px] pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">

        <Reveal className="max-w-2xl">
          <Overline>05 — Contact</Overline>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mt-4">
            Let's build something{" "}
            <span className="italic text-[#7DD3FC]">
              intelligent
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-[#9A9895] leading-relaxed">
            Have an AI challenge, a role, or a project in mind?
            Feel free to connect with me through any of the
            following channels.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {CHANNELS.map(({ id, label, value, href, Icon }, i) => (
            <Reveal key={id} delay={i * 0.08}>
              <a
                data-testid={`contact-link-${id}`}
                href={href}
                target={
                  id === "email" || id === "phone"
                    ? undefined
                    : "_blank"
                }
                rel="noopener noreferrer"
                className="h-full min-h-[150px] flex flex-col justify-between border border-[#262422] bg-[#0A0A0A] p-6 hover:border-[#7DD3FC] hover:-translate-y-1 transition-all duration-300 ease-out group"
              >
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 flex items-center justify-center border border-[#1C1A19] text-[#9A9895] group-hover:text-[#7DD3FC] group-hover:border-[#7DD3FC] transition-colors duration-300">
                    <Icon size={19} />
                  </span>

                  <span className="font-mono-tech text-[10px] text-[#6E6C69] tracking-widest">
                    0{i + 1}
                  </span>
                </div>

                <div className="mt-6">
                  <span className="block font-mono-tech text-[10px] tracking-[0.25em] uppercase text-[#6E6C69]">
                    {label}
                  </span>

                  <span className="block text-sm text-[#F5F2EE] mt-2 break-all group-hover:text-[#7DD3FC] transition-colors">
                    {value}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
};
