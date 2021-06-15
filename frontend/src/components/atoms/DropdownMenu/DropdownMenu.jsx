import React from 'react';
import PropTypes from 'prop-types';

// Components
import { ExpandIcon } from 'components/atoms';

const DropdownMenu = React.forwardRef(
  ({ selectorName, isExpanded, handleExpand, children }, ref) => (
    <div ref={ref} className="z-40">
      <button
        type="button"
        onClick={handleExpand}
        className={`h-16 flex items-center px-8 rounded-t-lg text-xl font-bold ${
          isExpanded && 'bg-secondary text-white'
        }`}
      >
        {selectorName}
        <span className="ml-4 mt-1">
          <ExpandIcon />
        </span>
      </button>
      {isExpanded && (
        <div className="absolute w-auto h-auto py-4 px-2 bg-white rounded-lg rounded-tl-none shadow-sm">
          {children}
        </div>
      )}
    </div>
  )
);

export default DropdownMenu;

DropdownMenu.propTypes = {
  selectorName: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  handleExpand: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};
