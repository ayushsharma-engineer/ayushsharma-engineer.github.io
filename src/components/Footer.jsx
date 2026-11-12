import { PERSON } from "../data/portfolio";

export const Footer = () => (
  <footer
    data-testid="site-footer"
    className="border-t border-[#1C1A19] py-8"
  >
    <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-mono-tech text-[11px] tracking-[0.2em] text-[#6E6C69] uppercase">
        © {new Date().getFullYear()} {PERSON.name} — AI Engineer
      </p>
      <button
        data-testid="footer-back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="font-mono-tech text-[11px] tracking-[0.2em] text-[#9A9895] hover:text-[#F5F2EE] uppercase transition-colors duration-200"
      >
        Back to top ↑
      </button>
    </div>
  </footer>
);
