import React from "react";

import { CONTACT_INFO } from "@/app/constants";

const Footer = () => {
  const startDate = "2023";
  
  return (
    <footer
      className="text-center text-slate-500 text-sm"
    >
      &copy; Copyright {startDate}-{new Date().getFullYear()} {CONTACT_INFO.NAME}
    </footer>
  );
};
  
export default Footer;
