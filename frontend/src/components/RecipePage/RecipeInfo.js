import React from "react";
import PropTypes from "prop-types";

// Components
import RecipeStats from "components/RecipePage/RecipeStats";
import SaveRecipeButton from "components/RecipePage/SaveRecipeButton";
import { Text } from "components/Presentation";

// Utils
import { toTitle } from "utils/dataHelpers";

const RecipeInfo = ({ recipe }) => {
  return (
    <div className="w-full flex">
      <div className="w-6/12 flex flex-col">
        <section className="mt-12 mb-4 pr-24">
          <Text type="h1" className="leading-normal">
            {toTitle(recipe.name)}
          </Text>
          <Text type="h4" className="mt-8">
            Recipe by: {recipe.contributor || "-"}
          </Text>
          <RecipeStats
            recipeTime={recipe.time}
            recipeScore={recipe.sus_score}
          />
        </section>
        <SaveRecipeButton recipe={recipe} />
      </div>
      <div className="w-6/12">
        <img
          src={recipe.image_url}
          alt={recipe.name}
          className="h-200 mb-8 border bg-gray-200 object-cover overflow-hidden rounded-xl"
        ></img>
      </div>
    </div>
  );
};

export default RecipeInfo;

RecipeInfo.propTypes = {
  recipe: PropTypes.object,
};
