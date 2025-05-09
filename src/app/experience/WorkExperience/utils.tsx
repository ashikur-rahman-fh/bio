import { IYearMonth } from "@/app/types";

export const formatYear = (
  date: IYearMonth | "Present" | "Current" | "Ongoing",
): string => {
  if (typeof date === "string") {
    return date;
  }
  return date.year;
};

export const formatYearMonth = (
  date: IYearMonth | "Present" | "Current" | "Ongoing",
): string => {
  if (typeof date === "string") {
    return date;
  }
  return date.month ? `${date.month} ${date.year}` : date.year;
};
