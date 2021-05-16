import React, { useEffect, useState, useRef } from "react";
import { useRecoilState } from "recoil";

// States
import locationAtom from "recoil/location";

// Components
import { Text, TextPill, TextPillExpanded } from "components/Presentation";
import { IoIosArrowDown } from "react-icons/io";

// Utils
import { formatStateName } from "utils/dataHelpers";
import { stateNames } from "data/data";

const LocationSelector = () => {
  const [location, setLocation] = useRecoilState(locationAtom);
  const [isExpanded, setIsExpanded] = useState(false);
  const locationMenuRef = useRef();

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const handleSelection = (name) => {
    setLocation(name);
    setIsExpanded(false);
  };

  const handleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const handleClick = (e) => {
    if (
      locationMenuRef.current &&
      !locationMenuRef.current.contains(e.target)
    ) {
      setIsExpanded(false);
    }
  };

  return (
    <div className="flex items-center my-4">
      <Text type="p" className="mr-8">
        Currently showing recipes for seasonal produce in
      </Text>
      <form className="flex" ref={locationMenuRef}>
        <div className="z-40 mr-4">
          <TextPill width="w-80" onClick={handleExpand}>
            <Text type="p" className="w-full mr-8 cursor-default">
              {formatStateName(location)}
            </Text>
            <IoIosArrowDown className="text-lg" />
          </TextPill>
          {isExpanded && (
            <TextPillExpanded width="w-80">
              <ul className="list-none">
                {stateNames.map((name) => {
                  return (
                    <li
                      onClick={() => handleSelection(name)}
                      className="w-full px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      key={name}
                    >
                      <Text type="p" className="mr-8">
                        {formatStateName(name)}
                      </Text>
                    </li>
                  );
                })}
              </ul>
            </TextPillExpanded>
          )}
        </div>
      </form>
    </div>
  );
};

export default LocationSelector;
