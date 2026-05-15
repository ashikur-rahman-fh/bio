"use client";

import React from "react";
import Link from "next/link";

import "./style.css";

import type { ISocialPlatformOption } from "../constants";

interface SocialProps {
  platforms: ISocialPlatformOption[];
}

const SOCIAL_LINK_CLASS =
  "social-link focus-sketch inline-flex h-11 min-h-[44px] min-w-[44px] " +
  "items-center justify-center rounded-full border-2 border-pencil bg-paper/80 " +
  "p-2 transition hover:border-crayon-blue";

const Social = ({ platforms }: SocialProps) => {
  return (
    <>
      {platforms.map((socialPlatform) => {
        const { LogoComponent, link, text } = socialPlatform;

        const label = `Ashikur Rahman's ${text} profile`;

        return (
          <span className="mx-1 inline-flex" key={socialPlatform.id}>
            <Link
              aria-label={label}
              className={SOCIAL_LINK_CLASS}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoComponent
                alt={`${text} logo (hand-drawn)`}
                className="h-[26px] w-[26px]"
              />
            </Link>
          </span>
        );
      })}
    </>
  );
};

export default Social;
