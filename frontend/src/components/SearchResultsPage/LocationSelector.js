import React, { useEffect, useState, useRef } from "react";
import { useRecoilState } from "recoil";

// States
import locationAtom from "recoil/location";

// Components
import { Text } from "components/Presentation";
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
        <div className="z-40 mr-4 border border-gray-300 rounded-lg bg-white">
          <div
            onClick={handleExpand}
            className="h-14 w-88 flex items-center justify-between px-4"
          >
            <Text type="p" className="mr-8 text-gray-800">
              {formatStateName(location)}
            </Text>
            <IoIosArrowDown className="text-lg" />
          </div>
          {isExpanded && (
            <div className="absolute w-88 h-48 overflow-y-scroll mt-0.5 border border-white rounded-lg bg-white">
              <ul className="list-none">
                {stateNames.map((name) => {
                  return (
                    <li
                      onClick={() => handleSelection(name)}
                      className="w-full px-4 py-2 hover:bg-gray-200"
                      key={name}
                    >
                      <Text
                        type="p"
                        className={`mr-8 text-gray-800 ${
                          name === location && "font-bold"
                        }`}
                      >
                        {formatStateName(name)}
                      </Text>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default LocationSelector;
