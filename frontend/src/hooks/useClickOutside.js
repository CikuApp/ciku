import { useEffect } from 'react';

/**
 * Effect: Detects click events outside of an element
 * Unmount: removes effect
 *
 * @param {node} ref
 * @param {function} handleClickOutside - callback for handling the click
 */
const useClickOutside = (ref, handleClickOutside) => {
  useEffect(() => {
    const clickOutside = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        handleClickOutside();
      }
    };

    window.addEventListener('click', clickOutside);
    return () => {
      window.removeEventListener('click', clickOutside);
    };
  }, [handleClickOutside, ref]);
};

export default useClickOutside;
