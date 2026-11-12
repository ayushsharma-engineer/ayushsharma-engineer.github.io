
  import { useRef } from "react";
  import { motion, useScroll, useTransform } from "framer-motion";
  import { ArrowUpRight, Download, Mail } from "lucide-react";
  import { HERO, MEDIA, PERSON } from "../data/portfolio";

  const lineReveal = {
    hidden: { y: "110%", opacity: 0 },
    show: (i) => ({
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.9,
        delay: 0.25 + i * 0.14,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  export const Hero = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });

    const videoY = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, -30]);

    const go = (id) =>
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
      <section
        id="home"
        ref={ref}
        data-testid="hero-section"
        className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#05080D]"
        aria-label="Introduction"
      >
        {/* Background effects */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(125,211,252,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.025) 1px, transparent 1px)",
            backgroundSize: "65px 65px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 90%)",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute -top-40 right-0 w-[650px] h-[650px] rounded-full bg-[#38BDF8]/10 blur-[160px] pointer-events-none"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full bg-[#0EA5E9]/10 blur-[150px] pointer-events-none"
        />

        {/* Main content */}
        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 sm:px-12 lg:px-20">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">

            {/* Left content */}
            <motion.div
              style={{ y: textY }}
              className="lg:col-span-7 space-y-8"
            >
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="flex items-center gap-3"
              >
                <span className="w-8 h-px bg-[#7DD3FC]" />

                <p
                  data-testid="hero-eyebrow"
                  className="font-mono-tech text-[11px] sm:text-xs tracking-[0.22em] uppercase text-[#7DD3FC]"
                >
                  SOFTWARE ENGINEER · AI ENGINEER 
                </p>
              </motion.div>

              {/* Headline */}
              <h1
                data-testid="hero-headline"
                className="font-display font-extrabold tracking-[-0.065em] leading-[0.91] text-[#EAF6FF]"
              >
                {HERO.lines.map((line, i) => (
                  <span
                    key={line}
                    className="block overflow-hidden pb-2"
                  >
                    <motion.span
                      custom={i}
                      variants={lineReveal}
                      initial="hidden"
                      animate="show"
                      className={`block text-[clamp(4rem,9vw,8rem)] ${
                        i === 1
                          ? "text-[#7DD3FC] italic"
                          : "text-[#EAF6FF]"
                      }`}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h1>
             <motion.div
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.65 }}
  className="flex flex-wrap items-center gap-3"
>
  <span className="relative flex h-2.5 w-2.5">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
  </span>

  <span className="font-mono-tech text-xs tracking-[0.15em] uppercase text-emerald-400">
    Available for Opportunities
  </span>

  <span className="text-[#475569]">·</span>

  <span className="text-xs text-[#94A3B8]">
    AI/ML & Software Engineering
  </span>
</motion.div>
              {/* Introduction */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                data-testid="hero-intro"
                className="max-w-xl text-base sm:text-lg text-[#94A3B8] leading-[1.9]"
              >
                {HERO.intro}
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.85 }}
                className="flex flex-wrap items-center gap-4"
              >
                <button
                  data-testid="hero-explore-cta"
                  onClick={() => go("projects")}
                  className="group inline-flex items-center gap-3 rounded-lg bg-[#7DD3FC] hover:bg-[#38BDF8] text-[#05080D] px-7 py-4 text-sm font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(125,211,252,0.15)] hover:shadow-[0_0_35px_rgba(125,211,252,0.3)] hover:-translate-y-1"
                >
                  Explore My Work

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

                <button
                  data-testid="hero-about-cta"
                  onClick={() => go("about")}
                  className="inline-flex items-center gap-3 rounded-lg border border-[#263F55] bg-[#0A111B]/70 hover:border-[#7DD3FC] hover:bg-[#101D2B] text-[#EAF6FF] px-7 py-4 text-sm font-medium transition-all duration-300 hover:-translate-y-1"
                >
                  About Me
                </button>
              </motion.div>

              {/* Contact information */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.05 }}
                className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-3"
                data-testid="hero-contact-line"
              >
                <a
                  href={PERSON.mailto}
                  className="inline-flex items-center gap-2 font-mono-tech text-[11px] text-[#64748B] hover:text-[#7DD3FC] transition-colors"
                >
                  <Mail size={14} />
                  {PERSON.email}
                </a>

                <span className="hidden sm:block w-1 h-1 rounded-full bg-[#334155]" />

                <a
                  href={PERSON.phoneHref}
                  className="font-mono-tech text-[11px] text-[#64748B] hover:text-[#7DD3FC] transition-colors"
                >
                  {PERSON.phone}
                </a>
              </motion.div>
            </motion.div>

            {/* Right portrait */}
            <motion.div
              style={{ y: videoY }}
              initial={{ opacity: 0, scale: 0.94, x: 25 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-5 relative flex justify-center lg:justify-end"
            >
              {/* Outer glow */}
              <div
                aria-hidden="true"
                className="absolute inset-8 bg-[#38BDF8]/15 blur-[90px] rounded-full"
              />

              <div className="relative w-full max-w-[480px]">

                {/* Image frame */}
                <div className="relative rounded-2xl overflow-hidden border border-[#7DD3FC]/20 bg-[#0A111B] shadow-[0_25px_80px_rgba(0,0,0,0.5)]">

                  <video
                    data-testid="hero-video-player"
                    className="w-full aspect-[4/3] object-cover block"
                    src={MEDIA.heroVideo}
                    poster={MEDIA.heroPoster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label="Portrait video of Ayush Sharma"
                  />

                  {/* Image overlay */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#05080D]/50 via-transparent to-transparent"
                  />

                  {/* Bottom label */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex items-center justify-between">
                    <div>
                      <p className="font-mono-tech text-[10px] tracking-[0.25em] text-[#7DD3FC] uppercase">
                        
                      </p>
                      <p className="text-sm text-[#EAF6FF] mt-1 font-medium">
                        Ayush Sharma
                      </p>
                    </div>

                    <div className="w-9 h-9 rounded-full border border-[#7DD3FC]/40 bg-[#05080D]/60 flex items-center justify-center">
                      <ArrowUpRight size={17} className="text-[#7DD3FC]" />
                    </div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div
                  aria-hidden="true"
                  className="absolute -top-3 -right-3 w-16 h-16 border-t border-r border-[#7DD3FC]/50 rounded-tr-2xl pointer-events-none"
                />

                <div
                  aria-hidden="true"
                  className="absolute -bottom-3 -left-3 w-16 h-16 border-b border-l border-[#7DD3FC]/50 rounded-bl-2xl pointer-events-none"
                />

              </div>
            </motion.div>
          </div>

          {/* Bottom section indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="hidden md:flex items-center justify-between border-t border-[#1E293B] mt-20 pt-6"
          >
            <p className="font-mono-tech text-[10px] tracking-[0.25em] text-[#475569] uppercase">
              Based in India · Open to Opportunities
            </p>

            <button
              onClick={() => go("about")}
              className="font-mono-tech text-[10px] tracking-[0.2em] text-[#7DD3FC] hover:text-white transition-colors"
            >
              SCROLL TO EXPLORE ↓
            </button>
          </motion.div>

        </div>
      </section>
    );
  };
