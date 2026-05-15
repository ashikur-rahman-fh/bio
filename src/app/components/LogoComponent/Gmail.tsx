import Image from "next/image";
import type { ComponentPropsWithoutRef } from "react";

import type { LogoProps } from "@/app/types";

type GmailLogoProps = LogoProps &
  Pick<
    ComponentPropsWithoutRef<typeof Image>,
    "aria-hidden" | "priority"
  >;

const Gmail = ({
  className = "",
  alt = "Email logo (hand-drawn)",
  ...rest
}: GmailLogoProps) => {
  return (
    <span
      className={`inline-flex shrink-0 overflow-hidden rounded-full ${className}`}
    >
      <Image
        alt={alt}
        className="gmail size-full object-contain"
        height={1024}
        src="/gmail-crayon.png"
        width={1024}
        {...rest}
      />
    </span>
  );
};

export default Gmail;
