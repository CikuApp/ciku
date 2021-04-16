import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import searchResults from "recoil/searchResults";
import RecipeCard from "components/RecipeCard/RecipeCard";

import { Text } from "components/Presentation";

function RecipeResultsWrapper() {
  const recipeResults = useRecoilValue(searchResults);

  return (
    <section className="flex flex-wrap justify-between">
      {recipeResults.length ? (
        recipeResults.map((recipeObject) => {
          return (
            <RecipeCard key={recipeObject.id} recipeObject={recipeObject} />
          );
        })
      ) : (
        <Text type="p">There are no results to show.</Text>
      )}
    </section>
  );
}

export default RecipeResultsWrapper;
