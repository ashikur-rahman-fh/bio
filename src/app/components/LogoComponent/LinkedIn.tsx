import Image from "next/image";
import type { ComponentPropsWithoutRef } from "react";

import type { LogoProps } from "@/app/types";

type LinkedInLogoProps = LogoProps &
  Pick<
    ComponentPropsWithoutRef<typeof Image>,
    "aria-hidden" | "priority"
  >;

const LinkedIn = ({
  className = "",
  alt = "LinkedIn logo (hand-drawn)",
  ...rest
}: LinkedInLogoProps) => {
  return (
    <span
      className={`inline-flex shrink-0 overflow-hidden rounded-full ${className}`}
    >
      <Image
        alt={alt}
        className="linkedin size-full object-contain"
        height={1024}
        src="/linkedin-crayon.png"
        width={1024}
        {...rest}
      />
    </span>
  );
};

export default LinkedIn;
