import React from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";

import StarRating from "components/StarRating/StarRating";

import { Text } from "components/Presentation";

function RecipeCard({ recipeObject }) {
  return (
    <Link to={`/recipes/${recipeObject.id}`}>
      <article className="w-72 h-96 flex flex-col my-8 border">
        <img
          src={recipeObject.image}
          alt={recipeObject.name}
          className="bg-gray-100 w-72 h-72"
        />
        <Text type="h3">{recipeObject.name}</Text>
        <StarRating numberRating={recipeObject.rating} />
      </article>
    </Link>
  );
}

export default RecipeCard;

RecipeCard.propTypes = {
  recipeObject: PropTypes.object,
};
