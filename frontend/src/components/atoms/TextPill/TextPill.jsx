/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const textPillSize = {
  sm: `
    w-64
  `,
  md: `
    w-72
  `
};

const TextPill = ({ type, children, ...props }) => {
  const classes = `
    relative 
    flex-shrink-0 ${textPillSize[type]} h-11
    flex justify-between items-center
    px-4
    border border-black-light rounded-lg
    bg-white
  `;
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};

export default TextPill;

TextPill.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
