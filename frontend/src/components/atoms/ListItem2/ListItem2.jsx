/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const ListItem2 = props => {
  const { children } = props;
  return (
    <li {...props} className="w-full px-4 py-2 flex items-center space-x-8">
      {children}
    </li>
  );
};

export default ListItem2;

ListItem2.propTypes = {
  children: PropTypes.node.isRequired
};
