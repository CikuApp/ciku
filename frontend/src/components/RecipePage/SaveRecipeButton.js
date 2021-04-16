import React from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";

import { userSavedRecipes } from "recoil/user";

import { Button } from "components/Presentation";

function SaveRecipeButton({ recipe }) {
  const [savedRecipes, setSavedRecipes] = useRecoilState(userSavedRecipes);

  const handleSave = () => {
    setSavedRecipes((prevState) => [...prevState, recipe]);
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
