/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Tooltip, Text } from 'components/atoms';

// Hooks
import useExpandable from 'hooks/useExpandable';

const SustainabilityScoreTooltip = ({ title }) => {
  const [isExpanded, toggleExpanded, closeExpanded] = useExpandable();

  return (
    <span className="relative mx-1">
      <span
        onClick={toggleExpanded}
        className="cursor-pointer"
        role="button"
        tabIndex={0}
      >
        <Text type="xs" variant="em-link">
          {title}
        </Text>
      </span>
      {isExpanded && (
        <Tooltip handleClose={closeExpanded}>
          <div className="space-y-6 mt-2">
            <Text type="sm" variant="tooltip">
              Every recipe is given a sustainability score marked in orange. It
              helps you identify which recipes include more sustainable
              ingredients.
            </Text>
            <Text type="sm" variant="tooltip">
              An ingredient that is both seasonal and local receives +2 points.
              If it&apos;s only seasonal, it receives +1 point.
            </Text>
            <Text type="sm" variant="tooltip">
              Add up the points, and you get the sustainability score! The
              higher the number, the more sustainable the recipe.
            </Text>
          </div>
        </Tooltip>
      )}
    </span>
  );
};

export default SustainabilityScoreTooltip;

SustainabilityScoreTooltip.propTypes = {
  title: PropTypes.string.isRequired
};
