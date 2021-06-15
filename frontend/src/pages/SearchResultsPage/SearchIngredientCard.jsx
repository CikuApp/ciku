import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Text, CloseIcon } from 'components/atoms';

const SearchIngredientsCard = ({ ingredient, handleDelete }) => (
  <div className="h-10 min-w-max flex items-start pl-4 py-2 mb-6 mx-4 bg-secondary text-white">
    <Text type="xs">{ingredient}</Text>
    <CloseIcon onClick={handleDelete} />
  </div>
);

export default SearchIngredientsCard;

SearchIngredientsCard.propTypes = {
  ingredient: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired
};
