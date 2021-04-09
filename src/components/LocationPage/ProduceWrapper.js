import React from "react";
import PropTypes from "prop-types";
import { useRecoilValue, useRecoilState } from "recoil";

import ProduceCard from "components/LocationPage/ProduceCard";
import { locationProduce } from "recoil/location";

function ProduceWrapper() {
  const produce = useRecoilValue(locationProduce);
  return (
    <section>
      <h2>Find Recipes By Ingredient</h2>
      {produce.map((produceObject) => {
        return (
          <ProduceCard produceObject={produceObject} key={produceObject.id} />
        );
      })}
    </section>
  );
}

export default ProduceWrapper;

ProduceWrapper.propTypes = {
  produceData: PropTypes.array,
};
