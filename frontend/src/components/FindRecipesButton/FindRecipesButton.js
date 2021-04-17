import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "components/Presentation";

function FindRecipesButton() {
  return (
    <Link to="/recipes">
      <Button type="primary" size="sm">
        Find Recipes
      </Button>
    </Link>
  );
}

export default FindRecipesButton;
