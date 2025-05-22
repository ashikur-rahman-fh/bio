import React from "react";

const ShadowCard = ({ children } : { children : any }) => {
  return (
    <div
      className="bg-gray-100 p-2 shadow-lg shadow-gray-300
                rounded-md hover:bg-gray-300
                transition duration-300 ease-in-out
                h-full box-border"
    >
      {children}
    </div>
  );

};

export default ShadowCard;
