import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";

import { userSavedRecipes } from "recoil/user";

import { Button } from "components/Presentation";
import { IoHeartOutline } from "react-icons/io5";

function SaveRecipeButton({ recipe }) {
  const [savedRecipes, setSavedRecipes] = useRecoilState(userSavedRecipes);
  const [isSaved, setIsSaved] = useState(
    savedRecipes.some((item) => item.id === recipe.id)
  );
  const handleSave = () => {
    if (savedRecipes.some((item) => +item.id === +recipe.id)) {
      setSavedRecipes((prevState) =>
        prevState.filter((item) => +item.id !== +recipe.id)
      );
      setIsSaved(false);
    } else {
      setSavedRecipes((prevState) => [...prevState, recipe]);
      setIsSaved(true);
    }
  };

  if (isSaved) {
    return (
      <Button size="sm" type="secondary" onClick={handleSave}>
        Unsave
      </Button>
    );
  } else {
    return (
      <Button size="sm" type="secondary" onClick={handleSave} className="flex">
        <IoHeartOutline className="text-2xl my-auto mr-3 text-secondary" />
        Save Recipe
      </Button>
    );
  }
}

export default SaveRecipeButton;

SaveRecipeButton.propTypes = {
  recipeId: PropTypes.number,
};
