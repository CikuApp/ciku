import React from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";

import searchTagsAtom from "recoil/searchTags";

import { Button } from "components/Presentation";

function FindRecipesButton() {
  const [searchTags, setSearchTags] = useRecoilState(searchTagsAtom);

  const handleClick = () => {
    setSearchTags([]);
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
