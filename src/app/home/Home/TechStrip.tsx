"use client";

import {
  IconBoxes,
  IconBraces,
  IconCloud,
  IconCode,
  IconDatabase,
  IconFileCode,
  IconPackage,
  IconTerminal,
} from "@/app/components/Sketch/SketchGlyphs";
import { motion, useReducedMotion } from "framer-motion";

import DoodleCard from "@/app/components/Sketch/DoodleCard";
import CrayonUnderline from "@/app/components/Sketch/CrayonUnderline";

const tech = [
  { name: "React", Icon: IconBoxes, tilt: "-rotate-2" },
  { name: "Node.js", Icon: IconTerminal, tilt: "rotate-1" },
  { name: "TypeScript", Icon: IconFileCode, tilt: "rotate-2" },
  { name: "JavaScript", Icon: IconBraces, tilt: "-rotate-1" },
  { name: "Python", Icon: IconCode, tilt: "-rotate-2" },
  { name: "MongoDB", Icon: IconDatabase, tilt: "rotate-1" },
  { name: "Docker", Icon: IconPackage, tilt: "-rotate-3" },
  { name: "AWS", Icon: IconCloud, tilt: "rotate-2" },
];

const skillsGridClass =
  "flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 " +
  "[-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-3 " +
  "sm:overflow-visible md:grid-cols-4 lg:grid-cols-8 [&::-webkit-scrollbar]:hidden";

export default function TechStrip() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="skills-heading"
      className="relative mt-16 lg:mt-24"
      id="skills"
    >
      <div className="relative mx-auto max-w-4xl text-center">
        <h2
          className="crayon-text relative inline-block font-hand text-3xl text-ink sm:text-4xl"
          id="skills-heading"
        >
          Tech I work with
          <CrayonUnderline className="w-full" color="blue" delay={0.2} />
        </h2>
      </div>

      <div className="sketch-border sketch-border-blue mx-auto mt-8 max-w-5xl border-dashed bg-paper/70 p-4 sm:p-6">
        <div className={skillsGridClass}>
          {tech.map(({ name, Icon, tilt }) => (
            <motion.div
              key={name}
              className="flex-shrink-0"
              style={{ scrollSnapAlign: "start" }}
              whileHover={
                reduce
                  ? undefined
                  : { y: -4, rotate: 0, transition: { duration: 0.2 } }
              }
            >
              <DoodleCard
                className={
                  "flex h-[104px] w-[96px] flex-col items-center justify-center gap-2 " +
                  "p-3 sm:h-[120px] sm:w-[112px] md:w-auto " +
                  tilt
                }
              >
                <Icon aria-hidden className="h-8 w-8 text-crayon-blue" />
                <span className="text-center font-hand text-sm text-ink">
                  {name}
                </span>
              </DoodleCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
