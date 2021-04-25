import React from "react";
import PropTypes from "prop-types";

// Components
import { IoClose } from "react-icons/io5";
import { Text } from "components/Presentation";

function SearchIngredientsCard({ ingredient, handleDelete }) {
  return (
    <div className="h-12 min-w-max flex items-center mx-2 mb-4 p-2 bg-gray-300">
      <IoClose onClick={handleDelete} className="text-lg mt-1" />
      <Text type="p" className="mx-2">
        {ingredient}
      </Text>
    </div>
  );
}

export default SearchIngredientsCard;

SearchIngredientsCard.propTypes = {
  ingredient: PropTypes.string,
};
