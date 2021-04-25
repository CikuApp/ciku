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
    <div className="min-w-72 justify-self-stretch h-20 my-8 mx-3 flex items-center bg-white rounded-xl shadow-lg">
      <Checkbox
        checked={isInSearchParams()}
        handleClick={handleClick}
        className="mx-6"
      />
      <img
        src={produceObject.image}
        alt=""
        className="h-16 w-16 mx-2 my-2 mr-8 bg-gray-100 "
      />
      <Text type="h4" className="font-bold">
        {produceObject.name}
      </Text>
    </div>
  );
}

export default ProduceCard;

ProduceCard.propTypes = {
  produceObject: PropTypes.object,
};
