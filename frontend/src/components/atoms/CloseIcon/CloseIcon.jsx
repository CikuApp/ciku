/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

// Components
import { IoClose } from 'react-icons/io5';

const CloseIcon = props => (
  <IoClose className="text-2xl mx-2 cursor-pointer" {...props} />
);

export default CloseIcon;
