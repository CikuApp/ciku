import React from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";

// Atoms
import searchTagsAtom from "recoil/searchTags";
import searchIngredientsAtom from "recoil/searchIngredients";

// Components
import { Button } from "components/Presentation";

const FindRecipesButton = () => {
  const [searchTags, setSearchTags] = useRecoilState(searchTagsAtom);
  const [searchIngredients, setSearchIngredients] = useRecoilState(
    searchIngredientsAtom
  );

  const handleClick = () => {
    setSearchTags([]);
    setSearchIngredients([]);
  };

  return (
    <Link to="/recipes">
      <Button type="primary" size="sm" onClick={handleClick}>
        Find Recipes
      </Button>
    </Link>
  );
};

export default FindRecipesButton;
