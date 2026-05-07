import React from "react";

import { CONTACT_INFO } from "@/app/constants";
import Facebook from "../LogoComponent/Facebook";
import GitHub from "../LogoComponent/GitHub";
import Gmail from "../LogoComponent/Gmail";
import LinkedIn from "../LogoComponent/LinkedIn";
import Youtube from "../LogoComponent/Youtube";

import { LogoProps } from "@/app/types";

export interface INavbarOptions {
  text: string;
  href: string;
}

export interface ISocialPlatformOption {
  id: string;
  LogoComponent: React.ComponentType<LogoProps>;
  text: string;
  link: string;
}

export const NAV_ITEMS: INavbarOptions[] = [
  { text: "Home", href: "/" },
  { text: "Projects", href: "/experience" },
  { text: "Skills", href: "/#skills" },
  // { text: "About", href: "/about" }, // disabled — restore when route is live
  { text: "Blog", href: "/#blog" },
  { text: "Contact", href: "/contact" },
];

export const SOCIAL_PLATFORMS: ISocialPlatformOption[] = [
  {
    id: "linkedin",
    LogoComponent: LinkedIn,
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/ashikur-5h/",
  },
  {
    id: "github",
    LogoComponent: GitHub,
    text: "GitHub",
    link: "https://github.com/ashikur-rahman-fh",
  },
  {
    id: "gmail",
    LogoComponent: Gmail,
    text: "Gmail",
    link: `mailto:${CONTACT_INFO?.email}`,
  },
  {
    id: "youtube",
    LogoComponent: Youtube,
    text: "Youtube",
    link: "https://www.youtube.com/channel/UC4VrGt8FLMlaCgjLtlSoSGA",
  },
  {
    id: "facebook",
    LogoComponent: Facebook,
    text: "Facebook",
    link: "https://www.facebook.com/ashikur.fh/",
  },
];
