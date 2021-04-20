import React from "react";
import AddSearchIngredients from "components/SearchResultsPage/AddSearchIngredients";
import SearchIngredientsWrapper from "components/SearchResultsPage/SearchIngredientsWrapper";

function SearchIngredients() {
  return (
    <div>
      <AddSearchIngredients />
      <SearchIngredientsWrapper />
    </div>
  );
}

export default SearchIngredients;
