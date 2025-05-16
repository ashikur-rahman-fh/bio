import React from "react";

import Organization from "./Organization";

import { Experience } from "./constants";


const WorkExperience = () => {
  return (
    <React.Fragment>
      {Experience.map((experience) => {
        return (
          <Organization
            key={experience.name}
            organization={experience}
          />
        );
      })}
    </React.Fragment>
  );
};

export default WorkExperience;
