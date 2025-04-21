import React from "react";

import Menu from "../Menu";
import Social from "../Social";

import { NAV_OPTIONS, SOCIAL_PLATFORMS } from "../constants";

const Sidebar = () => {
  return (
    <div
      className="
        fixed right-0 top-0 flex h-fit w-fit flex-col items-center
        gap-2 rounded-lg bg-blue-gray-200 px-4 lg:hidden
      "
    >
      <div className="mt-32 flex flex-col items-center justify-center gap-3">
        <Menu items={NAV_OPTIONS} />
      </div>
      <div>
        <Social platforms={SOCIAL_PLATFORMS} />
      </div>
    </div>
  );
};

export default Sidebar;
