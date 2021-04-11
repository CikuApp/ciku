import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "components/Presentation";

function FindRecipesButton() {
  const handleClick = () => {
    // submit search to db
  };

  return (
    <Link to="/recipes">
      <Button type="primary" size="sm" onClick={handleClick}>
        Find Recipes
      </Button>
    </Link>
  );
}

export default FindRecipesButton;
