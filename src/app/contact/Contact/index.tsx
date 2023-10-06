"use client";

import React from "react";

import { Button, Input, Textarea } from "@material-tailwind/react";
import Gmail from "@/app/components/LogoComponent/Gmail";
import LinkedIn from "@/app/components/LogoComponent/LinkedIn";

import { CONTACT_INFO } from "@/app/constants";

import "./style.css";

const Contact = () => {
  return (
    <section className="mx-2 my-2 md:mx-32 lg:mx-[10vw]">
      <h1 className="my-8 text-center text-xl font-bold">Contact me</h1>

      <div className="flex flex-col-reverse gap-4 md:flex-row md:divide-x-2">
        <form className="column flex flex-col gap-6 px-10 md:w-1/2">
          <h1 className="text-center font-bold">Send a message</h1>
          <Input
            variant="standard"
            label="Name"
            size="md"
            crossOrigin={undefined}
          />
          <Input
            variant="standard"
            label="Email"
            size="md"
            crossOrigin={undefined}
          />
          <Textarea variant="standard" label="Message" />
          <Button>Send</Button>
        </form>

        <div className="items-left flex flex-col justify-center gap-4 pl-11">
          <h1 className="flex items-center gap-2">
            <Gmail className="small-gmail" />
            <a
              className="underline underline-offset-2 "
              href={`mailto: ${CONTACT_INFO?.EMAIL}`}
            >
              {CONTACT_INFO?.EMAIL}
            </a>
          </h1>

          <h1 className="flex items-center gap-2">
            <LinkedIn className="small-linkedin" />
            <a
              className="underline underline-offset-2"
              href="linkedin.com/in/ashikur-5h/"
            >
              linkedin.com/in/ashikur-5h/
            </a>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Contact;
