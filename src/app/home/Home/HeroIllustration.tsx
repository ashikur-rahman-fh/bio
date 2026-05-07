"use client";

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
    <DoodleCard className="w-full max-w-[min(315px,92vw)] p-3 lg:max-w-[267px]">
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
      className="max-w-[min(280px,85vw)] px-3 pt-3 pb-4 lg:max-w-[214px] lg:px-3.5 lg:pb-4"
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
    <DoodleCard className="max-w-[min(280px,85vw)] p-3 lg:max-w-[192px]" rotate="rotate-1">
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
    <DoodleCard className="max-w-[min(280px,85vw)] p-3 lg:max-w-[200px]" rotate="-rotate-2">
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

const mobileCardsStripClass =
  "flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] " +
  "lg:hidden [&::-webkit-scrollbar]:hidden";

export default function HeroIllustration() {
  const reduce = useReducedMotion();

  return (
    <div className="relative flex w-full flex-col gap-8 lg:gap-10">
      <div className="relative mx-auto w-full max-w-[min(85vw,420px)] lg:mx-0 lg:max-w-none">
        <motion.div
          className={
            "relative z-10 mx-auto w-full max-w-[min(420px,92vw)] " +
            "shadow-[0_12px_40px_-12px_rgba(23,23,23,0.18)] lg:max-w-[min(500px,86%)]"
          }
          initial={reduce ? undefined : { opacity: 0, scale: 0.97 }}
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

        <div className="hidden lg:block">
          <motion.div
            className={
              "floating-doodle absolute left-0 top-[8%] z-30 w-[min(267px,36%)] " +
              "xl:left-[2%] xl:top-[10%] xl:w-[min(283px,38%)]"
            }
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="origin-top-left scale-[0.82] xl:scale-[0.86]">
              <CardCodeEditor />
            </div>
          </motion.div>
          <motion.div
            className={
              "floating-doodle-delayed absolute right-0 top-[4%] z-30 " +
              "w-[min(214px,29%)] xl:right-[3%] xl:top-[6%]"
            }
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <div className="origin-top-right scale-[0.82] xl:scale-[0.86]">
              <CardSticky />
            </div>
          </motion.div>
          <motion.div
            className={
              "floating-doodle absolute bottom-[8%] left-0 z-30 w-[min(184px,27%)] " +
              "xl:bottom-[10%] xl:left-[3%]"
            }
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            <div className="origin-bottom-left scale-[0.82] xl:scale-[0.86]">
              <CardDeploy />
            </div>
          </motion.div>
          <motion.div
            className={
              "floating-doodle-delayed absolute bottom-0 right-0 z-30 " +
              "w-[min(194px,28%)] xl:right-[4%]"
            }
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            <div
              className={
                "origin-bottom-right translate-y-4 scale-[0.84] " +
                "xl:translate-y-5 xl:scale-[0.88]"
              }
            >
              <CardArch />
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className={mobileCardsStripClass}
        style={{ scrollSnapType: "x mandatory" }}
      >
        {cards.map((c, i) => (
          <div
            key={c.key}
            className="wobble-hover flex-shrink-0"
            style={{ scrollSnapAlign: "start" }}
          >
            <motion.div
              initial={reduce ? undefined : { opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.06 }}
            >
              {c.node}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
