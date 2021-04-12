import React from "react";
import PropTypes from "prop-types";

import { Text } from "components/Presentation";

function RecipeIngredients({ recipeIngredients }) {
  return (
    <section className="my-16">
      <Text type="h2">Ingredients</Text>
      <ul className="ml-8 my-8">
        {recipeIngredients.map((ingredient) => {
          return (
            <li className="my-4" key="ingredient">
              {ingredient.quantity} {ingredient.name}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default RecipeIngredients;

RecipeIngredients.propTypes = {
  recipeIngredients: PropTypes.array,
};
