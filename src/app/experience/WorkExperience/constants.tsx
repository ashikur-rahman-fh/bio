/* eslint-disable max-len */
import { IWorkExperience } from "./types";

export const Experience: IWorkExperience[] = [
  {
    name: "Nokia",
    website: "https://www.nokia.com/",
    logoLink: "/nokia.jpg",
    start: { year: "2023", month: "Mar" },
    end: "Ongoing",
    role: "Embedded Software Developer",
    skills: [],
    story: [
      "I have been working at Nokia for the past couple of years, primarily as part of the Infrastructure team.",
      "My main responsibility has been the development and maintenance of the logging and tracing system.",
      "In addition to that, I have contributed to various internal tools designed to support our development teams, particularly tools that enhance the productivity of my own team.",
      "Soon after joining, I was introduced to a microservices architecture and quickly realized the critical role that logging and tracing play in such a distributed environment.",
      "I had the opportunity to work with the 1830 Photonic Service Switch (PSS), a cutting-edge optical transport platform used in high-performance and high-speed networking systems.",
      "It has been incredibly rewarding to make meaningful and valuable contributions to these systems.",
    ]
  },
  {
    name: "Enosis Solutions",
    website: "https://www.enosisbd.com/",
    logoLink: "/enosis.jpg",
    start: { year: "2021", month: "Nov" },
    end: { year: "2022", month: "Jun" },
    role: "Software Engineer",
    skills: [],
    story: [
      "I started working at Enosis Solutions right after my graduation.",
      "I was part of a team developing a Practice Management Software that handled administrative tasks such as patient management, scheduling, billing, and claims processing.",
      "I worked there for about a year, gaining valuable experience in a fast-paced environment while collaborating closely with a startup client.",
      "At Enosis, I worked as a full-stack software engineer, contributing to both frontend and backend development.",
      "I had the opportunity to tackle several challenging backend tasks, which significantly strengthened my technical skills and remain a point of pride in my early career.",
    ]
  },
  {
    name: "SammTech",
    website: "https://www.linkedin.com/company/sammtechltd/",
    logoLink: "/sammtech.jpg",
    start: { year: "2020", month: "Aug" },
    end: { year: "2021", month: "Aug" },
    role: "Software Engineer Intern",
    skills: [],
    story: [
      "During the final year of my bachelor's studies, I had the opportunity to work as a Software Engineer Intern at SammTech.",
      "I was involved in the development of a Point of Sale (POS) system, which exposed me to real-world software development challenges.",
      "The project included solving complex problems related to scheduling and inventory management, requiring the practical application of algorithms and data structures.",
      "This internship was a valuable learning experience and helped me bridge the gap between academic knowledge and industry practices.",
    ]
  },
];
