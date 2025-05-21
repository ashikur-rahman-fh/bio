// src/components/Skills.tsx

import React from "react";

import { skills } from "./constants";
import { ISkill } from "./types";
import ShadowCard from "@/app/common/ShadowCard";

const SkillItems = ({ skillItems }: { skillItems: string[] }) => {
  return skillItems.map((item: string) => {
    return <li key={item}>{item}</li>;
  });
};

const SingleSkill = ({ skill }: { skill: ISkill }) => {
  return (
    <div>
      <h1 className="uppercase font-bold">{skill.category}</h1>
      <ul className="pl-8">
        <SkillItems skillItems={skill.items} />
      </ul>
    </div>
  );
};

const StyledSkill = ({ children }: { children: any }) => {
  return (
    <div className="m-4">
      <ShadowCard>{children}</ShadowCard>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="">
      <h2 className="text-justify text-lg font-bold uppercase">
        In my software development and programming career, I have developed
        expertise in building scalable applications across front-end, back-end,
        and system software, specifically for networking devices. I am
        passionate about creating robust, efficient solutions, from user
        interfaces to system-level code. My approach combines a focus on clean,
        maintainable code with performance optimization, all while collaborating
        effectively in agile environments.
      </h2>
      <div className="grid grid-cols-2 items-stretch">
        {skills.map((skill) => {
          return (
            <StyledSkill key={skill.category}>
              <SingleSkill skill={skill} />
            </StyledSkill>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
