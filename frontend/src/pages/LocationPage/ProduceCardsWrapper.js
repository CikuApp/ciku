import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useRecoilValue, useSetRecoilState } from "recoil";

// States
import searchParamsAtom from "recoil/searchParams";
import { locationProduce } from "recoil/location";

// Components
import ProduceCard from "pages/LocationPage/ProduceCard";

const ProduceCardsWrapper = () => {
  const produce = useRecoilValue(locationProduce);
  const setSearchParams = useSetRecoilState(searchParamsAtom);

  useEffect(() => {
    setSearchParams([]);
  }, [setSearchParams]);

  return (
    <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 mb-12">
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

export default ProduceCardsWrapper;

ProduceCardsWrapper.propTypes = {
  produceData: PropTypes.array,
};
