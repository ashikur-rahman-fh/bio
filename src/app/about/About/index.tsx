import React from "react";
import Image from "next/image";

import ashikurDp from "./prof-dp.png";

const About = () => {
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

        <div className="grid grid-cols-1 gap-8 text-justify md:grid-cols-2 md:gap-16">
          <p className="p-2 shadow-sm shadow-gray-300">
            Expertise in Data Structures and Algorithms! Solved more than 2000
            programming problems and participated in more than 100 programming
            contests.
          </p>
          <p className="p-2 shadow-sm shadow-gray-300 md:p-4">
            Mentored and guide hundreds of students to become successful in
            programming contests and programming and software development
            careers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
