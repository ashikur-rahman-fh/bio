import Image from "next/image";
import type { ComponentPropsWithoutRef } from "react";

import type { LogoProps } from "@/app/types";

type GitHubLogoProps = LogoProps &
  Pick<
    ComponentPropsWithoutRef<typeof Image>,
    "aria-hidden" | "priority"
  >;

const GitHub = ({ className = "", ...rest }: GitHubLogoProps) => {
  return (
    <span
      className={`inline-flex shrink-0 overflow-hidden rounded-full ${className}`}
    >
      <Image
        alt=""
        className="github size-full object-contain"
        height={1024}
        src="/github-crayon.png"
        width={1024}
        {...rest}
      />
    </span>
  );
};

export default GitHub;
