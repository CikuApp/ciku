import React from "react";
import PropTypes from "prop-types";

import StarRating from "components/StarRating/StarRating";

import { Icon, Text } from "components/Presentation";

import defaultIcon from "assets/images/user.png";

function RecipeReviews({ recipeReviews }) {
  const getRatingComment = (rating) => {
    if (rating === 5) {
      return "Delicious";
    }
  };

  return (
    <article>
      <Text type="h2">Reviews ({recipeReviews.length})</Text>
      {recipeReviews.map((reviewObject) => {
        return (
          <section key={reviewObject.id} className="my-16">
            <div className="flex items-center">
              <Icon
                src={defaultIcon}
                alt={reviewObject.name}
                size="sm"
                shape="circle"
                className="mr-4"
              />
              <Text type="h4" className="font-bold">
                {reviewObject.name}
              </Text>
            </div>
            <div className="flex items-center my-4">
              <StarRating
                numberRating={reviewObject.rating}
                className="mr-12"
              />
              <Text type="p" className="font-bold">
                {getRatingComment(reviewObject.rating)}
              </Text>
            </div>
            <Text type="p">{reviewObject.review}</Text>
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
