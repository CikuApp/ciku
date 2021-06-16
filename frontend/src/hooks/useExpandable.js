import { useState } from 'react';

/**
 * Makes an element expandable/togglable
 *
 * @returns {array} isExpanded (bool), toggleExpanded (func), closeExpanded (func)
 */
const useExpandable = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(prevState => !prevState);
  };

  const closeExpanded = () => {
    setIsExpanded(false);
  };

  return [isExpanded, toggleExpanded, closeExpanded];
};

export default useExpandable;
