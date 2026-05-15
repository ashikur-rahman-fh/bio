import React from "react";
import Image from "next/image";

import DoodleCard from "@/app/components/Sketch/DoodleCard";

import { IOrganization } from "./types";
import { Experience } from "./constants";

const Organization = ({ organization }: { organization: IOrganization }) => {
  return (
    <DoodleCard className="flex flex-col items-center justify-center p-4 rotate-1">
      <a
        className={
          "focus-sketch inline-flex min-h-[8.5rem] w-full max-w-[260px] " +
          "items-center justify-center px-4 py-6"
        }
        href={organization.website}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="block max-h-[7rem] w-full max-w-[min(100%,14rem)] overflow-hidden rounded-2xl">
          <Image
            priority
            alt={`${organization.name} workplace logo (hand-drawn)`}
            className="h-auto max-h-[7rem] w-full object-contain"
            height={organization.logoHeight}
            sizes="(max-width: 640px) 70vw, 224px"
            src={organization.logoLink}
            width={organization.logoWidth}
          />
        </span>
      </a>
    </DoodleCard>
  );
};

const WorkExperience = () => {
  return (
    <section
      aria-labelledby="projects-heading"
      className="page-container scroll-mt-24 py-10 lg:scroll-mt-28 lg:py-12"
      id="projects"
    >
      <h2
        className="crayon-text mb-10 text-center font-hand text-4xl text-ink md:text-5xl"
        id="projects-heading"
      >
        Work Experience
      </h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {Experience.map((experience) => (
          <Organization
            key={experience.organization.name}
            organization={experience.organization}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
