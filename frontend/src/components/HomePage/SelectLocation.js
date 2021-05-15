import React, { useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";
import { useRecoilState } from "recoil";

// States
import locationAtom from "recoil/location";

// Components
import {
  Text,
  Button,
  TextPill,
  TextPillExpanded,
} from "components/Presentation";
import { IoIosArrowDown } from "react-icons/io";

// Data
import { stateNames } from "data/data";
import { formatStateName } from "utils/dataHelpers";

const SelectLocation = () => {
  const [location, setLocation] = useRecoilState(locationAtom);
  const [selectedLocation, setSelectedLocation] = useState(
    location.length ? location : "Select A State"
  );
  const [isRedirected, setIsRedirected] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  let locationMenuRef = useRef();

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedLocation !== "Select A State") {
      setLocation(selectedLocation);
      setIsRedirected(true);
    }
  };

  const handleSelection = (name) => {
    setSelectedLocation(name);
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

  if (isRedirected) {
    return <Redirect push to={`locations/${selectedLocation}`} />;
  } else {
    return (
      <form
        onSubmit={handleSubmit}
        ref={locationMenuRef}
        className="flex items-center"
      >
        <div className="z-40 mr-4">
          <TextPill width="w-88" onClick={handleExpand}>
            <Text type="p" className="w-full mr-8 cursor-default">
              {formatStateName(selectedLocation)}
            </Text>
            <IoIosArrowDown className="text-lg" />
          </TextPill>
          {isExpanded && (
            <TextPillExpanded width="w-88">
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
        <Button size="icon" type="primary">
          Go
        </Button>
      </form>
    );
  }
};

export default SelectLocation;
