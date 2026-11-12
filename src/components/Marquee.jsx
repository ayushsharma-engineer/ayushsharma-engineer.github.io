import { MARQUEE_ITEMS } from "../data/portfolio";

export const Marquee = () => {
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div
      data-testid="marquee-strip"
      className="w-full py-4 bg-[#0C0B0A] border-y border-[#1C1A19] overflow-hidden"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {row.map((item, i) => (
          <span
            key={i}
            className="font-mono-tech text-xs tracking-[0.3em] text-[#6E6C69] px-8 whitespace-nowrap"
          >
            {item}
            <span className="text-[#7DD3FC] pl-8">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
