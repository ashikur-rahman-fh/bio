import React from "react";
import { Metadata } from "next";

import WorkExperience from "./WorkExperience";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Work Experience - Ashikur Rahman",
    description:
      "Ashikur has been working as a software developer over three (3) " +
      "years. " +
      "Currently working at Nokia.",
    keywords:
      "Software Developer, 3 years, three years, OOP, Object oriented " +
      "programming, design patterns, micro service architecture, embedded " +
      "software development, linux environment, gRPC, REST, Git, Gerrit",
  };
}

const WorkExperiencePage = () => {
  return (
    <React.Fragment>
      <WorkExperience />
    </React.Fragment>
  );
};

export default WorkExperiencePage;
