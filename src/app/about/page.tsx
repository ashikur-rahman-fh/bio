import React from "react";
import { Metadata } from "next";

import About from "./About";

import { DEFAULT_METADATA } from "../constants";

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...DEFAULT_METADATA,
    title: "About - Ashikur Rahman",
    description:
      "Ashikur Rahman stands 257 out of more than 30000 participants in google codejam round 2A",
  };
}

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
