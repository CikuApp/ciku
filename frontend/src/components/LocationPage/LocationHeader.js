import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";

// Atoms
import locationAtom from "recoil/location";

// Components
import { Text, PageContainer } from "components/Presentation";

const LocationHeader = () => {
  const { locationName } = useParams();
  const [location, setLocation] = useRecoilState(locationAtom);

  useEffect(() => {
    setLocation(locationName);
  }, [locationName, setLocation]);

  return (
    <PageContainer className="h-200 flex items-end py-16 bg-california bg-cover bg-no-repeat">
      <div className="max-w-max p-16 -ml-16 rounded-xl bg-black-dark bg-opacity-80 text-white">
        <Text type="h1" className="font-bold tracking-wide">
          {locationName.toUpperCase()}
        </Text>
      </div>
    </PageContainer>
  );
};

export default LocationHeader;
