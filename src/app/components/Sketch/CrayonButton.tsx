"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import {
  getSamePageHashFragment,
  pushHashUrl,
  scrollToFragment,
} from "@/lib/smoothScroll";

const MotionLink = motion.create(Link);

type Variant = "primary" | "secondary";

interface CrayonButtonProps {
  variant?: Variant;
  href?: string;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
}

const variantClasses: Record<Variant, string> = {
  primary:
    "sketch-border sketch-border-blue border-crayon-blue text-crayon-blue hover:bg-crayon-blue/5",
  secondary:
    "sketch-border sketch-border-yellow border-crayon-yellow text-ink hover:bg-crayon-yellow/10",
};

export default function CrayonButton({
  variant = "primary",
  href,
  children,
  className = "",
  type = "button",
}: CrayonButtonProps) {
  const reduce = useReducedMotion();
  const pathname = usePathname();

  const base =
    "focus-sketch inline-flex min-h-[48px] items-center justify-center px-6 py-3 " +
    "font-hand text-xl transition-colors sm:min-h-[52px]";

  const motionProps = reduce
    ? {}
    : {
      whileHover: { rotate: [-0.8, 0.9, -0.5, 0], scale: 1.02 },
      whileTap: { scale: 0.98 },
    };

  if (href) {
    return (
      <MotionLink
        {...motionProps}
        className={`${base} ${variantClasses[variant]} ${className}`}
        href={href}
        onClick={(e) => {
          const fragment = getSamePageHashFragment(pathname, href);
          if (fragment === null) {
            return;
          }
          e.preventDefault();
          pushHashUrl(href);
          scrollToFragment(fragment);
        }}
        scroll={false}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      {...motionProps}
      className={`${base} ${variantClasses[variant]} ${className}`}
      type={type}
    >
      {children}
    </motion.button>
  );
}
