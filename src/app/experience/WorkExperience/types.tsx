import { IYearMonth } from "@/app/types";

export interface IWorkSkill {
  name: string;
};

export interface IOrganization {
  name: string;
  website: string;
  logoLink: string;
};

export interface IWorkExperience {
  organization: IOrganization;
  website?: string;
  start: IYearMonth;
  end: IYearMonth | "Present" | "Current" | "Ongoing";
  skills: IWorkSkill[];
};
