"use client";

import { motion, useReducedMotion } from "framer-motion";

type UnderlineColor = "blue" | "green" | "red" | "yellow";

const strokeMap: Record<UnderlineColor, string> = {
  blue: "#1E5ACB",
  green: "#3FA34D",
  red: "#E84C3D",
  yellow: "#F6B733",
};

interface CrayonUnderlineProps {
  color?: UnderlineColor;
  className?: string;
  delay?: number;
}

export default function CrayonUnderline({
  color = "blue",
  className = "",
  delay = 0,
}: CrayonUnderlineProps) {
  const reduce = useReducedMotion();

  const stroke = strokeMap[color];

  return (
    <motion.svg
      aria-hidden
      className={`absolute -bottom-1 left-0 h-3 w-full overflow-visible ${className}`}
      preserveAspectRatio="none"
      viewBox="0 0 120 12"
    >
      <motion.path
        d="M3 8 Q30 3 60 8 T117 7"
        fill="none"
        initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        stroke={stroke}
        strokeLinecap="round"
        strokeWidth="4"
        transition={{
          duration: reduce ? 0 : 0.75,
          delay: reduce ? 0 : delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </motion.svg>
  );
}
