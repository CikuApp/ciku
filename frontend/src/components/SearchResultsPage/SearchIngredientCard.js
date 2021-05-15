import React from "react";
import PropTypes from "prop-types";

// Components
import { IoClose } from "react-icons/io5";
import { Text } from "components/Presentation";

const SearchIngredientsCard = ({ ingredient, handleDelete }) => {
  return (
    <div className="h-12 min-w-max flex items-center mx-4 p-2 bg-secondary text-white">
      <Text type="p" className="mx-2 mb-1">
        {ingredient}
      </Text>
      <IoClose onClick={handleDelete} className="text-3xl" />
    </div>
  );
};

export default SearchIngredientsCard;

SearchIngredientsCard.propTypes = {
  ingredient: PropTypes.string,
};
