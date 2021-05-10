import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Text } from "components/Presentation";

import { toTitle } from "utils/dataHelpers";

const RecipeCard = ({ recipeObject }) => {
  return (
    <Link
      to={`/recipes/${recipeObject.name.replace(/ /g, "-")}`}
      className="w-80 h-112 my-8 flex-shrink-0"
    >
      <article className="flex flex-col rounded-lg shadow-lg bg-white overflow-hidden">
        <img
          src={recipeObject.image_url}
          alt={recipeObject.name}
          className="h-80 flex-shrink-0 object-cover overflow-hidden bg-gray-100 "
        />
        <div className="h-full w-full px-3 flex flex-col justify-evenly">
          <Text
            type="h5"
            className="w-full h-16 pt-1 font-bold whitespace-wrap overflow-hidden font-serif"
          >
            {toTitle(recipeObject.name)}
          </Text>
          <Text type="p" className="font-bold text-primary ">
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
