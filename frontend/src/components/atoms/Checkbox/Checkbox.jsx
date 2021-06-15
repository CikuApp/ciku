/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import PropTypes from 'prop-types';

const Checkbox = ({ checked, ...props }) =>
  checked ? (
    <span {...props}>
      <MdCheckBox className="text-secondary text-2xl" />
      <input type="checkbox" className="hidden" defaultChecked={checked} />
    </span>
  ) : (
    <span {...props}>
      <MdCheckBoxOutlineBlank className="text-gray-light text-2xl" />
      <input type="checkbox" className="hidden" defaultChecked={checked} />
    </span>
  );

export default Checkbox;

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired
};
