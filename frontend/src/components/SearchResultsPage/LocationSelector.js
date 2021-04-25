import React, { useEffect, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";

// States
import locationAtom from "recoil/location";

// Components
import { Text } from "components/Presentation";
import { IoIosArrowDown } from "react-icons/io";

// Helpers
import { formatStateName } from "utils/dataHelpers";
import { stateNames } from "data/data";

function LocationSelector() {
  const [location, setLocation] = useRecoilState(locationAtom);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSelection = (name) => {
    setLocation(name);
    setIsExpanded(false);
  };

  const handleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="flex items-center my-4">
      <Text type="p" className="mr-8">
        Currently showing recipes for seasonal produce in
      </Text>
      <form className="flex">
        <div className="z-40 mr-4 border border-black rounded-xl bg-white">
          <div
            onClick={handleExpand}
            className="h-14 w-88 flex items-center justify-between px-4"
          >
            <Text type="p" className="mr-8">
              {formatStateName(location)}
            </Text>
            <IoIosArrowDown className="text-lg" />
          </div>
          {isExpanded && (
            <div className="absolute w-88 h-52 overflow-y-scroll mt-4 bg-white">
              <ul className="list-none">
                {stateNames.map((name) => {
                  return (
                    <li
                      onClick={() => handleSelection(name)}
                      className="w-full px-4 py-2 hover:bg-gray-200"
                      key={name}
                    >
                      <Text type="p" className="font-bold mr-8">
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
}

export default LocationSelector;
