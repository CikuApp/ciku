import React, { useState, cloneElement } from "react";
import PropTypes from "prop-types";

// Components
import { Button } from "components/Presentation";

const LoadMore = ({ elements, windowSize, children }) => {
  const [numberToShow, setNumberToShow] = useState(windowSize);
  const [moreToShow, setMoreToShow] = useState(
    elements.length > windowSize ? true : false
  );
  console.log(elements.length);
  console.log(windowSize);
  console.log(moreToShow);

  const handleLoadMore = () => {
    if (numberToShow + windowSize < elements.length) {
      setNumberToShow((prevState) => prevState + windowSize);
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
};

export default LoadMore;

LoadMore.propTypes = {
  elements: PropTypes.array,
  windowSize: PropTypes.number,
};
