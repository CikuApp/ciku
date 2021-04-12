import React from "react";
import PropTypes from "prop-types";

import StarRating from "components/StarRating/StarRating";

import { Text } from "components/Presentation";

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
    <section className="grid grid-flow-row grid-cols-12">
      <div className="col-span-12 my-8">
        <Text type="h1">{recipeName}</Text>
        <StarRating numberRating={recipeRating} />
        <Text type="h3">Sustainability Score: {recipeScore}</Text>
      </div>
      <img
        src={recipeImage}
        alt={recipeName}
        className="col-span-6 h-80 mb-8 border bg-gray-200"
      ></img>
      <ul className="h-40 col-start-8 col-span-3 flex flex-col justify-between p-8 border border-black ">
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
