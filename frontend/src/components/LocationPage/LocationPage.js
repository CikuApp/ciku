import React, { useEffect, Suspense } from "react";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";

import locationAtom from "recoil/location";
import ProduceWrapper from "components/LocationPage/ProduceWrapper";
import FindRecipesButton from "components/FindRecipesButton/FindRecipesButton";

import { Text, PageContainer } from "components/Presentation";

function LocationPage() {
  // const location = useRecoilValue(locationAtom);
  // const image = useRecoilValue(locationImage);
  const { locationName } = useParams();
  const [location, setLocation] = useRecoilState(locationAtom);

  useEffect(() => {
    setLocation(locationName);
  }, [locationName, setLocation]);

  return (
    <main className="w-full h-screen">
      <section className="h-1/2 bg-gray-200">
        <PageContainer className="h-full flex flex-col justify-center">
          <Text type="h1">{locationName.toUpperCase()}</Text>
          <img src="" alt="" />
          <Text className="w-5/12 my-8">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate
          </Text>
        </PageContainer>
      </section>
      <PageContainer className="flex flex-col items-center pb-24">
        <Text type="h2" className="mb-8 self-start">
          Find Recipes By Ingredient
        </Text>
        <Suspense fallback={<div>loading</div>}>
          <ProduceWrapper />
          <FindRecipesButton />
        </Suspense>
      </PageContainer>
    </main>
  );
}

export default LocationPage;
