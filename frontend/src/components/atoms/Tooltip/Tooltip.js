import React from "react";

// Components
import { IoClose } from "react-icons/io5";

const Tooltip = ({ handleClose, children }) => {
  return (
    <span className="absolute top-9 left-0 z-50 flex flex-col items-start">
      <span className="w-6 h-6 -mb-4 ml-6 transform rotate-45 skew-y-12 skew-x-12 bg-info rounded-sm"></span>
      <span className="w-112 flex flex-col items-center justify-center p-8 bg-info text-white font-normal rounded-lg shadow-sm">
        <IoClose
          onClick={handleClose}
          className="absolute top-4 right-2 text-3xl cursor-pointer"
        />
        {children}
      </span>
    </span>
  );
};

export default Tooltip;
