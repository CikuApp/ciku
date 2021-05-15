import React from "react";

const Tooltip = ({ children }) => {
  return (
    <span className="absolute top-12 left-0 z-50 flex flex-col items-start">
      <span className="w-6 h-6 -mb-4 ml-6 transform rotate-45 skew-y-12 skew-x-12 bg-info "></span>
      <span className="h-80 w-200 flex flex-col items-center justify-center px-8 bg-info text-white border font-normal rounded-lg">
        {children}
      </span>
    </span>
  );
};

export default Tooltip;
