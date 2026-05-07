import React from "react";
import Image from "next/image";

import DoodleCard from "@/app/components/Sketch/DoodleCard";

import { IOrganization } from "./types";
import { Experience } from "./constants";

const Organization = ({ organization }: { organization: IOrganization }) => {
  return (
    <DoodleCard className="flex flex-col items-center justify-center p-4 rotate-1">
      <a
        className="focus-sketch block"
        href={organization.website}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image
          priority
          alt={`${organization.name} workplace logo`}
          className="h-24 w-40 object-contain p-2"
          height={100}
          src={organization.logoLink}
          width={160}
        />
      </a>
    </DoodleCard>
  );
};

const WorkExperience = () => {
  return (
    <section className="page-container py-12">
      <h1 className="crayon-text mb-10 text-center font-hand text-4xl text-ink md:text-5xl">
        Work Experience
      </h1>
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
