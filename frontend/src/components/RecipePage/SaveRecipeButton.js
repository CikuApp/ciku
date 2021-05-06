import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";

// Atoms
import { userSavedRecipes } from "recoil/user";

// Components
import { Button } from "components/Presentation";
import { IoHeartOutline } from "react-icons/io5";

const SaveRecipeButton = ({ recipe }) => {
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
      const recipeSummary = {
        name: recipe.name,
        image_url: recipe.image_url,
        id: recipe.id,
      };
      setSavedRecipes((prevState) => [...prevState, recipeSummary]);
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
        <IoHeartOutline className="text-3xl my-auto mr-4 text-secondary" />
        Save Recipe
      </Button>
    );
  }
};

export default SaveRecipeButton;

SaveRecipeButton.propTypes = {
  recipeId: PropTypes.number,
};
