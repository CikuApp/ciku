import React from "react";
import PropTypes from "prop-types";

import { Text } from "components/Presentation";

import { toSentence } from "utils/dataHelpers";

function RecipeDirections({ recipeDirections }) {
  return (
    <section className="w-6/12 my-16">
      <Text type="h2">Directions</Text>
      <ol className="list-inside">
        {recipeDirections.map((direction, index) => {
          return (
            <li className="my-8 flex" key={direction}>
              <Text type="p">
                <span>{index + 1}. </span>
                {toSentence(direction)}
              </Text>
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
