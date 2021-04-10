import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import locationAtom from "recoil/location";

function SelectLocation() {
  const [location, setLocation] = useRecoilState(locationAtom);

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <form>
      <label htmlFor="location">Select A State</label>
      <select
        name="location"
        id="location"
        value={location}
        onChange={handleChange}
      ></select>
    </form>
  );
}

export default SelectLocation;
