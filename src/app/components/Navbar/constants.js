import { CONTACT_INFO } from "@/app/constants";
import Facebook from "../LogoComponent/Facebook";
import GitHub from "../LogoComponent/GitHub";
import Gmail from "../LogoComponent/Gmail";
import LinkedIn from "../LogoComponent/LinkedIn";
import Youtube from "../LogoComponent/Youtube";

export const NAV_OPTIONS = [
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Work Experience",
    link: "/experience"
  },
  {
    text: "Skills",
    link: "/skill",
  },
  {
    text: "Contact",
    link: "/contact",
  }
];

export const SOCIAL_PLATFORMS = [
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
    link: `mailto:${CONTACT_INFO?.EMAIL}`,
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
    link: "https://www.facebook.com/ashikur.akash11/",
  },
];
