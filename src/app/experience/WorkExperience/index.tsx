import React from "react";

import Organization from "./Organization";

import { Experience } from "./constants";

const HeadLine = () => {
  return (
    <React.Fragment>
      <h1 className="text-2xl font-bold uppercase">
        Writing production code since 2020.<br/>
        {/*eslint-disable-next-line max-len */}
        Every year since has been a deeper dive into building smarter and faster systems.
      </h1>
    </React.Fragment>
  );
};

const WorkExperience = () => {
  return (
    <React.Fragment>
      <HeadLine />
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
