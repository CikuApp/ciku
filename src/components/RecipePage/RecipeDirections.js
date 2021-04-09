import React from "react";
import PropTypes from "prop-types";

function RecipeDirections({ recipeDirections }) {
  return (
    <section>
      <h2>Directions</h2>
      {recipeDirections.map((direction) => {
        return <p>{direction}</p>;
      })}
    </section>
  );
}

export default RecipeDirections;

RecipeDirections.propTypes = {
  recipeDirections: PropTypes.array,
};
