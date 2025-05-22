// src/components/Skills.tsx

import React from "react";

import { skills } from "./constants";
import { ISkill } from "./types";
import ShadowCard from "@/app/common/ShadowCard";

const SkillItems = ({ skillItems }: { skillItems: string[] }) => {
  return skillItems.map((item: string) => {
    return <p key={item}>{item}</p>;
  });
};

const SingleSkill = ({ skill }: { skill: ISkill }) => {
  return (
    <div>
      <h1 className="uppercase font-bold mb-2">{skill.category}</h1>
      <SkillItems skillItems={skill.items} />
    </div>
  );
};

const StyledSkill = ({ children }: { children: any }) => {
  return (
    <ShadowCard>{children}</ShadowCard>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="">
      <h2 className="text-justify text-lg font-bold uppercase mb-4">
        In my software development and programming career, I have developed
        expertise in building scalable applications across front-end, back-end,
        and system software, specifically for networking devices. I am
        passionate about creating robust, efficient solutions, from user
        interfaces to system-level code. My approach combines a focus on clean,
        maintainable code with performance optimization, all while collaborating
        effectively in agile environments.
      </h2>
      <div className="grid grid-cols-2 items-stretch gap-4">
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
