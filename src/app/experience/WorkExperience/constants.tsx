import { IWorkExperience } from "./types";

export const Experience: IWorkExperience[] = [
  {
    organization: {
      name: "Nokia",
      website: "https://www.nokia.com/",
      logoLink: "/nokia-crayon.png",
      logoWidth: 1024,
      logoHeight: 512,
    },
    start: { year: "2023", month: "Mar" },
    end: "Current",
    skills: [],
  },
  {
    organization: {
      name: "Enosis Solutions",
      website: "https://www.enosisbd.com/",
      logoLink: "/enosis-crayon.png",
      logoWidth: 1024,
      logoHeight: 512,
    },
    start: { year: "2021", month: "Nov" },
    end: { year: "2022", month: "Jun" },
    skills: [],
  },
  {
    organization: {
      name: "SammTech",
      website: "https://www.linkedin.com/company/sammtechltd/",
      logoLink: "/sammtech-crayon.png",
      logoWidth: 1024,
      logoHeight: 1024,
    },
    start: { year: "2020", month: "Aug" },
    end: { year: "2021", month: "Aug" },
    skills: [],
  },
];
