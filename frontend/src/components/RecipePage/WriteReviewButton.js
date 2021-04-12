import React from "react";
import PropTypes from "prop-types";
import { useRcoilValue, useRecoilState } from "recoil";

import { Button } from "components/Presentation";

function WriteReviewButton({ recipeId }) {
  return (
    <Button type="primary" size="sm">
      Write a review
    </Button>
  );
}

export default WriteReviewButton;

WriteReviewButton.propTypes = {
  recipeId: PropTypes.number,
};
