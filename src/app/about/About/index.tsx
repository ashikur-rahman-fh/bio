import React from "react";
import Image from "next/image";

import DoodleCard from "@/app/components/Sketch/DoodleCard";

import { BASIC_INFO } from "./constants";

const About = () => {
  const renderBasicInfo = () => {
    const infoLength = BASIC_INFO.length;
    return BASIC_INFO.map((info, index) => {
      const columnFull = index === infoLength - 1 && infoLength % 2 === 1;
      const className = columnFull ? "md:col-span-2" : "";
      return (
        <DoodleCard key={index.toString()} className={`p-5 ${className}`}>
          <p className="text-pretty font-body text-base leading-relaxed text-ink/90">
            {info}
          </p>
        </DoodleCard>
      );
    });
  };

  return (
    <section className="page-container py-10">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
        <div className="mx-auto w-full max-w-sm flex-shrink-0 lg:mx-0 lg:max-w-xs lg:pt-2">
          <DoodleCard className="overflow-hidden p-2">
            <Image
              priority
              alt="Portrait of Ashikur Rahman"
              className="h-auto w-full object-cover"
              height={480}
              sizes="(max-width: 1024px) 280px, 320px"
              src="/prof-dp.png"
              width={480}
            />
          </DoodleCard>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-8">
          <div>
            <h1 className="crayon-text font-hand text-3xl text-ink md:text-5xl">
              Hello, I am{" "}
              <span className="font-semibold text-crayon-blue">
                Ashikur Rahman
              </span>
              !
            </h1>
            <h2 className="mt-4 crayon-text font-hand text-2xl text-ink md:text-3xl">
              I am a Software Developer at{" "}
              <span className="text-crayon-blue">Nokia</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {renderBasicInfo()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
