import React, { Suspense, useState } from "react";

// Components
import SearchResultsFilter from "components/SearchResultsPage/SearchResultsFilter";
import RecipeResults from "components/RecipeResults/RecipeResults";
import { PageContainer, Text } from "components/Presentation";
import SearchIngredientsWrapper from "components/SearchResultsPage/SearchIngredientsWrapper";
import AddSearchIngredients from "components/SearchResultsPage/AddSearchIngredients";
import LocationSelector from "components/SearchResultsPage/LocationSelector";

function SearchResultsPage() {
  const [expandedMenu, setExpandedMenu] = useState("");

  const handleExpandMenu = (tagName) => {
    setExpandedMenu((prevState) => (prevState === tagName ? "" : tagName));
  };

  return (
    <main className="h-full min-h-screen">
      <PageContainer className="relative z-50">
        <LocationSelector />
        <Text type="h2" className="mt-16 mb-10">
          Recipe Results
        </Text>
        <div className="flex">
          <AddSearchIngredients />
          <SearchIngredientsWrapper />
        </div>
        <SearchResultsFilter
          handleExpandMenu={handleExpandMenu}
          expandedMenu={expandedMenu}
        />
      </PageContainer>
      <div className="relative">
        {expandedMenu !== "" && (
          <div className="absolute bg-black opacity-60 w-full min-h-screen h-full"></div>
        )}
        <PageContainer>
          <Suspense fallback={<div>loading</div>}>
            <RecipeResults />
          </Suspense>
        </PageContainer>
      </div>
    </main>
  );
}

export default SearchResultsPage;
