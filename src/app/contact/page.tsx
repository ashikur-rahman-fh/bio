import React from "react";
import { Metadata } from "next";

import Contact from "./Contact";

import { DEFAULT_METADATA } from "../constants";

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...DEFAULT_METADATA,
    title: "Contact - Ashikur Rahman",
    description:
      "Email: ashikurrahmanvar@gmail.com LinkedIn: https://www.linkedin.com/in/ashikur-5h/",
  };
}

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
