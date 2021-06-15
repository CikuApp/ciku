import React from 'react';
import PropTypes from 'prop-types';

// Components
import { CloseIcon } from 'components/atoms';

const Tooltip = ({ handleClose, children }) => (
  <span className="absolute top-9 left-0 z-50 flex flex-col items-start">
    <span className="w-6 h-6 -mb-4 ml-6 transform rotate-45 skew-y-12 skew-x-12 bg-info rounded-sm" />
    <span className="w-112 flex flex-col items-center justify-center p-8 bg-info text-white font-normal rounded-lg shadow-sm">
      <span className="absolute top-4 right-1">
        <CloseIcon onClick={handleClose} />
      </span>
      {children}
    </span>
  </span>
);

export default Tooltip;

Tooltip.propTypes = {
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};
