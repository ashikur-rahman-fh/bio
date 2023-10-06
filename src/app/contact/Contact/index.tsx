"use client";

import React from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";

import ContactInfo from "./ContactInfo";

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

        <ContactInfo />
      </div>
    </section>
  );
};

export default Contact;
