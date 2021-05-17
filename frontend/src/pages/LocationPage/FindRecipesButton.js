import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { Link } from "react-router-dom";

// States
import searchTagsAtom from "recoil/searchTags";
import searchIngredientsAtom from "recoil/searchIngredients";
import searchParamsAtom from "recoil/searchParams";

// Components
import { Button } from "components/atoms";

const FindRecipesButton = () => {
  const setSearchTags = useSetRecoilState(searchTagsAtom);
  const setSearchIngredients = useSetRecoilState(searchIngredientsAtom);
  const searchParams = useRecoilValue(searchParamsAtom);

  const handleClick = () => {
    setSearchTags([]);
    setSearchIngredients(searchParams);
  };

  return (
    <Link to="/recipes">
      <Button type="primary" onClick={handleClick}>
        Find Recipes
      </Button>
    </Link>
  );
};

export default FindRecipesButton;
