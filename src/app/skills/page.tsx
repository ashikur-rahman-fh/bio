import React from "react";
import { Metadata } from "next";

import Skills from "./Skills";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "Skills | Ashikur Rahman",
    description:
      "Full-stack developer skilled in C++, Python, TypeScript, and" +
      "JavaScript. " +
      "Experienced in React, Next.js, Django, Node.js, and PostgreSQL. " +
      "Proficient in Docker, Git, testing frameworks, and modern deployment " +
      "workflows. Collaborative, adaptable, and committed to clean, " +
      "scalable code.",
    keywords:
      "Full-stack developer, C++, Python, TypeScript, JavaScript, React.js, " +
      "Next.js, Tailwind CSS, Django, Node.js, Express.js, MongoDB, " +
      "PostgreSQL, Git, GitHub, Gerrit, Docker, Vercel, Jest, " +
      "React Testing Library, software engineer, web development, " +
      "backend development, frontend development, developer portfolio"
  };
}

const WorkExperiencePage = () => {
  return (
    <React.Fragment>
      <Skills />
    </React.Fragment>
  );
};

export default WorkExperiencePage;
