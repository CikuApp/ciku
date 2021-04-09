import React from "react";
import PropTypes from "prop-types";

function RecipeIngredients({ recipeIngredients }) {
  return (
    <section>
      <h2>Directions</h2>
      <ul>
        {recipeIngredients.map((ingredient) => {
          return (
            <li>
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
