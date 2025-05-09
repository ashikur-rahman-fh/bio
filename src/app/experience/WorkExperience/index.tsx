import React from "react";

import Organization from "./Organization";

import { Experience } from "./constants";


const WorkExperience = () => {
  return (
    <React.Fragment>
      {Experience.map((experience) => {
        return (
          <Organization
            key={experience.organization.name}
            organization={experience.organization}
            start={experience.start}
            end={experience.end}
            contributions={experience.contributions}
          />
        );
      })}
    </React.Fragment>
  );
};

export default WorkExperience;
