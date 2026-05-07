import React from "react";

import { CONTACT_INFO } from "@/app/constants";

const Footer = () => {
  const startDate = "2023";

  return (
    <footer
      className={
        "page-container mt-12 border-t-2 border-pencil/70 pb-10 pt-8 text-center " +
        "font-hand text-lg text-ink/70 sm:text-xl"
      }
    >
      <p className="text-pretty">
        &copy; {startDate}–{new Date().getFullYear()} {CONTACT_INFO.name}
      </p>
      <p className="mt-3 text-pretty">
        <a
          className={
            "focus-sketch inline-block rounded-sm font-hand text-lg text-crayon-blue " +
            "underline decoration-crayon-blue/70 decoration-[3px] underline-offset-[6px] " +
            "transition-colors hover:text-crayon-blue hover:decoration-crayon-blue " +
            "sm:text-xl"
          }
          href={`mailto:${CONTACT_INFO.email}`}
        >
          {CONTACT_INFO.email}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
