import React from "react";
import { useRecoilValue } from "recoil";

// Atoms
import searchResults from "recoil/searchResults";

// Components
import RecipeResultsWrapper from "components/RecipeResults/RecipeResultsWrapper";
import LoadMore from "components/RecipeResults/LoadMore";
import { Text } from "components/Presentation";

// Utils
import { toTitle } from "utils/dataHelpers";

const RecipeResults = () => {
  const recipeResults = useRecoilValue(searchResults);
  const { innerWidth: width } = window;

  return (
    <section className="flex flex-col">
      {recipeResults.length ? (
        recipeResults.map((resultObject) => {
          return (
            <div
              key={resultObject.search.concat(resultObject.results.length)}
              className="mb-24"
            >
              {resultObject.search === "random" ? (
                <Text type="h2" className="font-serif font-bold">
                  Featured Recipes
                </Text>
              ) : (
                <Text type="h2">{toTitle(resultObject.search)}</Text>
              )}
              {resultObject.results.length ? (
                <LoadMore
                  elements={resultObject.results}
                  windowSize={width > 1024 && width < 1279 ? 9 : 8}
                >
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
};

export default RecipeResults;
