import React from "react";
import PropTypes from "prop-types";
import { useRecoilValue } from "recoil";

import ProduceCard from "components/LocationPage/ProduceCard";
import { locationProduce } from "recoil/location";

function ProduceWrapper() {
  const produce = useRecoilValue(locationProduce);
  return (
    <section className="mb-12">
      <div className="flex flex-wrap justify-start">
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
