import React from "react";

import Gmail from "@/app/components/LogoComponent/Gmail";
import LinkedIn from "@/app/components/LogoComponent/LinkedIn";

import { CONTACT_INFO } from "@/app/constants";

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;
