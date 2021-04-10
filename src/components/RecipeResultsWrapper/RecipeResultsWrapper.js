import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import searchResults from "recoil/searchResults";
import RecipeCard from "components/RecipeCard/RecipeCard";

function RecipeResultsWrapper() {
  const recipeResults = useRecoilValue(searchResults);

  return (
    <section>
      {recipeResults.map((recipeObject) => {
        return <RecipeCard recipeObject={recipeObject} />;
      })}
    </section>
  );
}

export default RecipeResultsWrapper;
