import React from "react";

import Gmail from "@/app/components/LogoComponent/Gmail";
import LinkedIn from "@/app/components/LogoComponent/LinkedIn";

import DoodleCard from "@/app/components/Sketch/DoodleCard";

import { CONTACT_INFO } from "@/app/constants";
import { SOCIAL_PLATFORMS } from "@/app/components/Navbar/constants";

const sketchLinkClass =
  "focus-sketch inline-block rounded-sm font-hand text-lg text-crayon-blue " +
  "underline decoration-crayon-blue/70 decoration-[3px] underline-offset-[6px] " +
  "transition-colors hover:text-crayon-blue hover:decoration-crayon-blue " +
  "sm:text-xl";

const ContactInfo = () => {
  const linkedIn = SOCIAL_PLATFORMS.find((social) => social.id === "linkedin");

  return (
    <DoodleCard className="w-full max-w-md p-8">
      <h2 className="crayon-text mb-6 text-center font-hand text-2xl font-semibold text-ink sm:text-3xl md:text-left">
        Reach me here
      </h2>
      <div className="flex flex-col gap-7 font-hand text-lg leading-snug text-ink/85 sm:text-xl">
        <div className="flex items-start gap-4">
          <Gmail aria-hidden className="mt-1 h-9 w-9 flex-shrink-0 opacity-90" />
          <a
            className={`${sketchLinkClass} break-all`}
            href={`mailto:${CONTACT_INFO?.email}`}
          >
            {CONTACT_INFO?.email}
          </a>
        </div>

        <div className="flex items-start gap-4">
          <LinkedIn aria-hidden className="mt-1 h-9 w-9 flex-shrink-0 opacity-90" />
          <a
            className={`${sketchLinkClass} break-all`}
            href={linkedIn?.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            linkedin.com/in/ashikur-5h/
          </a>
        </div>
      </div>
    </DoodleCard>
  );
};

export default ContactInfo;
