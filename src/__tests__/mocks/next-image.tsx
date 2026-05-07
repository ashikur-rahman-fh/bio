import React from "react";

/** Minimal stub so Jest can render pages using next/image */
export default function MockImage(props: Record<string, unknown> & { alt?: string }) {
  const { alt = "", priority: _pr, sizes: _sz, ...rest } = props;
  return <img alt={alt} {...rest} />;
}
