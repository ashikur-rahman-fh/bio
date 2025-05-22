import React from "react";

import Organization from "./Organization";

import { Experience } from "./constants";
import ShadowCard from "@/app/common/ShadowCard";

const HeadLine = () => {
  return (
    <React.Fragment>
      <h1 className="text-2xl font-bold uppercase mb-4">
        Writing production code since 2020.<br/>
        {/*eslint-disable-next-line max-len */}
        Every year since has been a deeper dive into building smarter and faster systems.
      </h1>
    </React.Fragment>
  );
};

const WorkExperience = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <HeadLine />
      {Experience.map((experience) => {
        return (
          <div key={experience.name}>
            <ShadowCard>
              <Organization organization={experience} />
            </ShadowCard>
          </div>
        );
      })}
    </div>
  );
};

export default WorkExperience;
