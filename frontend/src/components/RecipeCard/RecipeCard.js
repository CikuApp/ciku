import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Text } from "components/Presentation";

import { toTitle } from "utils/dataHelpers";

const RecipeCard = ({ recipeObject }) => {
  return (
    <Link
      to={`/recipes/${recipeObject.name.replace(/ /g, "-")}`}
      className="w-72 h-90 flex-shrink-0"
    >
      <article className="flex flex-col rounded-lg shadow-lg bg-white overflow-hidden">
        <img
          src={recipeObject.image_url}
          alt={recipeObject.name}
          className="h-72 flex-shrink-0 object-cover overflow-hidden bg-gray-100 "
        />
        <div className="h-28 w-full p-3 flex flex-col justify-evenly">
          <Text
            type="h5"
            className="h-16 w-full whitespace-wrap overflow-hidden font-serif font-bold leading-tight"
          >
            {toTitle(recipeObject.name)}
          </Text>
          <Text type="p" className="font-bold text-primary">
            Score: {recipeObject.sus_score}
          </Text>
        </div>
      </article>
    </Link>
  );
};

export default RecipeCard;

RecipeCard.propTypes = {
  recipeObject: PropTypes.object,
};
