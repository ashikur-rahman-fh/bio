import Image from "next/image";
import type { ComponentPropsWithoutRef } from "react";

import type { LogoProps } from "@/app/types";

type FacebookLogoProps = LogoProps &
  Pick<
    ComponentPropsWithoutRef<typeof Image>,
    "aria-hidden" | "priority"
  >;

const Facebook = ({ className = "", ...rest }: FacebookLogoProps) => {
  return (
    <span
      className={`inline-flex shrink-0 overflow-hidden rounded-full ${className}`}
    >
      <Image
        alt=""
        className="facebook size-full object-contain"
        height={1024}
        src="/facebook-crayon.png"
        width={1024}
        {...rest}
      />
    </span>
  );
};

export default Facebook;
