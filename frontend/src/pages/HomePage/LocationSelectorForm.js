import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";

// States
import locationAtom from "recoil/location";

// Components
import LocationSelector from "components/common/LocationSelector";
import { Button } from "components/atoms";

const LocationSelectorForm = () => {
  const location = useRecoilValue(locationAtom);

  const [isRedirected, setIsRedirected] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location) {
      setIsRedirected(true);
    }
  };

  return isRedirected ? (
    <Redirect push to={`locations/${location}`} />
  ) : (
    <form onSubmit={handleSubmit} className="flex items-center">
      <LocationSelector />
      <Button type="primary-icon">Go</Button>
    </form>
  );
};

export default LocationSelectorForm;
