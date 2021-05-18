import React from "react";
import PropTypes from "prop-types";

// Components
import { IoClose } from "react-icons/io5";
import { Text } from "components/atoms";

const SearchIngredientsCard = ({ ingredient, handleDelete }) => {
  return (
    <div className="h-10 min-w-max flex items-start pl-4 py-2 mb-6 mx-4 bg-secondary text-white">
      <Text type="xs">{ingredient}</Text>
      <IoClose onClick={handleDelete} className="text-2xl mx-2" />
    </div>
  );
};

export default SearchIngredientsCard;

SearchIngredientsCard.propTypes = {
  ingredient: PropTypes.string,
};
