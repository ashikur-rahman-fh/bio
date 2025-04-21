import React from "react";
import Image from "next/image";

import { IOrganization } from "./types";
import { Experience } from "./constants";

const Organization = ({ organization } : { organization: IOrganization }) => {
  return (
    <React.Fragment>
      <a href={organization.website} target="_blank">
        <Image
          className="border-blue-200 border-2 border-solid h-24 w-40 p-2 m-4"
          src={organization.logoLink}
          alt="workplace logo"
          width={100}
          height={100}
          priority
        />
      </a>
    </React.Fragment>
  );
};


const WorkExperience = () => {
  return (
    <React.Fragment>
      {Experience.map((experience) => {
        return (
          <Organization
            key={experience.organization.name}
            organization={experience.organization}
          />
        );
      })}
    </React.Fragment>
  );
};

export default WorkExperience;
