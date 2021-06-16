import { useState } from 'react';

/**
 * Gets the current expanded item, with callbacks to set/unset expanded
 *
 * @returns {array} - currentExpanded (string), handleExpanded (func), closeAllExpanded (func)
 */
const useGetExpanded = () => {
  const [currentExpanded, setCurrentExpanded] = useState('');

  const handleExpanded = name => {
    setCurrentExpanded(prevState => (prevState === name ? '' : name));
  };

  const closeAllExpanded = () => {
    setCurrentExpanded('');
  };

  return [currentExpanded, handleExpanded, closeAllExpanded];
};

export default useGetExpanded;
