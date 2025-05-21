import React from "react";
import Image from "next/image";

import { IWorkExperience } from "../types";
import { formatYear } from "../utils";

const OrgLogo = ({
  website,
  logoLink,
}: {
  website: IWorkExperience["website"];
  logoLink: IWorkExperience["logoLink"];
}) => {
  return (
    <React.Fragment>
      <a href={website} target="_blank">
        <Image
          className={`
            p-2
            w-[180px]
            aspect-[16/9]
          `}
          src={logoLink}
          alt="workplace logo"
          width={100}
          height={100}
          priority
        />
      </a>
    </React.Fragment>
  );
};

const Contribution = ({ story }: { story: string[] }) => {
  return story.map((con: string, index: number) => {
    return <h1 key={index}>{con}</h1>;
  });
};

const Organization = ({
  organization,
}: {
  organization: IWorkExperience;
}) => {
  return (
    <React.Fragment>
      <div className="row-span-2 p-4">
        <div className="flex">
          <OrgLogo
            website={organization.website}
            logoLink={organization.logoLink}
          />
          <span className="mx-2">
            <a href={organization.website} target="_blank">
              <h1 className="text-xl font-bold uppercase">
                {organization.name}
              </h1>
              <h1 className="text-md">
                {organization.role}
              </h1>
              <h1 className="text-sm">
                {formatYear(organization.start)} -{" "}
                {formatYear(organization.end)}
              </h1>
            </a>
          </span>
        </div>
      </div>

      <div className="rounded-md p-4 text-justify">
        <Contribution story={organization.story} />
      </div>
    </React.Fragment>
  );
};

export default Organization;
