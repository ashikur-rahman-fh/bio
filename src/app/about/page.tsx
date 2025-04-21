import React from "react";
import { Metadata } from "next";

import About from "./About";

import { DEFAULT_METADATA } from "../constants";

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...DEFAULT_METADATA,
    title: "About | Ashikur Rahman",
    description:
      "Learn more about Ashikur Rahman, a dedicated software engineer and " +
      "competitive programmer. He ranked among the top 1% in Google Code Jam " +
      "Round 2A, placing 257th out of over 30,000 participants globally.",
    keywords:
      "About Ashikur Rahman, Software Engineer Background, Competitive " +
      "Programmer, Google Code Jam, ICPC, Engineering Journey, Codeforces " +
      "Ranking, Developer Profile, Technical Achievements, Global Competitions",
  };
};

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
