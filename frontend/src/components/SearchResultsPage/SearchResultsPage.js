import React, { Suspense } from "react";

// Components
import SearchResultsFilter from "components/SearchResultsPage/SearchResultsFilter";
import RecipeResults from "components/RecipeResults/RecipeResults";
import { PageContainer, Text } from "components/Presentation";
import SearchIngredientsWrapper from "components/SearchResultsPage/SearchIngredientsWrapper";
import AddSearchIngredients from "components/SearchResultsPage/AddSearchIngredients";

function SearchResultsPage() {
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
            <RecipeResults />
          </Suspense>
        </div>
      </PageContainer>
    </main>
  );
}

export default SearchResultsPage;
