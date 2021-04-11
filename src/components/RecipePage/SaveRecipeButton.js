import React from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";

import savedRecipesAtom from "recoil/savedRecipes";

import { Button } from "components/Presentation";

function SaveRecipeButton({ recipeId }) {
  const [savedRecipes, setSavedRecipes] = useRecoilState(savedRecipesAtom);

  const handleSave = () => {
    setSavedRecipes((prevState) => [...prevState, recipeId]);
  };

  return (
    <Button size="sm" type="secondary" onClick={handleSave}>
      Save Recipe
    </Button>
  );
}

export default SaveRecipeButton;

SaveRecipeButton.propTypes = {
  recipeId: PropTypes.number,
};
