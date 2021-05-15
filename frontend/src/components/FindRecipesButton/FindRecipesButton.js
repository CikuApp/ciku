import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Link } from "react-router-dom";

// States
import searchTagsAtom from "recoil/searchTags";
import searchIngredientsAtom from "recoil/searchIngredients";
import searchParamsAtom from "recoil/searchParams";

// Components
import { Button } from "components/Presentation";

const FindRecipesButton = () => {
  const [searchTags, setSearchTags] = useRecoilState(searchTagsAtom);
  const [searchIngredients, setSearchIngredients] = useRecoilState(
    searchIngredientsAtom
  );
  const searchParams = useRecoilValue(searchParamsAtom);

  const handleClick = () => {
    setSearchTags([]);
    setSearchIngredients(searchParams);
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
