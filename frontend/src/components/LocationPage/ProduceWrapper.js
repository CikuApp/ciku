import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useRecoilValue, useRecoilState } from "recoil";

// Atoms
import searchParamsAtom from "recoil/searchParams";

// Components
import ProduceCard from "components/LocationPage/ProduceCard";
import { locationProduce } from "recoil/location";

const ProduceWrapper = () => {
  const produce = useRecoilValue(locationProduce);
  const [searchParams, setSearchParams] = useRecoilState(searchParamsAtom);

  useEffect(() => {
    setSearchParams([]);
  }, [setSearchParams]);

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
