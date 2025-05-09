/* eslint-disable max-len */
import { IWorkExperience } from "./types";

export const Experience: IWorkExperience[] = [
  {
    organization: {
      name: "Nokia",
      website: "https://www.nokia.com/",
      logoLink: "/nokia.jpg",
    },
    start: { year: "2023", month: "Mar" },
    end: "Ongoing",
    skills: [],
    contributions: [
      "Designed and implemented a scalable centralized debug system, reducing troubleshooting time by 15% and streamlining log analysis for faster issue resolution",
      "Spearheaded type-hinting adoption across development and testing teams, improving code maintainability and enabling smarter IDE-assisted development"
    ],
  },
  {
    organization: {
      name: "Enosis Solutions",
      website: "https://www.enosisbd.com/",
      logoLink: "/enosis.jpg",
    },
    start: { year: "2021", month: "Nov" },
    end: { year: "2022", month: "Jun" },
    skills: [],
    contributions: [
      "Developed a high-throughput payment campaign system (with 20+ engineers) that increased client revenue by 33% through seamless transaction processing",
      "Optimized REST APIs and UI workflows for a healthcare platform, cutting load times and boosting user retention (3% returning users, 700+ reviews)"
    ],
  },
  {
    organization: {
      name: "SammTech",
      website: "https://www.linkedin.com/company/sammtechltd/",
      logoLink: "/sammtech.jpg",
    },
    start: { year: "2020", month: "Aug" },
    end: { year: "2021", month: "Aug" },
    skills: [],
    contributions: [
      "Refactored a multi-threaded C++ POS system, reducing CPU/memory overhead and fixing critical path bottlenecks",
      "Built Python scripts (Selenium) for web scraping and test automation, saving 10+ hours/week on manual tasks"
    ],
  },
];
