import React, { useEffect, Suspense } from "react";
import { useRecoilState } from "recoil";

import RecipeResults from "components/RecipeResults/RecipeResults";
import PageContainer from "components/Presentation/PageContainer";

import searchParamsAtom from "recoil/searchParams";

function PopularRecipes() {
  const [searchParams, setSearchParams] = useRecoilState(searchParamsAtom);

  // Change this later to load popular recipes
  useEffect(() => {
    setSearchParams(["random"]);
  }, [setSearchParams]);

  return (
    <PageContainer className="pt-12 mb-12">
      <Suspense fallback={<div>loading</div>}>
        <RecipeResults />
      </Suspense>
    </PageContainer>
  );
}

export default PopularRecipes;
