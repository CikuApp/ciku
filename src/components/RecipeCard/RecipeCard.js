import React from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";
import { Link, useRouteMatch } from "react-router-dom";

import StarRating from "components/StarRating/StarRating";

function RecipeCard({ recipeObject }) {
  let match = useRouteMatch();

  return (
    <Link to={`${match.url}/${recipeObject.id}`}>
      <article>
        <img src={recipeObject.image} alt={recipeObject.name} />
        <h2>{recipeObject.name}</h2>
        <StarRating numberRating={recipeObject.rating} />
      </article>
    </Link>
  );
}

export default RecipeCard;

RecipeCard.propTypes = {
  recipeObject: PropTypes.object,
};
