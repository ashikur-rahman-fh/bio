export type CMonth =
  | "Jan"
  | "January"
  | "Feb"
  | "February"
  | "Mar"
  | "March"
  | "Apr"
  | "April"
  | "May"
  | "Jun"
  | "June"
  | "Jul"
  | "July"
  | "Aug"
  | "August"
  | "Sep"
  | "September"
  | "Oct"
  | "October"
  | "Nov"
  | "November"
  | "Dec"
  | "December";

export interface IContact {
  name: string;
  email: string;
  phone: string;
}

export interface IMetadata {
  title: string;
  description: string;
  keywords: string;
}

export interface LogoProps {
  className: string;
}

export interface IYearMonth {
  year: string;
  month?: CMonth;
}
