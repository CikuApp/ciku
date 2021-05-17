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
      className="justify-self-stretch min-w-68 h-16 my-8 mx-3 flex items-center overflow-hidden bg-white rounded-md shadow-md hover:shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      <div className="mx-4">
        <Checkbox checked={isInSearchParams()} />
      </div>
      <div className="h-14 w-14 mx-2 my-2 mr-8 flex items-center justify-center bg-gray-100 rounded">
        {produceObject.image ? (
          <img src={produceObject.image} alt="" />
        ) : (
          <GiTomato className="text-gray-dark text-4xl" />
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
