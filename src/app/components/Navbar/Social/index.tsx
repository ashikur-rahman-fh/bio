import React from "react";
import Link from "next/link";

import "./style.css";

const Social = (props : any) => {
  const { platforms } = props;

  const renderSocialPlatforms = () => {
    return platforms.map((socialPlatform : any, index : any) => {
      const { LogoComponent, link, text } = socialPlatform;

      const label = `Ashikur Rahman's ${text} profile`;

      return (
        <span className="mx-2" key={index.toString()}>
          <Link
            className="social-link"
            href={link}
            target="_blank"
            aria-label={label}
            about={label}
            aria-description={label}
          >
            <LogoComponent />
          </Link>
        </span>
      );
    });
  };

  return (
    <div className="w-full flex flex-row justify-end">
      {renderSocialPlatforms()}
    </div>
  );
};

export default Social;
