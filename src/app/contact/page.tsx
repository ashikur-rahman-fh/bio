import React from "react";
import { Metadata } from "next";

import Contact from "./Contact";

import { DEFAULT_METADATA } from "../constants";

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...DEFAULT_METADATA,
    title: "Contact | Ashikur Rahman",
    description:
      "Get in touch with Ashikur Rahman for professional inquiries, software " +
      "collaboration opportunities, or networking. Reach out via email or " +
      "connect on LinkedIn.",
    keywords:
      "Contact Ashikur Rahman, Email Ashikur, LinkedIn Profile, Professional " +
      "Networking, Developer Contact, Hire Software Developer, Collaborate " +
      "with Engineer, Tech Resume, Connect with Ashikur, Developer Outreach",
  };
};

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
