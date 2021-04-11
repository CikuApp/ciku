import React from "react";

import SearchResultsFilter from "components/SearchResultsPage/SearchResultsFilter";
import RecipeResultsWrapper from "components/RecipeResultsWrapper/RecipeResultsWrapper";

import { PageContainer } from "components/Presentation";

function SearchResultsPage() {
  return (
    <main>
      <SearchResultsFilter />
      <PageContainer>
        <RecipeResultsWrapper />
      </PageContainer>
    </main>
  );
}

export default SearchResultsPage;
