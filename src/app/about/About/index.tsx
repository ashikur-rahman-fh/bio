import React from "react";
import Image from "next/image";

import { BASIC_INFO } from "./constants";

const About = () => {
  const renderBasicInfo = () => {
    const infoLength = BASIC_INFO.length;
    return BASIC_INFO.map((info, index) => {
      const columnFull = index === infoLength - 1 && infoLength % 2 === 1;
      const className = columnFull ? "md:col-span-2" : "";
      return (
        <p className={className} key={index.toString()}>
          {info}
        </p>
      );
    });
  };

  return (
    <React.Fragment>
      <div
        className="
          relative float-right my-2 ml-8 hidden overflow-hidden
          rounded-full border-2 border-gray-100 shadow-sm
          shadow-gray-500 lg:inline-block
        "
      >
        <Image
          className="!h-64 !w-64"
          src={"/prof-dp.png"}
          alt="ashikur-dp"
          height={480}
          width={480}
        />
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl md:text-4xl">
            Hello, I am <span className="font-bold">Ashikur Rahman</span>!
          </h1>
          <h2 className="text-xl md:text-3xl">
            I am a Software Developer at{" "}
            <span className="text-blue-600">NOKIA</span>.
          </h2>
        </div>

        <div
          className="
            grid grid-cols-1 gap-4 text-justify md:grid-cols-2 md:gap-8
            [&>p]:rounded-md [&>p]:bg-gray-100 [&>p]:p-4
            [&>p]:shadow-lg [&>p]:shadow-gray-300
          "
        >
          {renderBasicInfo()}
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
