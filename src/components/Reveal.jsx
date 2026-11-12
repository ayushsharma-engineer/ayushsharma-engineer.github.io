import { motion } from "framer-motion";

export const Reveal = ({
  children,
  delay = 0,
  className = "",
  as = "div",
}) => {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Tag>
  );
};

export const Overline = ({ children, className = "" }) => (
  <p
    className={`font-mono-tech text-xs tracking-[0.25em] uppercase text-[#7DD3FC] ${className}`}
  >
    {children}
  </p>
);
