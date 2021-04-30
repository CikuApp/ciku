import React from "react";
import PropTypes from "prop-types";
import { useRecoilValue } from "recoil";

// Components
import ProduceCard from "components/LocationPage/ProduceCard";
import { locationProduce } from "recoil/location";

const ProduceWrapper = () => {
  const produce = useRecoilValue(locationProduce);

  return (
    <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 mb-12">
      {produce.map((produceItem) => {
        return (
          <ProduceCard
            produceObject={{ name: produceItem }}
            key={produceItem}
          />
        );
      })}
    </div>
  );
};

export default ProduceWrapper;

ProduceWrapper.propTypes = {
  produceData: PropTypes.array,
};
