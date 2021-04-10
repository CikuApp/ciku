import React from "react";
import { useRecoilValue } from "recoil";

import { searchParamsResults } from "recoil/searchParams";
import RecipeCard from "components/RecipeCard/RecipeCard";

function SearchResultsWrapper() {
  const recipeResults = useRecoilValue(searchParamsResults);
  return (
    <section>
      {recipeResults.map((recipeObject) => {
        return <RecipeCard recipeObject={recipeObject} />;
      })}
    </section>
  );
}

export default SearchResultsWrapper;
