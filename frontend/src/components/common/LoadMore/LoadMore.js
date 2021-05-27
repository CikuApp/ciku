import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'

// Components
import { Button } from 'components/atoms'

// Hooks
import useLoadMore from 'hooks/useLoadMore'

const LoadMore = ({ elements, windowSize, children }) => {
  const [moreToShow, numberToShow, loadMore] = useLoadMore(windowSize, elements)

  return (
    <>
      {cloneElement(children, { results: elements.slice(0, numberToShow) })}
      {moreToShow && (
        <div className="flex justify-center mt-12">
          <Button type="secondary" onClick={loadMore}>
            More Recipes
          </Button>
        </div>
      )}
    </>
  )
}

export default LoadMore

LoadMore.propTypes = {
  elements: PropTypes.array,
  windowSize: PropTypes.number,
}
