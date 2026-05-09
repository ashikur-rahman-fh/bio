"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import {
  IconCloud,
  IconCpu,
  IconDatabase,
  IconMonitor,
  IconRocket,
  IconShield,
  IconWorkflow,
} from "@/app/components/Sketch/SketchGlyphs";
import { motion, useReducedMotion } from "framer-motion";

import DoodleCard from "@/app/components/Sketch/DoodleCard";

function CardCodeEditor() {
  return (
    <DoodleCard className="w-full max-w-full min-w-0 p-3 lg:max-w-[267px]">
      <div className="mb-2 flex items-center gap-1">
        <span className="h-2 w-2 rounded-full bg-crayon-red" />
        <span className="h-2 w-2 rounded-full bg-crayon-yellow" />
        <span className="h-2 w-2 rounded-full bg-crayon-green" />
        <span className="ml-2 font-mono text-[11px] text-ink/55">today.ts</span>
      </div>
      <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed text-ink">
        <span className="text-crayon-blue">function</span>{" "}
        <span className="text-crayon-green">shipWithCare</span>
        <span className="text-ink">() {"{"}</span>
        {"\n"}
        <span className="text-pencil"> {"  // calm systems, honest UX"}</span>
        {"\n"}
        <span className="text-ink"> {"  return"} </span>
        <span className="text-crayon-blue">reliability</span>
        <span className="text-ink"> + </span>
        <span className="text-crayon-red">empathy</span>
        <span className="text-ink">;</span>
        {"\n"}
        <span className="text-ink">{"}"}</span>
      </pre>
    </DoodleCard>
  );
}

function CardSticky() {
  return (
    <DoodleCard
      className="max-w-full min-w-0 px-3 pt-3 pb-4 lg:max-w-[214px] lg:px-3.5 lg:pb-4"
      rotate="-rotate-1"
      tape
    >
      <p className="crayon-text font-hand text-base font-semibold leading-snug text-ink sm:text-lg">
        Currently building toward…
      </p>
      <ul className="mt-2.5 list-disc space-y-1.5 pl-[1.1rem] font-hand text-[13px] leading-snug text-ink/90 sm:text-sm">
        <li>
          Systems that stay clear long after ship day—not only in demos.
        </li>
        <li>
          Tools people trust because they quietly respect time.
        </li>
        <li>
          Reliability checks before they become outages.
        </li>
      </ul>
    </DoodleCard>
  );
}

function CardDeploy() {
  return (
    <DoodleCard className="max-w-full min-w-0 p-3 lg:max-w-[192px]" rotate="rotate-1">
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-xs text-ink/80">&gt; Deploying...</span>
        <IconRocket aria-hidden className="h-5 w-5 text-crayon-red" />
      </div>
      <div className="mt-3 h-3 w-full rounded-full border-2 border-ink/20 bg-pencil/40">
        <div className="relative h-full w-[90%] rounded-full bg-crayon-green" />
      </div>
      <p className="mt-1 text-right font-scribble text-lg text-crayon-green">
        ~90%
      </p>
    </DoodleCard>
  );
}

function CardArch() {
  return (
    <DoodleCard className="max-w-full min-w-0 p-3 lg:max-w-[200px]" rotate="-rotate-2">
      <div className="flex items-center justify-center gap-2 text-crayon-blue">
        <IconMonitor aria-hidden className="h-6 w-6" />
        <span className="font-hand text-xl">&rarr;</span>
        <IconCpu aria-hidden className="h-6 w-6" />
        <span className="font-hand text-xl">&rarr;</span>
        <IconDatabase aria-hidden className="h-6 w-6" />
      </div>
      <div className="mt-2 flex flex-wrap justify-center gap-1.5 font-hand text-xs text-ink/80 sm:text-sm">
        <span className="rounded-full border border-pencil px-2 py-0.5">
          <IconCloud className="mr-1 inline h-4 w-4 text-crayon-blue" />
          Cloud
        </span>
        <span className="rounded-full border border-pencil px-2 py-0.5">
          <IconShield className="mr-1 inline h-4 w-4 text-crayon-green" />
          Auth
        </span>
        <span className="rounded-full border border-pencil px-2 py-0.5">
          <IconWorkflow className="mr-1 inline h-4 w-4 text-crayon-yellow" />
          CI/CD
        </span>
      </div>
    </DoodleCard>
  );
}

const cards = [
  { key: "code", node: <CardCodeEditor /> },
  { key: "sticky", node: <CardSticky /> },
  { key: "deploy", node: <CardDeploy /> },
  { key: "arch", node: <CardArch /> },
];

const FLOAT_LAYOUT = {
  mobile: {
    shell: "pointer-events-none md:hidden",
    code: {
      wrapper:
        "floating-doodle absolute left-0 top-[7%] z-30 w-[min(158px,46%)] max-w-[46%]",
      inner: "origin-top-left scale-[0.68]",
    },
    sticky: {
      wrapper:
        "floating-doodle-delayed absolute right-0 top-[2%] z-30 " +
        "w-[min(172px,50%)] max-w-[50%]",
      inner: "origin-top-right scale-[0.66]",
    },
    deploy: {
      wrapper:
        "floating-doodle absolute bottom-[24%] left-0 z-30 " +
        "w-[min(142px,41%)] max-w-[41%]",
      inner: "origin-bottom-left scale-[0.68]",
    },
    arch: {
      wrapper:
        "floating-doodle-delayed absolute bottom-[14%] right-0 z-30 " +
        "w-[min(150px,44%)] max-w-[44%]",
      inner: "origin-bottom-right translate-y-1 scale-[0.66]",
    },
  },
  desktop: {
    shell: "pointer-events-none hidden lg:block",
    code: {
      wrapper:
        "floating-doodle absolute left-0 top-[8%] z-30 w-[min(267px,36%)] " +
        "xl:left-[2%] xl:top-[10%] xl:w-[min(283px,38%)]",
      inner: "origin-top-left scale-[0.82] xl:scale-[0.86]",
    },
    sticky: {
      wrapper:
        "floating-doodle-delayed absolute right-0 top-[4%] z-30 " +
        "w-[min(214px,29%)] xl:right-[3%] xl:top-[6%]",
      inner: "origin-top-right scale-[0.82] xl:scale-[0.86]",
    },
    deploy: {
      wrapper:
        "floating-doodle absolute bottom-[8%] left-0 z-30 w-[min(184px,27%)] " +
        "xl:bottom-[10%] xl:left-[3%]",
      inner: "origin-bottom-left scale-[0.82] xl:scale-[0.86]",
    },
    arch: {
      wrapper:
        "floating-doodle-delayed absolute bottom-0 right-0 z-30 " +
        "w-[min(194px,28%)] xl:right-[4%]",
      inner:
        "origin-bottom-right translate-y-4 scale-[0.84] " +
        "xl:translate-y-5 xl:scale-[0.88]",
    },
  },
} as const;

function FloatingHeroCards({
  layout,
  reduceMotion,
}: {
  layout: keyof typeof FLOAT_LAYOUT;
  reduceMotion: boolean;
}) {
  const L = FLOAT_LAYOUT[layout];

  return (
    <div className={`${L.shell} min-w-0`}>
      <motion.div
        className={L.code.wrapper}
        initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className={`${L.code.inner} wobble-hover`}>
          <CardCodeEditor />
        </div>
      </motion.div>
      <motion.div
        className={L.sticky.wrapper}
        initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
      >
        <div className={`${L.sticky.inner} wobble-hover`}>
          <CardSticky />
        </div>
      </motion.div>
      <motion.div
        className={L.deploy.wrapper}
        initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
      >
        <div className={`${L.deploy.inner} wobble-hover`}>
          <CardDeploy />
        </div>
      </motion.div>
      <motion.div
        className={L.arch.wrapper}
        initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
      >
        <div className={`${L.arch.inner} wobble-hover`}>
          <CardArch />
        </div>
      </motion.div>
    </div>
  );
}

function CardColumnWrap({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[min(420px,100%)]">{children}</div>
  );
}

export default function HeroIllustration() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <div className="relative flex min-w-0 w-full flex-col gap-8 lg:gap-10">
      <div
        className={
          "relative mx-auto min-w-0 w-full max-w-[min(85vw,420px)] overflow-visible " +
          "pb-14 md:pb-0 lg:mx-0 lg:max-w-none"
        }
      >
        <motion.div
          className={
            "relative z-10 mx-auto w-full max-w-[min(420px,92vw)] " +
            "shadow-[0_12px_40px_-12px_rgba(23,23,23,0.18)] lg:max-w-[min(500px,86%)]"
          }
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <DoodleCard className="overflow-hidden bg-paper p-2 sm:p-3">
            <Image
              priority
              alt="Hand-drawn illustration of Ashikur Rahman coding at a laptop"
              className="h-auto w-full object-contain"
              height={682}
              sizes="(max-width: 1024px) 85vw, 560px"
              src="/bio_dp.png"
              width={1024}
            />
          </DoodleCard>
        </motion.div>

        <FloatingHeroCards layout="mobile" reduceMotion={reduceMotion} />
        <FloatingHeroCards layout="desktop" reduceMotion={reduceMotion} />
      </div>

      <div
        className={
          "hidden min-w-0 w-full md:grid lg:hidden md:grid-cols-2 " +
          "md:justify-items-center md:gap-4"
        }
      >
        {cards.map((c, i) => (
          <CardColumnWrap key={c.key}>
            <div className="wobble-hover">
              <motion.div
                initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.06 }}
              >
                {c.node}
              </motion.div>
            </div>
          </CardColumnWrap>
        ))}
      </div>
    </div>
  );
}
