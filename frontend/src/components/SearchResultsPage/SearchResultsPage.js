import React, { useEffect, Suspense } from "react";
import { useRecoilState } from "recoil";

// States
import searchRequestedAtom from "recoil/searchRequested";

// Components
import SearchResultsFilter from "components/SearchResultsPage/SearchResultsFilter";
import RecipeResultsWrapper from "components/RecipeResultsWrapper/RecipeResultsWrapper";
import { PageContainer, Text } from "components/Presentation";
import SearchIngredientsWrapper from "components/SearchResultsPage/SearchIngredientsWrapper";
import AddSearchIngredients from "components/SearchResultsPage/AddSearchIngredients";

function SearchResultsPage() {
  const [searchRequested, setSearchRequested] = useRecoilState(
    searchRequestedAtom
  );

  useEffect(() => {
    setSearchRequested(false);
  }, [setSearchRequested]);

  return (
    <main>
      <SearchResultsFilter />
      <PageContainer>
        <Text type="h2" className="z-0">
          Recipe Results
        </Text>
        <div className="my-4 flex ">
          <AddSearchIngredients />
          <SearchIngredientsWrapper />
        </div>
        <div className="my-16">
          <Suspense fallback={<div>loading</div>}>
            <RecipeResultsWrapper />
          </Suspense>
        </div>
      </PageContainer>
    </main>
  );
}

export default SearchResultsPage;
