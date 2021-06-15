/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const TextPillExpanded = ({ children, ...props }) => {
  const classes = `
  absolute w-72 h-56  
  z-50
  pt-1 
  overflow-y-scroll
  rounded-bl-lg rounded-br-lg 
  bg-white shadow-sm
  `;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default TextPillExpanded;

TextPillExpanded.propTypes = {
  children: PropTypes.node.isRequired
};
