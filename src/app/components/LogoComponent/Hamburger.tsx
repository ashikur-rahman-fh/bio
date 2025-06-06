/* eslint-disable max-len */
import React from "react";

const Hamburger = (props: any) => {
  const { style, className } = props;
  return (
    <svg
      style={{ ...style }}
      className={`hamburger ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 24 24"
    >
      <path d="M 0 2 L 0 4 L 24 4 L 24 2 Z M 0 11 L 0 13 L 24 13 L 24 11 Z M 0 20 L 0 22 L 24 22 L 24 20 Z"></path>
    </svg>
  );
};

export default Hamburger;
