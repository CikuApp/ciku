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

  return (
    <section className="flex flex-col">
      {recipeResults.length ? (
        recipeResults.map((resultObject) => {
          return (
            <div key={resultObject.results.length} className="mb-24">
              <Text type="h2">{toTitle(resultObject.search)}</Text>
              {resultObject.results.length ? (
                <LoadMore elements={resultObject.results} windowSize={8}>
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
