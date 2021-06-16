import { useState } from 'react';

/**
 * Hook to load more elements, if any
 *
 * @param {number} windowSize - number of child elements to show
 * @param {array} elements - array of elements
 */
const useLoadMore = (windowSize, elements) => {
  const [numberToShow, setNumberToShow] = useState(windowSize);
  const [moreToShow, setMoreToShow] = useState(elements.length > windowSize);

  /**
   * To show more elements, if any
   * If no more elements, sets moreToShow to false
   */
  const loadMore = () => {
    if (numberToShow + windowSize < elements.length) {
      setNumberToShow(prevState => prevState + windowSize);
    } else {
      setNumberToShow(elements.length);
      setMoreToShow(false);
    }
  };

  return [moreToShow, numberToShow, loadMore];
};

export default useLoadMore;
