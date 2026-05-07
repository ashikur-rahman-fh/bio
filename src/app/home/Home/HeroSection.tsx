"use client";

import { motion, useReducedMotion } from "framer-motion";

import CrayonUnderline from "@/app/components/Sketch/CrayonUnderline";
import CrayonButton from "@/app/components/Sketch/CrayonButton";

export default function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="crayon-text font-hand text-2xl text-ink sm:text-3xl">
          Hi, I&apos;m
        </p>
        <motion.div
          className="relative mt-2 inline-block"
          initial={reduce ? undefined : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="crayon-text font-hand text-[clamp(3rem,10vw,7rem)] leading-none text-crayon-blue">
            Ashikur
          </h1>
          <CrayonUnderline className="w-[104%]" color="blue" delay={0.35} />
        </motion.div>

        <motion.p
          className="mt-8 max-w-readable font-hand text-2xl leading-snug text-ink sm:text-3xl lg:text-4xl"
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
        >
          I build{" "}
          <span className="crayon-underline crayon-underline-green relative z-0 font-semibold">
            scalable software
          </span>{" "}
          with logic &{" "}
          <span className="crayon-underline crayon-underline-red relative z-0 font-semibold">
            creativity
          </span>
          .
        </motion.p>

        <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-sm text-pencil sm:text-base">
          <span className="text-ink/70">
            {"// Turning ideas into real-world impact"}
          </span>
          <span className="font-hand text-lg text-crayon-green">&lt;/&gt;</span>
        </div>
      </div>

      <motion.div
        className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
        initial={reduce ? undefined : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
      >
        <CrayonButton href="/#projects">
          Explore My Work &rarr;
        </CrayonButton>
        <CrayonButton href="/#contact" variant="secondary">
          Get In Touch
        </CrayonButton>
      </motion.div>
    </div>
  );
}
