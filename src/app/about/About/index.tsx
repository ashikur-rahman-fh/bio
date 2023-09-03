import React from "react";
import Image from "next/image";

import ashikurDp from "./prof-dp.png";

import { BASIC_INFO } from "./constants";

const About = () => {
  const renderBasicInfo = () => {
    const infoLenght = BASIC_INFO.length;
    return BASIC_INFO.map((info, index) => {
      const columnFull = index === infoLenght - 1 && infoLenght % 2 === 1;
      const className = columnFull ? "md:col-span-2" : "";
      return (
        <p className={className} key={index.toString()}>
          {info}
        </p>
      );
    });
  };

  return (
    <section className="mx-2 my-2 md:mx-32 lg:mx-[10vw]">
      <div className="relative float-right my-2 ml-8 hidden overflow-hidden rounded-full border-2 border-gray-100 shadow-sm shadow-gray-500 lg:inline-block">
        <Image
          className="!h-64 !w-64"
          src={ashikurDp}
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

        <div className="grid grid-cols-1 gap-4 text-justify md:grid-cols-2 md:gap-8 [&>p]:rounded-md [&>p]:bg-green-200 [&>p]:p-4 [&>p]:shadow-md [&>p]:shadow-green-200">
          {renderBasicInfo()}
        </div>
      </div>
    </section>
  );
};

export default About;
