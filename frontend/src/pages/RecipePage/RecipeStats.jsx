import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Text } from 'components/atoms';

const RecipeStats = ({ recipeTime, recipeScore }) => (
  <div className="w-full -ml-8 flex items-center justify-start divide-x divide-black text-center">
    <div className="w-1/4 h-24 space-y-1 flex flex-col justify-center">
      <Text type="2xl" variant="medium">
        {recipeTime || '-'}
      </Text>
      <Text type="sm">Minutes</Text>
    </div>
    <div className="w-1/2 h-24 space-y-1 flex flex-col justify-center">
      <Text type="2xl" variant="medium">
        {recipeScore}
      </Text>
      <Text type="sm">Sustainability Score</Text>
    </div>
    <div className="w-1/4 h-24 space-y-1 flex flex-col justify-center">
      <Text type="2xl" variant="medium">
        -
      </Text>
      <Text type="sm">Servings</Text>
    </div>
  </div>
);

export default RecipeStats;

RecipeStats.propTypes = {
  recipeScore: PropTypes.number.isRequired,
  recipeTime: PropTypes.number.isRequired
};
