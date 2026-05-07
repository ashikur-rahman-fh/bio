import type { ReactNode } from "react";

interface DoodleCardProps {
  children: ReactNode;
  className?: string;
  tape?: boolean;
  rotate?: string;
}

export default function DoodleCard({
  children,
  className = "",
  tape = false,
  rotate = "",
}: DoodleCardProps) {
  return (
    <div
      className={`relative bg-paper/95 doodle-shadow sketch-border ${rotate} ${className}`}
    >
      {tape ? (
        <div
          aria-hidden
          className={
            "absolute -top-2 left-1/2 z-[1] h-5 w-14 -translate-x-1/2 rounded-sm " +
            "bg-crayon-yellow/85 opacity-90 shadow-sm"
          }
          style={{ transform: "translateX(-50%) rotate(-2deg)" }}
        />
      ) : null}
      <div className="relative z-0">{children}</div>
    </div>
  );
}
