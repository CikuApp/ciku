import React from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";

import StarRating from "components/StarRating/StarRating";

import { Text } from "components/Presentation";

import { toTitle } from "utils/dataHelpers";

function RecipeCard({ recipeObject }) {
  return (
    <Link to={`/recipes/${recipeObject.id}`}>
      <article className="w-64 h-80 flex flex-col my-8 mx-1 border">
        <img
          src={recipeObject.image}
          alt={recipeObject.name}
          className="bg-gray-100 w-64 h-64"
        />
        <Text type="p" className="overflow-ellipsis h-24 px-2">
          {toTitle(recipeObject.name)}
        </Text>
        {/* <StarRating numberRating={recipeObject.rating} /> */}
      </article>
    </Link>
  );
}

export default RecipeCard;

RecipeCard.propTypes = {
  recipeObject: PropTypes.object,
};
