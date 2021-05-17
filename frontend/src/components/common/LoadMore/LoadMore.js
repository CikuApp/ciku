import React, { useState, cloneElement } from "react";
import PropTypes from "prop-types";

// Components
import { Button } from "components/atoms";

const LoadMore = ({ elements, windowSize, children }) => {
  const [numberToShow, setNumberToShow] = useState(windowSize);
  const [moreToShow, setMoreToShow] = useState(
    elements.length > windowSize ? true : false
  );

  const handleLoadMore = () => {
    if (numberToShow + windowSize < elements.length) {
      setNumberToShow((prevState) => prevState + windowSize);
    } else {
      setNumberToShow(elements.length);
      setMoreToShow(false);
    }
  };

  return (
    <>
      {cloneElement(children, { results: elements.slice(0, numberToShow) })}
      {moreToShow && (
        <div className="flex justify-center mt-12">
          <Button type="secondary" onClick={handleLoadMore}>
            More Recipes
          </Button>
        </div>
      )}
    </>
  );
};

export default LoadMore;

LoadMore.propTypes = {
  elements: PropTypes.array,
  windowSize: PropTypes.number,
};
