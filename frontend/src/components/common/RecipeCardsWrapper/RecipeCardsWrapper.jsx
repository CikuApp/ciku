/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

// Components
import RecipeCard from 'components/common/RecipeCard';

const RecipeCardsWrapper = ({ results }) => (
  <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-16">
    {results.map(result => (
      <RecipeCard key={result.id} recipeObject={result} />
    ))}
  </div>
);

export default RecipeCardsWrapper;

RecipeCardsWrapper.defaultProps = {
  results: []
};

RecipeCardsWrapper.propTypes = {
  results: PropTypes.array
};
