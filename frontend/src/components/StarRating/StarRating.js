import React from "react";
import PropTypes from "prop-types";
import { IoStarHalf, IoStar } from "react-icons/io5";

function StarRating({ numberRating, className }) {
  const ratingToStars = (rating) => {
    rating = +rating;
    let fullStar = Math.floor(rating);
    let stars = Array(Math.floor(+rating)).fill(1);
    stars.push = rating - fullStar > 0 && 0.5;
    return stars;
  };

  const classNames = `flex ${className}`;

  return (
    <section className={classNames}>
      {ratingToStars(numberRating).map((star) => {
        return star === 1 ? (
          <IoStar className="text-gray-400 text-xl mr-1" />
        ) : (
          <IoStarHalf className="text-gray-400" />
        );
      })}
    </section>
  );
}

export default StarRating;

StarRating.propTypes = {
  rating: PropTypes.number,
};
