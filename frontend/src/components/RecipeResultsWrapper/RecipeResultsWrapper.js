import React from "react";
import { useRecoilValue } from "recoil";

import searchResults from "recoil/searchResults";
import RecipeCard from "components/RecipeCard/RecipeCard";

import { Text } from "components/Presentation";

function RecipeResultsWrapper() {
  const recipeResults = useRecoilValue(searchResults);

  return (
    <section className="flex flex-col">
      {recipeResults.length ? (
        recipeResults.map((resultObject) => {
          return (
            <div key={resultObject.search}>
              <Text type="h2">
                {resultObject.search[0]
                  .toUpperCase()
                  .concat(resultObject.search.slice(1).toLowerCase())}
              </Text>
              <div className="flex flex-wrap justify-between -mx-1">
                {resultObject.results.length ? (
                  resultObject.results.map((result) => {
                    return <RecipeCard key={result.id} recipeObject={result} />;
                  })
                ) : (
                  <Text type="p" className="italic">
                    No recipes match your query.
                  </Text>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <Text type="p">There are no results to show.</Text>
      )}
    </section>
  );
}

export default RecipeResultsWrapper;
