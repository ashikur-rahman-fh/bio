import { IYearMonth } from "@/app/types";

export interface IWorkExperience {
  name: string;
  website: string;
  logoLink: string;
  start: IYearMonth;
  end: IYearMonth | "Present" | "Current" | "Ongoing";
  role: string;
  skills: string[];
  story: string[];
};
