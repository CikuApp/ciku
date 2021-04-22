import React from "react";
import { useRecoilValue } from "recoil";

import searchResults from "recoil/searchResults";
import RecipeResultsWrapper from "components/RecipeResults/RecipeResultsWrapper";
import LoadMore from "components/RecipeResults/LoadMore";

import { Text } from "components/Presentation";

function RecipeResults() {
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
              {resultObject.results.length ? (
                <LoadMore elements={resultObject.results} window={8}>
                  <RecipeResultsWrapper />
                </LoadMore>
              ) : (
                <Text type="p" className="italic mt-8">
                  No recipes match your query.
                </Text>
              )}
            </div>
          );
        })
      ) : (
        <Text type="p">There are no results to show.</Text>
      )}
    </section>
  );
}

export default RecipeResults;
