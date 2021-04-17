import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

import searchRequestedAtom from "recoil/searchRequested";

import SearchResultsFilter from "components/SearchResultsPage/SearchResultsFilter";
import RecipeResultsWrapper from "components/RecipeResultsWrapper/RecipeResultsWrapper";

import { PageContainer } from "components/Presentation";

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
        <RecipeResultsWrapper />
      </PageContainer>
    </main>
  );
}

export default SearchResultsPage;
