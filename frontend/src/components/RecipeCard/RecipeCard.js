import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// import StarRating from "components/StarRating/StarRating";

import { Text } from "components/Presentation";

import { toTitle } from "utils/dataHelpers";

function RecipeCard({ recipeObject }) {
  return (
    <Link to={`/recipes/${recipeObject.name.replace(/ /g, "-")}`}>
      <article className="w-64 h-88 flex flex-col my-8 border">
        <img
          src={recipeObject.image}
          alt={recipeObject.name}
          className="bg-gray-100 w-64 h-64 flex-shrink-0"
        />
        <div className="h-full w-full px-2 flex flex-col justify-evenly">
          <Text
            type="p"
            className="w-full font-bold whitespace-nowrap overflow-ellipsis overflow-hidden"
          >
            {toTitle(recipeObject.name)}
          </Text>
          <Text type="p" className="font-bold">
            Score: {recipeObject.sus_score}
          </Text>
          {/* <StarRating numberRating={recipeObject.rating} /> */}
        </div>
      </article>
    </Link>
  );
}

export default RecipeCard;

RecipeCard.propTypes = {
  recipeObject: PropTypes.object,
};
