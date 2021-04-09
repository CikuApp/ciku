import React from "react";
import PropTypes from "prop-types";

import StarRating from "components/RecipePage/StarRating";

function RecipeReviews({ recipeReviews }) {
  const getRatingComment = (rating) => {
    if (rating === 5) {
      return "Delicious";
    }
  };

  return (
    <article>
      {recipeReviews.map((reviewObject) => {
        return (
          <section>
            <img src={reviewObject.icon} alt={reviewObject.name}></img>
            <h3>{reviewObject.name}</h3>
            <StarRating numberRating={reviewObject.rating} />
            <p>{getRatingComment(reviewObject.rating)}</p>
            <p>{reviewObject.review}</p>
          </section>
        );
      })}
    </article>
  );
}

export default RecipeReviews;

RecipeReviews.propTypes = {
  recipeReviews: PropTypes.array,
};
