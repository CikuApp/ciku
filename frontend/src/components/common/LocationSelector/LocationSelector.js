import React, { useEffect, useState, useRef } from "react";
import { useRecoilState } from "recoil";

// States
import locationAtom from "recoil/location";

// Components
import {
  Text,
  TextPill,
  TextPillExpanded,
  ExpandIcon,
  ListItem,
} from "components/atoms";

// Utils
import { formatStateName } from "utils/dataHelpers";

// Data
import stateNames from "data/stateNames";

const LocationSelector = () => {
  const [location, setLocation] = useRecoilState(locationAtom);
  const [isExpanded, setIsExpanded] = useState(false);
  const locationSelectorRef = useRef();

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const handleLocationSelection = (value) => {
    if (value !== "Select A State") {
      setLocation(value);
      setIsExpanded(false);
    }
  };

  const handleExpandSelector = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const handleClick = (e) => {
    if (
      locationSelectorRef.current &&
      !locationSelectorRef.current.contains(e.target)
    ) {
      setIsExpanded(false);
    }
  };

  return (
    <span className="z-40 mr-6" ref={locationSelectorRef}>
      <TextPill type="md" onClick={handleExpandSelector}>
        <Text type="xs">
          {location.length ? formatStateName(location) : "Select A State"}
        </Text>
        <ExpandIcon />
      </TextPill>
      {isExpanded && (
        <TextPillExpanded>
          <ul>
            {stateNames.map((name) => {
              return (
                <ListItem
                  onClick={() => handleLocationSelection(name)}
                  key={name}
                >
                  <Text type="xs">{formatStateName(name)}</Text>
                </ListItem>
              );
            })}
          </ul>
        </TextPillExpanded>
      )}
    </span>
  );
};

export default LocationSelector;
