/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const buttonType = {
  primary: `
    w-48 min-w-max 
    h-12  
    flex items-center justify-center 
    rounded-lg  
    bg-secondary hover:bg-secondary-dark 
    text-xl font-bold text-white 
    `,
  'primary-icon': `
    w-11 h-11 
    flex items-center justify-center 
    rounded-lg  
    bg-secondary hover:bg-secondary-dark 
    text-xl font-bold text-white 
    `,
  secondary: `
    w-48 min-w-max 
    h-11 
    flex items-center justify-center
    border-2 rounded-lg border-secondary hover:border-4 
    text-sm font-bold text-black-light
    `,
  'secondary-active': `
    w-48 min-w-max 
    h-11 
    flex items-center justify-center 
    border-2 rounded-lg border-black-green 
    bg-secondary 
    text-sm font-bold text-white
    `,
  nav: `
    min-w-max w-auto  
    py-1.5 px-3
    flex items-center justify-center 
    bg-transparent 
    text-white text-base font-bold
    `
};

const Button = ({ type, children, ...props }) => (
  <button className={buttonType[type]} {...props}>
    {children}
  </button>
);

export default Button;

Button.propTypes = {
  type: PropTypes.string.isRequired
};
