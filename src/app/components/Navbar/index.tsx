"use client";

import React, { useState } from "react";

import Menu from "./Menu";
import Social from "./Social";
import Hamburger from "../LogoComponent/Hamburger";
import Close from "../LogoComponent/Close";
import Sidebar from "./Sidebar";

import { NAV_OPTIONS, SOCIAL_PLATFORMS } from "./constants";

const Navbar = () => {
  const [hambugerOpen, setHambugerOpen] = useState(false);

  const toggleHamburger = () => {
    setHambugerOpen((previousStage) => !previousStage);
  };

  return (
    <React.Fragment>
      <section className="sticky top-0 z-50 mb-4 flex h-24 items-center justify-between bg-white shadow-md">
        <div className="w-1/16 ml-4 text-left md:ml-32">
          <a className="font-bold uppercase" href="/">
            Home
          </a>
        </div>

        <div className="mx-16 hidden w-1/2 justify-evenly lg:flex">
          <Menu items={NAV_OPTIONS} />
        </div>

        <div className="mr-2 hidden w-1/2 justify-end md:mr-32 lg:flex">
          <Social platforms={SOCIAL_PLATFORMS} />
        </div>

        <div className="mr-4 flex w-1/2 justify-end md:mr-32 lg:hidden">
          <span className="bg-gray-100 rounded-full aspect-square h-10 flex justify-center items-center" onClick={toggleHamburger}>
            {hambugerOpen ? (
              <Close style={{ width: "25px" }} />
            ) : (
              <Hamburger style={{ width: "20px" }} />
            )}
          </span>
        </div>
      </section>
      {hambugerOpen ? <Sidebar /> : null}
    </React.Fragment>
  );
};

export default Navbar;
