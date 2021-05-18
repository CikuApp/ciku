import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Components
import { Text } from "components/atoms";

// Utils
import { toTitle } from "utils/dataHelpers";

const RecipeMiniCard = ({ recipe }) => {
  return (
    <Link to={`/recipes/${recipe.name.replace(/ /g, "-")}`}>
      <div className="w-96 h-18 flex-shrink-0 space-x-4 mb-8 p-1 flex items-center rounded-lg shadow-md hover:shadow-lg bg-white overflow-hidden">
        <img
          src={recipe.image_url}
          alt={recipe.name}
          className="h-16 w-16 flex-shrink-0 flex items-center justify-center bg-gray-100 rounded object-cover overflow-hidden"
        />
        <Text type="md" variant="bold">
          {toTitle(recipe.name)}
        </Text>
      </div>
    </Link>
  );
};

export default RecipeMiniCard;

RecipeMiniCard.propTypes = {
  recipe: PropTypes.object,
};
