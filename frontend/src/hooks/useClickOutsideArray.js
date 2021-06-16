import { useEffect } from 'react';

/**
 * Effect: detects click outside for an array of elements
 * Unmount: removes effect
 *
 * @param {array} refs - list of nodes
 * @param {function} handleClickOutside - callback for handling the click
 */
const useClickOutsideArray = (refs, handleClickOutside) => {
  useEffect(() => {
    const clickOutside = e => {
      if (
        refs.current.length &&
        !refs.current.some(
          item => item.current && item.current.contains(e.target)
        )
      ) {
        handleClickOutside();
      }
    };

    window.addEventListener('click', clickOutside);
    return () => {
      window.removeEventListener('click', clickOutside);
    };
  }, [handleClickOutside, refs]);
};

export default useClickOutsideArray;
