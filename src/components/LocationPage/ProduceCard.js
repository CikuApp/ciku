import React from "react";
import PropTypes from "prop-types";
import { useRecoilValue, useRecoilState } from "recoil";

import searchParamsAtom from "recoil/searchParams";

import { Text } from "components/Presentation";

function ProduceCard({ produceObject }) {
  const [searchParams, setSearchParams] = useRecoilState(searchParamsAtom);

  const isInSearchParams = () => {
    return searchParams.includes(produceObject.name) ? true : false;
  };

  const handleClick = () => {
    if (searchParams.includes(produceObject.name)) {
      setSearchParams((prevState) => {
        return [...prevState.filter((item) => item !== produceObject.name)];
      });
    } else {
      setSearchParams((prevState) => [...prevState, produceObject.name]);
    }
  };

  return (
    <div className="w-72 h-12 my-4 flex-shrink-0 flex items-center border border-gray-500">
      <input
        type="checkbox"
        defaultChecked={isInSearchParams}
        onClick={handleClick}
        className="mx-4"
      />
      <img
        src={produceObject.image}
        alt=""
        className="h-full w-12 mr-4 bg-gray-100"
      />
      <Text type="h5">{produceObject.name}</Text>
    </div>
  );
}

export default ProduceCard;

ProduceCard.propTypes = {
  produceObject: PropTypes.object,
};
