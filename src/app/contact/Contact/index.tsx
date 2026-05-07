"use client";

import React from "react";

import CrayonButton from "@/app/components/Sketch/CrayonButton";
import DoodleCard from "@/app/components/Sketch/DoodleCard";

import ContactInfo from "./ContactInfo";

const fieldClass =
  "focus-sketch min-h-[48px] w-full rounded-md border-2 border-pencil bg-paper px-4 py-3 " +
  "font-body text-ink outline-none transition focus:border-crayon-blue";

const textareaClass =
  "focus-sketch min-h-[140px] w-full resize-y rounded-md border-2 border-pencil bg-paper px-4 py-3 " +
  "font-body text-ink outline-none transition focus:border-crayon-blue";

const Contact = () => {
  return (
    <section
      aria-labelledby="contact-heading"
      className="page-container scroll-mt-24 py-10 pb-16 lg:scroll-mt-28"
      id="contact"
    >
      <h1
        className="crayon-text mb-10 text-center font-hand text-4xl text-ink md:text-5xl"
        id="contact-heading"
      >
        Contact me
      </h1>

      <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-12">
        <DoodleCard className="flex-1 p-6 md:p-8">
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="crayon-text text-center font-hand text-2xl text-ink md:text-3xl">
              Send a message
            </h2>

            <div className="flex flex-col gap-2">
              <label className="font-hand text-xl text-ink" htmlFor="contact-name">
                Name
              </label>
              <input
                autoComplete="name"
                className={fieldClass}
                id="contact-name"
                name="name"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-hand text-xl text-ink" htmlFor="contact-email">
                Email
              </label>
              <input
                autoComplete="email"
                className={fieldClass}
                id="contact-email"
                name="email"
                type="email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-hand text-xl text-ink" htmlFor="contact-message">
                Message
              </label>
              <textarea
                className={textareaClass}
                id="contact-message"
                name="message"
              />
            </div>

            <div className="flex justify-center pt-2">
              <CrayonButton type="submit">Send</CrayonButton>
            </div>
          </form>
        </DoodleCard>

        <div className="flex flex-1 justify-center md:justify-start">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
