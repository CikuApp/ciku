import React from "react";
import PropTypes from "prop-types";

// import StarRating from "components/StarRating/StarRating";

import { Text } from "components/Presentation";

function RecipeInfo({ recipeName, recipeScore, recipeTime, recipeAuthor }) {
  return (
    <section className="mt-12 mb-4 pr-24">
      <Text type="h1">{recipeName}</Text>
      <Text type="h4" className="mt-8">
        Recipe by: {recipeAuthor}
      </Text>
      <div className="w-full flex justify-between text-center my-20">
        <div className="pr-8 py-4 ">
          <Text type="h2">{recipeTime}</Text>
          <Text type="p">Minutes</Text>
        </div>
        <div className="px-16 py-4 flex flex-col items-center justify-center border-r-2 border-l-2 border-black">
          <Text type="h2" className="">
            {recipeScore}
          </Text>
          <Text type="p">Sustainability Score</Text>
        </div>
        <div className="px-8 py-4 ">
          <Text type="h2">0</Text>
          <Text type="p" className="bold">
            Servings
          </Text>
        </div>
      </div>
    </section>
  );
}

export default RecipeInfo;

RecipeInfo.propTypes = {
  recipeName: PropTypes.string,
  // recipeRating: PropTypes.number,
  recipeScore: PropTypes.number,
  recipeTime: PropTypes.number,
};
