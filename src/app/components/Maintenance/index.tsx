import React from "react";
import { SOCIAL_PLATFORMS } from "../Navbar/constants";

const Maintenance = () => {
  return (
    <div
      id="informational-banner"
      className="
        z-50 flex w-full flex-col items-center justify-center
        border-b border-gray-200 bg-gray-50 p-4
        dark:border-gray-600 dark:bg-gray-700 md:flex-row
      "
    >
      <div className="mb-4 md:mb-0 md:mr-4">
        <h2
          className="
            mb-1 text-center text-base font-semibold
            text-gray-900 dark:text-white
          "
        >
          This website is under construction
        </h2>
        <p
          className="
            flex items-center text-center text-sm
            font-normal text-gray-500 dark:text-gray-400
          "
        >
          Please visit the &nbsp;{" "}
          <a
            className="underline"
            target="_blank"
            href={SOCIAL_PLATFORMS[0].link}
          >
            LinkedIn profile
          </a>{" "}
          &nbsp; to learn more!
        </p>
      </div>
    </div>
  );
};

export default Maintenance;
