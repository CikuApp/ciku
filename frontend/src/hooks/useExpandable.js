import { useState } from 'react';

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
