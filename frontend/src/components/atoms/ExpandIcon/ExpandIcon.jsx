/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const ExpandIcon = ({ props }) => (
  <IoIosArrowDown className="text-xl font-bold cursor-pointer" {...props} />
);

export default ExpandIcon;
