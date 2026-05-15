"use client";

import { motion, useReducedMotion } from "framer-motion";

import CrayonUnderline from "@/app/components/Sketch/CrayonUnderline";
import CrayonButton from "@/app/components/Sketch/CrayonButton";
import {
  HERO_JOB_TITLE,
  RESUME_PDF_PATH,
  SEO_LOCATION,
} from "@/app/constants";

export default function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <div className="flex min-w-0 flex-col gap-8">
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
          <h1 className="crayon-text font-hand text-[clamp(2.5rem,9vw,7rem)] leading-none text-crayon-blue">
            Ashikur{" "}
            <span className="text-ink">Rahman</span>
          </h1>
          <CrayonUnderline className="w-[104%]" color="blue" delay={0.35} />
        </motion.div>

        <p className="mt-4 font-hand text-lg leading-snug text-ink/90 sm:text-xl">
          {HERO_JOB_TITLE} at{" "}
          <span className="font-semibold text-crayon-blue">Nokia</span>
        </p>
        <p className="mt-1 font-hand text-base text-ink/75 sm:text-lg">
          {SEO_LOCATION}
        </p>

        <motion.p
          className="mt-6 max-w-readable font-body text-base leading-relaxed text-ink/85 sm:text-lg"
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.55 }}
        >
          <strong>Ashikur Rahman</strong> builds embedded systems in C++, Rust,
          and Python at Nokia in Ottawa. BSc in Computer Science & Engineering
          from AUST; placed 23rd at ICPC Dhaka Regional 2020; experienced with
          REST APIs, Docker, CI/CD, and competitive programming.
        </motion.p>

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
        className={
          "mx-auto flex w-full max-w-sm flex-col gap-4 sm:mx-0 sm:max-w-none " +
          "sm:flex-row sm:flex-wrap sm:items-center"
        }
        initial={reduce ? undefined : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
      >
        <CrayonButton className="w-full sm:w-auto" href="/#projects">
          Explore My Work &rarr;
        </CrayonButton>
        <CrayonButton
          className="w-full sm:w-auto"
          href="/#contact"
          variant="secondary"
        >
          Get In Touch
        </CrayonButton>
        <a
          className={
            "focus-sketch w-full text-center font-hand text-lg text-crayon-blue " +
            "underline decoration-crayon-blue/70 decoration-[3px] underline-offset-[6px] " +
            "transition-colors hover:text-ink sm:w-auto"
          }
          href={RESUME_PDF_PATH}
          rel="noopener noreferrer"
          target="_blank"
        >
          Download resume (PDF)
        </a>
      </motion.div>
    </div>
  );
}
