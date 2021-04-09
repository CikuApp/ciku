import React from "react";
import PropTypes from "prop-types";
import { useRecoilValue, useRecoilState } from "recoil";

import searchParamsAtom from "recoil/searchParams";

function ProduceCard({ produceObject }) {
  const [searchParams, setSearchParams] = useRecoilState(searchParamsAtom);

  const isInSearchParams = () => {
    return searchParams.contains(produceObject.name) ? true : false;
  };

  const handleClick = () => {
    if (searchParams.contains(produceObject.name)) {
      setSearchParams((prevState) => {
        return [...prevState.filter((item) => item !== produceObject.name)];
      });
    } else {
      setSearchParams((prevState) => [...prevState, produceObject.name]);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={isInSearchParams}
        onClick={handleClick}
      />
      <img src={produceObject.image} alt={produceObject.name} />
      <p>{produceObject.name}</p>
    </div>
  );
}

export default ProduceCard;

ProduceCard.propTypes = {
  produceObject: PropTypes.object,
};
