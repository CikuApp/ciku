import React from "react";
import PropTypes from "prop-types";
import { Button } from "components/Presentation";

function ShareRecipeButton({ recipeId }) {
  const handleClick = () => {
    console.log(recipeId);
  };
  return (
    <Button type="secondary" size="sm" onClick={handleClick}>
      Share
    </Button>
  );
}

export default ShareRecipeButton;

ShareRecipeButton.propTypes = {
  recipeId: PropTypes.number,
};
