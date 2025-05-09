import React from "react";
import Image from "next/image";

import { IOrganization, IWorkExperience } from "../types";
import { formatYear } from "../utils";

const OrgLogo = ({
  website,
  logoLink,
}: {
  website: IOrganization["website"];
  logoLink: IOrganization["logoLink"];
}) => {
  return (
    <React.Fragment>
      <a href={website} target="_blank">
        <Image
          // eslint-disable-next-line max-len
          className="rounded-md h-24 w-40 border-2 border-solid border-gray-300 p-2"
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

const Contribution = ({ contributions }: { contributions: string[] }) => {
  return contributions.map((con: string, index: number) => {
    return <h1 key={index}>{con}</h1>;
  });
};

const Organization = ({
  organization,
  start,
  end,
  contributions,
}: {
  organization: IOrganization;
  start: IWorkExperience["start"];
  end: IWorkExperience["end"];
  contributions: string[];
}) => {
  return (
    <React.Fragment>
      <div className="org-container m-2 grid grid-cols-[30%_70%] gap-4">
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
              </a>
              <h1 className="text-sm">
                {formatYear(start)} - {formatYear(end)}
              </h1>
            </span>
          </div>
        </div>

        <div className="bg-green-100 p-4 rounded-md">
          <Contribution contributions={contributions} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Organization;
