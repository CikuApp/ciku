import React from "react";
import PropTypes from "prop-types";
import Text from "./Text";
import { IoIosArrowDown } from "react-icons/io";

// takes an array, a button anme, and returns a drop down menu on click with a bunch of check boxes
function DropdownMenu({ selectorName, isExpanded, handleExpand, children }) {
  return (
    <div className="z-40">
      <button
        onClick={handleExpand}
        className={`h-full flex items-center px-8 ${
          isExpanded ? "bg-gray-100" : "bg-gray-300"
        }`}
      >
        <Text type="h4" className="font-bold mr-8">
          {selectorName}
        </Text>
        <IoIosArrowDown />
      </button>
      {isExpanded && (
        <div className="absolute w-88 px-8 py-4 bg-gray-100 ">{children}</div>
      )}
    </div>
  );
}

export default DropdownMenu;

DropdownMenu.propTypes = {
  selectorName: PropTypes.string,
  isExpanded: PropTypes.bool,
};
