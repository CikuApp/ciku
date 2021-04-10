import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import locationAtom, { locationImage } from "recoil/location";
import ProduceWrapper from "components/LocationPage/ProduceWrapper";
import FindRecipesButton from "components/FindRecipesButton/FindRecipesButton";

function LocationPage() {
  const location = useRecoilValue(locationAtom);
  const image = useRecoilValue(locationImage);

  return (
    <div>
      <section>
        <h1>{location.name}</h1>
        <img src={image} alt={location.name} />
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate
        </p>
      </section>
      <ProduceWrapper />
      <FindRecipesButton />
    </div>
  );
}

export default LocationPage;
