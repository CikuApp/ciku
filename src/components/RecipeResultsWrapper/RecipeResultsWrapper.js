import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import searchResults from "recoil/searchResults";
import RecipeCard from "components/RecipeCard/RecipeCard";

function RecipeResultsWrapper() {
  const recipeResults = useRecoilValue(searchResults);

  return (
    <section className="flex flex-wrap justify-between">
      {recipeResults.map((recipeObject) => {
        return <RecipeCard key={recipeObject.id} recipeObject={recipeObject} />;
      })}
    </section>
  );
}

export default RecipeResultsWrapper;
