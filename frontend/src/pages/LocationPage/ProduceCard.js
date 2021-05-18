import React from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";

// States
import searchParamsAtom from "recoil/searchParams";

// Components
import { Text, Checkbox } from "components/atoms";
import { GiTomato } from "react-icons/gi";

const ProduceCard = ({ produceObject }) => {
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
    <div
      className="justify-self-stretch min-w-68 h-16 my-8 mr-6 px-4 space-x-8 flex items-center overflow-hidden bg-white rounded-md shadow-md hover:shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      <Checkbox checked={isInSearchParams()} />

      <div className="h-14 w-14 flex items-center justify-center bg-gray-100 rounded">
        {produceObject.image ? (
          <img src={produceObject.image} alt="" />
        ) : (
          <GiTomato className="text-gray-light text-4xl" />
        )}
      </div>
      <Text type="md" variant="bold">
        {produceObject.name}
      </Text>
    </div>
  );
};

export default ProduceCard;

ProduceCard.propTypes = {
  produceObject: PropTypes.object,
};
