import React from "react";

import SearchResultsFilter from "components/SearchResultsPage/SearchResultsFilter";
import RecipeResultsWrapper from "components/RecipeResultsWrapper/RecipeResultsWrapper";

function SearchResultsPage() {
  return (
    <div>
      <SearchResultsFilter />
      <RecipeResultsWrapper />
    </div>
  );
}

export default SearchResultsPage;
