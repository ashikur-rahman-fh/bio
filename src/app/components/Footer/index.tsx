import React from "react";

import { CONTACT_INFO } from "@/app/constants";

const Footer = () => {
  return (
    <footer className="text-slate-500 mt-10 text-center text-sm">
      &copy; Copyright {new Date().getFullYear()}{" "}
      {CONTACT_INFO.name}
    </footer>
  );
};

export default Footer;
