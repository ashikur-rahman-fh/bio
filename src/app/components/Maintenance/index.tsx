import React from "react";
import Link from "next/link";

import { SOCIAL_PLATFORMS } from "../Navbar/constants";

const Maintenance = () => {
  const linkedIn = SOCIAL_PLATFORMS.find((p) => p.id === "linkedin");

  return (
    <div
      aria-live="polite"
      className="relative z-40 border-b-2 border-pencil/60 bg-crayon-yellow/15"
      id="informational-banner"
    >
      <div className="page-container relative py-4 pr-2 sm:py-5">
        <div
          aria-hidden
          className="absolute left-[12%] top-1 z-[1] h-5 w-16 rounded-sm bg-crayon-yellow/80 opacity-90 shadow-sm sm:left-[18%]"
          style={{ transform: "rotate(-4deg)" }}
        />
        <div
          aria-hidden
          className="absolute right-[10%] top-1 z-[1] h-5 w-16 rounded-sm bg-crayon-yellow/80 opacity-90 shadow-sm sm:right-[15%]"
          style={{ transform: "rotate(5deg)" }}
        />
        <div className="relative rounded-md border-2 border-ink/15 bg-paper/95 px-4 py-4 shadow-sm sm:px-8">
          <h2 className="crayon-text text-center font-hand text-2xl font-semibold text-ink sm:text-3xl">
            This website is under construction
          </h2>
          <p className="mt-3 text-center font-hand text-lg leading-snug text-ink/85 sm:text-xl">
            Please visit my{" "}
            <Link
              className={
                "focus-sketch rounded-sm font-semibold text-crayon-blue " +
                "underline decoration-crayon-blue/70 decoration-[3px] underline-offset-[6px] " +
                "transition-colors hover:text-crayon-blue hover:decoration-crayon-blue"
              }
              href={linkedIn?.link ?? "#"}
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn profile
            </Link>{" "}
            to learn more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
