import React from "react";
import PropTypes from "prop-types";

import StarRating from "components/StarRating/StarRating";

function RecipeCard({ recipeObject }) {
  return (
    <article>
      <img src={recipeObject.image} alt={recipeObject.name} />
      <h2>{recipeObject.name}</h2>
      <StarRating numberRating={recipeObject.rating} />
    </article>
  );
}

export default RecipeCard;

RecipeCard.propTypes = {
  recipeObject: PropTypes.object,
};
