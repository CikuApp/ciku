import React from "react";
import PropTypes from "prop-types";

function StarRating({ numberRating }) {
  const ratingToStars = (rating) => {
    rating = +rating;
    let fullStar = Math.floor(rating);
    let stars = Array(Math.floor(+rating)).fill(1);
    stars.push = rating - fullStar > 0 && 0.5;
    return stars;
  };

  return (
    <section>
      {ratingToStars(numberRating).map((star) => {
        star === 1 ? (
          <img alt="full-star">star</img>
        ) : (
          <img alt="half-star">half-star</img>
        );
      })}
    </section>
  );
}

export default StarRating;

StarRating.propTypes = {
  rating: PropTypes.number,
};
