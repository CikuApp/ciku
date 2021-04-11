import React from "react";
import PropTypes from "prop-types";

import { Text } from "components/Presentation";

function RecipeDirections({ recipeDirections }) {
  return (
    <section className="w-6/12 my-16">
      <Text type="h2">Directions</Text>
      <ol className="list-decimal list-inside">
        {recipeDirections.map((direction) => {
          return (
            <li className="my-4" key={direction}>
              {direction}
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default RecipeDirections;

RecipeDirections.propTypes = {
  recipeDirections: PropTypes.array,
};
