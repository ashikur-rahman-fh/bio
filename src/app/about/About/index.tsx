import React from "react";
import Image from "next/image";

import { BASIC_INFO } from "./constants";
import ShadowCard from "@/app/common/ShadowCard";

const Info = ({ text } : { text: string }) => {
  return (
    <p className="text-justify">{text}</p>
  );
};

const InfoList = ({ infoList } : { infoList: string[] }) => {
  return (
    <React.Fragment>
      {infoList.map((info, index) => (
        <StyledInfo key={index.toString()}>
          <Info text={info} />
        </StyledInfo>
      ))}
    </React.Fragment>
  );
};

const StyledInfo = ({ children } : { children: React.ReactNode }) => {
  return (
    <div>
      <ShadowCard>
        {children}
      </ShadowCard>
    </div>
  );
};

const About = () => {
  return (
    <section className="about-section">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <InfoList infoList={BASIC_INFO} />
        </div>
      </div>
    </section>
  );
};

export default About;
