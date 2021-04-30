import React from "react";
import PropTypes from "prop-types";

import { Text } from "components/Presentation";

const RecipeStats = ({ recipeTime, recipeScore }) => {
  return (
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
  );
};

export default RecipeStats;

RecipeStats.propTypes = {
  recipeScore: PropTypes.number,
  recipeTime: PropTypes.number,
};
