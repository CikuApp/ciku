/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Text, Heading, ListItem2 } from 'components/atoms';

// Utils
import { toSentence } from 'utils/dataHelpers';

const RecipeDirections = ({ recipeDirections }) => (
  <section className="w-1/2">
    <Heading type="h3">Directions</Heading>
    <ol className="list-inside space-y-3 my-8 -ml-4">
      {recipeDirections.map((direction, index) => (
        <ListItem2 key={direction}>
          <Text type="sm">
            <span className="mr-2">{index + 1}.</span>
            {toSentence(direction)}
          </Text>
        </ListItem2>
      ))}
    </ol>
  </section>
);

export default RecipeDirections;

RecipeDirections.propTypes = {
  recipeDirections: PropTypes.array.isRequired
};
