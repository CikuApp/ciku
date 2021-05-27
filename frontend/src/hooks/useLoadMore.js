import { useState } from 'react'

/**
 *
 * @param {number} windowSize - number of child elements to show
 * @param {array} elements - array of elements
 */
const useLoadMore = (windowSize, elements) => {
  const [numberToShow, setNumberToShow] = useState(windowSize)
  const [moreToShow, setMoreToShow] = useState(
    elements.length > windowSize ? true : false
  )

  const loadMore = () => {
    if (numberToShow + windowSize < elements.length) {
      setNumberToShow((prevState) => prevState + windowSize)
    } else {
      setNumberToShow(elements.length)
      setMoreToShow(false)
    }
  }

  return [moreToShow, numberToShow, loadMore]
}

export default useLoadMore
