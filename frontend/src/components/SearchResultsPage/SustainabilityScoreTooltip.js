import React, { useState } from "react";

import { Tooltip, Text } from "components/Presentation";
import { IoClose } from "react-icons/io5";

const SustainabilityScoreTooltip = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <span className="relative">
      <span onClick={handleClick}>
        <Text
          type="p"
          className="mx-1 underline text-primary font-bold cursor-pointer"
        >
          {title}
        </Text>
      </span>
      {isExpanded && (
        <Tooltip>
          <IoClose
            onClick={handleClick}
            className="absolute top-6 right-4 text-3xl cursor-pointer"
          />
          {children}
        </Tooltip>
      )}
    </span>
  );
};

export default SustainabilityScoreTooltip;
