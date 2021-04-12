import React from "react";

import { Button } from "components/Presentation";

function FindRecipesButton() {
  const handleClick = () => {
    // redirect to search results page
  };
  return (
    <Button type="primary" size="sm" onClick={handleClick}>
      Find Recipes
    </Button>
  );
}

export default FindRecipesButton;
