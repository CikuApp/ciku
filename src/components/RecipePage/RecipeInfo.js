import React from "react";
import PropTypes from "prop-types";

import StarRating from "components/RecipePage/StarRating";

function RecipeInfo({
  recipeName,
  recipeRating,
  recipeImage,
  recipeScore,
  recipeTime,
}) {
  const getTotalTime = (timeObject) => {
    return `${timeObject.reduce(
      (prev, curr) => prev.time + curr.time,
      0
    )} mins`;
  };

  return (
    <section>
      <h1>{recipeName}</h1>
      <StarRating numberRating={recipeRating} />
      <h2>Sustainability Score: {recipeScore}</h2>
      <img src={recipeImage} alt={recipeName}></img>
      <ul>
        {recipeTime.map((timeObject) => {
          return (
            <li>
              {timeObject.method}: {timeObject.time} {timeObject.units}
            </li>
          );
        })}
        <li>Total: {getTotalTime(recipeTime)}</li>
      </ul>
    </section>
  );
}

export default RecipeInfo;

RecipeInfo.propTypes = {
  recipeName: PropTypes.string,
  recipeRating: PropTypes.number,
  recipeScore: PropTypes.number,
  recipeImage: PropTypes.string,
  recipeTime: PropTypes.array,
};
