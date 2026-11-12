
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header
      data-testid="nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-[#050505]/85 backdrop-blur-xl border-b border-[#262422]/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20 h-16 flex items-center justify-between"
        aria-label="Primary"
      >
        <button
          data-testid="nav-logo-monogram"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="flex items-center gap-3 group"
          aria-label="Back to top"
        >
          <span className="w-9 h-9 flex items-center justify-center border border-[#7DD3FC] rounded-md font-display font-bold text-sm text-[#F5F2EE] shadow-[0_0_16px_rgba(122,23,52,0.25)] group-hover:shadow-[0_0_24px_rgba(122,23,52,0.45)] transition-shadow duration-300">
            AS
          </span>

          <span className="hidden sm:block font-mono-tech text-[11px] tracking-[0.2em] text-[#9A9895] uppercase">
            Ayush Sharma
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              onClick={() => go(l.id)}
              className="text-sm text-[#9A9895] hover:text-[#F5F2EE] transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </button>
          ))}

          <a
            data-testid="nav-cta-resume"
            href="/resume.pdf"
            download="Ayush_Sharma_Resume.pdf"
            className="inline-flex items-center gap-2 text-sm px-5 py-2 border border-[#7DD3FC] text-[#F5F2EE] hover:bg-[#7DD3FC] transition-colors duration-300 tracking-wide"
          >
            Download Resume
            <Download size={15} />
          </a>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          className="md:hidden text-[#F5F2EE] p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-[#262422]/60 bg-[#050505]/95 backdrop-blur-xl"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  data-testid={`nav-mobile-link-${l.id}`}
                  onClick={() => go(l.id)}
                  className="text-left py-3 text-base text-[#9A9895] hover:text-[#F5F2EE] transition-colors duration-200 border-b border-[#1C1A19] last:border-0"
                >
                  {l.label}
                </button>
              ))}

              <a
                href="/resume.pdf"
                download="Ayush_Sharma_Resume.pdf"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 bg-[#7DD3FC] hover:bg-[#38BDF8] text-[#F5F2EE] px-5 py-3 text-sm transition-colors duration-300"
              >
                Download Resume
                <Download size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
