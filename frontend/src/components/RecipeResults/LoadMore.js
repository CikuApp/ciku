import React, { useState, cloneElement } from "react";
import PropTypes from "prop-types";

// Components
import { Button } from "components/Presentation";

function LoadMore({ elements, window, children }) {
  const [numberToShow, setNumberToShow] = useState(window);
  const [moreToShow, setMoreToShow] = useState(elements.length ? true : false);

  const handleLoadMore = () => {
    if (numberToShow + window < elements.length) {
      setNumberToShow((prevState) => prevState + window);
    } else {
      setNumberToShow(elements.length);
      setMoreToShow(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {cloneElement(children, { results: elements.slice(0, numberToShow) })}
      {moreToShow && (
        <Button
          size="sm"
          type="secondary"
          onClick={handleLoadMore}
          className="mt-12"
        >
          More Recipes
        </Button>
      )}
    </div>
  );
}

export default LoadMore;

LoadMore.propTypes = {
  elements: PropTypes.array,
  window: PropTypes.number,
};
