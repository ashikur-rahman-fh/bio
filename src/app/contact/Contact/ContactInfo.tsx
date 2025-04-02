import React from "react";

import Gmail from "@/app/components/LogoComponent/Gmail";
import LinkedIn from "@/app/components/LogoComponent/LinkedIn";

import { CONTACT_INFO } from "@/app/constants";
import { SOCIAL_PLATFORMS } from "@/app/components/Navbar/constants";

const ContactInfo = () => {

  const linkedIn = SOCIAL_PLATFORMS.find(social => social.id === "linkedin");

  return (
    <div className="items-left flex flex-col justify-center gap-4 pl-11">
      <h1 className="flex items-center gap-2">
        <Gmail className="small-gmail" />
        <a
          className="underline underline-offset-2 "
          href={`mailto: ${CONTACT_INFO?.email}`}
        >
          {CONTACT_INFO?.email}
        </a>
      </h1>

      <h1 className="flex items-center gap-2">
        <LinkedIn className="small-linkedin" />
        <a
          className="underline underline-offset-2"
          href={linkedIn?.link}
          target="_blank"
        >
          linkedin.com/in/ashikur-5h/
        </a>
      </h1>
    </div>
  );
};

export default ContactInfo;
