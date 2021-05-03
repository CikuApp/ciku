import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";

// Atoms
import locationAtom from "recoil/location";

// Components
import { Text, PageContainer } from "components/Presentation";

const Information = () => {
  const { locationName } = useParams();
  const [location, setLocation] = useRecoilState(locationAtom);

  useEffect(() => {
    setLocation(locationName);
  }, [locationName, setLocation]);

  return (
    <PageContainer className="flex items-center py-36 bg-california bg-cover bg-no-repeat">
      <div className="w-1/2 p-16 ml-0 lg:-ml-16 flex flex-col items-stretch bg-black bg-opacity-80 text-white">
        <Text type="h1" className="mb-10">
          {locationName.toUpperCase()}
        </Text>
        <Text type="p">
          Choose from the list of fruits and vegetables below to learn how to
          make delicious meals with them! Each recipe is ranked with a
          sustainability score: the higher the number, the more seasonal
          ingredients are in the dish.
        </Text>
      </div>
    </PageContainer>
  );
};

export default Information;
