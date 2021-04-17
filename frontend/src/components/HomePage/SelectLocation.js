import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";

import locationAtom from "recoil/location";
import { stateNames, formatStateName } from "components/HomePage/stateNames";

function SelectLocation() {
  const [location, setLocation] = useRecoilState(locationAtom);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isRedirected, setIsRedirected] = useState(false);

  const handleChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedLocation !== "") {
      setLocation(selectedLocation);
      setIsRedirected(true);
    }
  };

  if (isRedirected) {
    return <Redirect push to={`locations/${selectedLocation}`} />;
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="location"></label>
        <select
          name="location"
          id="location"
          value={selectedLocation}
          onChange={handleChange}
          className="w-48 py-2 px-4 appearance-none"
        >
          <option value="">Select A State</option>
          {stateNames.map((name) => {
            return (
              <option value={name} key={name}>
                {formatStateName(name)}
              </option>
            );
          })}
        </select>
        <button type="submit">Go</button>
      </form>
    );
  }
}

export default SelectLocation;
