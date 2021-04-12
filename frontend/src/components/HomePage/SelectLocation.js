import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";

import locationAtom from "recoil/location";

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
    return <Redirect to={`locations/${selectedLocation}`} />;
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
          <option value="california">California</option>
        </select>
        <button type="submit">Go</button>
      </form>
    );
  }
}

export default SelectLocation;
