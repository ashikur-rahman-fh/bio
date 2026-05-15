import Image from "next/image";
import type { ComponentPropsWithoutRef } from "react";

import type { LogoProps } from "@/app/types";

type YoutubeLogoProps = LogoProps &
  Pick<
    ComponentPropsWithoutRef<typeof Image>,
    "aria-hidden" | "priority"
  >;

/** Rounded rect icon — clip with xl radius so the play-button shape reads clearly */
const Youtube = ({
  className = "",
  alt = "YouTube logo (hand-drawn)",
  ...rest
}: YoutubeLogoProps) => {
  return (
    <span
      className={`inline-flex shrink-0 overflow-hidden rounded-2xl ${className}`}
    >
      <Image
        alt={alt}
        className="youtube size-full object-contain"
        height={1024}
        src="/youtube-crayon.png"
        width={1024}
        {...rest}
      />
    </span>
  );
};

export default Youtube;
