import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";

import searchParamsAtom from "recoil/searchParams";

import { Text, Checkbox } from "components/Presentation";

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

  useEffect(() => {
    setSearchParams([]);
  }, [setSearchParams]);

  return (
    <div className="min-w-72 justify-self-stretch h-16 my-4 mx-3 flex items-center border border-gray-500">
      <Checkbox
        checked={isInSearchParams()}
        handleClick={handleClick}
        className="mx-6"
      />
      <img
        src={produceObject.image}
        alt=""
        className="h-full w-16 mr-4 bg-gray-100"
      />
      <Text type="h5">{produceObject.name}</Text>
    </div>
  );
}

export default ProduceCard;

ProduceCard.propTypes = {
  produceObject: PropTypes.object,
};
