import React from "react";

import { NAV_OPTIONS, SOCIAL_PLATFORMS } from "./constants";
import Menu from "./Menu";
import Social from "./Social";

const Navbar = () => {

  return (
    <section
      className="flex items-center justify-between h-24 shadow-md sticky top-0 z-50 bg-white mb-4"
    >
      <div
        className="w-1/16 text-left md:ml-32 ml-2"
      >
        <a className="uppercase font-bold" href="/">Home</a>
      </div>

      <div
        className="w-1/2 flex justify-evenly mx-16"
      >
        <Menu items={NAV_OPTIONS} />
      </div>

      <div
        className="w-1/2 md:mr-32 mr-2 flex justify-end"
      >
        <Social platforms={SOCIAL_PLATFORMS} />
      </div>
    </section>
  );
};

export default Navbar;
