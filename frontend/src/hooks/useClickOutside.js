import { useEffect } from 'react';

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
