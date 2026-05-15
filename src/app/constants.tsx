import type { Metadata } from "next";

import { IContact } from "./types";

export const SITE_URL = "https://www.itsashikur.com";

export const RESUME_PDF_PATH = "/AshikurRahmanResume.pdf";

export const CONTACT_INFO: IContact = {
  name: "Ashikur Rahman",
  email: "ashikurrahmanvar@gmail.com",
  phone: "+1 (343) 297 3525",
};

export const SEO_JOB_TITLE = "Jr. Embedded C/C++ Software Developer";

/** Shown on the home hero (without Jr. / Embedded prefix). */
export const HERO_JOB_TITLE = "Software Developer";

export const SEO_LOCATION = "Ottawa, Ontario, Canada";

export const SEO_KEYWORDS_LIST = [
  // Branded
  "Ashikur Rahman",
  "Ashikur Rahman Nokia",
  "Ashikur Rahman embedded developer",
  "Ashikur Rahman Ottawa",
  "Ashikur Rahman AUST",
  "Ashikur Rahman software developer",
  "Ashikur Rahman software engineer",
  "Ashikur Rahman portfolio",
  "Ashikur Rahman LinkedIn",
  "Ashikur Rahman GitHub",
  "Ashikur Rahman Canada",
  "itsashikur.com",
  // Role & experience
  "Jr. Embedded C/C++ Software Developer",
  "embedded software developer",
  "C/C++ developer",
  "embedded systems",
  "software developer",
  "software engineer",
  "software developer Nokia",
  "work experience",
  "professional experience",
  "developer portfolio",
  // Location
  "Ottawa Ontario",
  "Ottawa software developer",
  "Canada software engineer",
  // Skills & stack
  "data structures",
  "algorithms",
  "C++",
  "Rust",
  "Python",
  "Bash",
  "Django REST framework",
  "React",
  "Node.js",
  "Docker",
  "CI/CD",
  "Jenkins",
  "Gerrit",
  "REST API",
  "Linux",
  "Git",
  "system programming",
  "multi-threaded C++",
  "structured logging",
  // Work domains
  "HIPAA compliant",
  "payment systems",
  "scalable software",
  // Education
  "AUST",
  "Ahsanullah University of Science and Technology",
  "Computer Science and Engineering",
  // Competitive programming (resume-verified)
  "competitive programming",
  "programming contests",
  "ICPC",
  "ICPC Dhaka Regional 2020",
  "ICPC Dhaka",
  // Employers
  "Nokia developer",
  "Enosis Solutions",
  "SammTech",
  "ACM Lab AUST",
];

export const SEO_KEYWORDS = SEO_KEYWORDS_LIST.join(", ");

export const SEO_TITLE =
  "Ashikur Rahman | Jr. Embedded C/C++ Developer at Nokia";

export const SEO_DESCRIPTION =
  "Ashikur Rahman — Jr. Embedded C/C++ Software Developer at Nokia in Ottawa, " +
  "Ontario. C++, Rust, Python, embedded systems, ICPC. Portfolio, experience & contact.";

export const SITE_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: CONTACT_INFO.name, url: SITE_URL }],
  creator: CONTACT_INFO.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_CA",
    url: SITE_URL,
    siteName: CONTACT_INFO.name,
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: [
      {
        url: "/bio_dp.png",
        width: 1200,
        height: 1200,
        alt: "Ashikur Rahman – Jr. Embedded C/C++ software developer portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: ["/bio_dp.png"],
  },
};
