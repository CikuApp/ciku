import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const ExpandIcon = ({ props }) => {
  return (
    <IoIosArrowDown className="text-xl font-bold cursor-pointer" {...props} />
  );
};

export default ExpandIcon;
