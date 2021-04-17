import React from "react";
import PropTypes from "prop-types";
import { useRecoilValue, useRecoilState } from "recoil";

import ProduceCard from "components/LocationPage/ProduceCard";
import { locationProduce } from "recoil/location";

import { Text } from "components/Presentation";

function ProduceWrapper() {
  const produce = useRecoilValue(locationProduce);
  return (
    <section className="mb-12">
      <Text type="h2" className="mb-8">
        Find Recipes By Ingredient
      </Text>
      <div className="flex flex-wrap justify-between">
        {produce.map((produceItem) => {
          return (
            <ProduceCard
              produceObject={{ name: produceItem }}
              key={produceItem}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ProduceWrapper;

ProduceWrapper.propTypes = {
  produceData: PropTypes.array,
};
