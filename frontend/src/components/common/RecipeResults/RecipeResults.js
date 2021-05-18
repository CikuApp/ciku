import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

// States
import searchRequestedAtom from "recoil/searchRequested";
import searchResults from "recoil/searchResults";

// Components
import RecipeCardsWrapper from "components/common/RecipeCardsWrapper";
import LoadMore from "components/common/LoadMore";
import { Text } from "components/atoms";

// Utils
import { toTitle } from "utils/dataHelpers";

const RecipeResults = () => {
  const recipeResults = useRecoilValue(searchResults);
  const { innerWidth: width } = window;
  const setSearchRequested = useSetRecoilState(searchRequestedAtom);

  useEffect(() => {
    setSearchRequested(false);
  }, [setSearchRequested]);

  return (
    <section className="flex flex-col">
      {recipeResults.length ? (
        recipeResults.map((resultObject) => {
          return (
            <div key={resultObject.search} className="mb-16">
              {resultObject.search !== "random" && (
                <Text type="2xl" variant="medium">
                  {toTitle(resultObject.search)}
                </Text>
              )}
              {resultObject.results.length ? (
                <LoadMore
                  elements={resultObject.results}
                  windowSize={width > 1024 && width < 1279 ? 9 : 8}
                >
                  <RecipeCardsWrapper />
                </LoadMore>
              ) : (
                <div className="my-6">
                  <Text type="sm">No recipes match your query.</Text>
                </div>
              )}
            </div>
          );
        })
      ) : (
        <div className="my-6">
          <Text type="sm">There are no results to show.</Text>
        </div>
      )}
    </section>
  );
};

export default RecipeResults;
