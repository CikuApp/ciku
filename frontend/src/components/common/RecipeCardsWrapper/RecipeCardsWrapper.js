import React from "react";
import PropTypes from "prop-types";

// Components
import RecipeCard from "components/common/RecipeCard";

const RecipeCardsWrapper = ({ results }) => {
  return (
    <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-16">
      {results.map((result) => {
        return <RecipeCard key={result.id} recipeObject={result} />;
      })}
    </div>
  );
};

export default RecipeCardsWrapper;

RecipeCardsWrapper.propTypes = {
  results: PropTypes.array,
};
