/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ children, ...props }) => (
  <li
    {...props}
    className="w-full px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
  >
    {children}
  </li>
);

export default ListItem;

ListItem.propTypes = {
  children: PropTypes.node.isRequired
};
