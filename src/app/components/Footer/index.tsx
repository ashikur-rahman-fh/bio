import React from "react";

import { CONTACT_INFO } from "@/app/constants";

const Footer = () => {
  const startDate = "2023";

  return (
    <footer className="text-slate-500 mt-10 text-center text-sm">
      &copy; Copyright {startDate}-{new Date().getFullYear()}{" "}
      {CONTACT_INFO.NAME}
    </footer>
  );
};

export default Footer;
