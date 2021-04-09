import React from "react";
import PropTypes from "prop-types";
import { useRcoilValue, useRecoilState } from "recoil";

function WriteReviewButton({ recipeId }) {
  return <button>Write a review</button>;
}

export default WriteReviewButton;

WriteReviewButton.propTypes = {
  recipeId: PropTypes.number,
};
