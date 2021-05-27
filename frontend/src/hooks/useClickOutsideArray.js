import React, { useEffect } from 'react'

const useClickOutsideArray = (refs, handleClickOutside) => {
  useEffect(() => {
    const clickOutside = (e) => {
      if (
        refs.current.length &&
        !refs.current.some(
          (item) => item.current && item.current.contains(e.target)
        )
      ) {
        handleClickOutside()
      }
    }

    window.addEventListener('click', clickOutside)
    return () => {
      window.removeEventListener('click', clickOutside)
    }
  }, [handleClickOutside, refs])
}

export default useClickOutsideArray
