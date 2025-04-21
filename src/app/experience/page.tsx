import React from "react";
import { Metadata } from "next";

import WorkExperience from "./WorkExperience";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "Work Experience | Ashikur Rahman",
    description:
      "Ashikur is a professional software developer with over three " +
      "years of hands-on experience. Currently contributing to next gen " +
      "software solutions at Nokia, with expertise in embedded software " +
      "development practices.",
    keywords:
      "Ashikur Rahman, software developer, professional software engineer, " +
      "3 years experience, three years, object-oriented programming, OOP, " +
      "design patterns, microservices architecture, embedded systems, " +
      "Linux development, REST APIs, gRPC, Git, Gerrit, backend development, " +
      "distributed systems, scalable software, Nokia, Enosis Solutions, " +
      "SammTech, Jenkins, CI/CD, Infrastructure" +
      "C++, CPP, Python, Bash, Scripting, C++ developer, Python developer" +
      "Django, Django developer, JavaScript, JavaScript developer, React" +
      "React developer, Embedded software, Embedded software developer"
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
