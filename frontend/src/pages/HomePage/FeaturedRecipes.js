import React, { useEffect, Suspense } from "react";
import { useSetRecoilState } from "recoil";

// States
import searchParamsAtom from "recoil/searchParams";

// Components
import RecipeResults from "components/common/RecipeResults";
import Loading from "components/common/Loading";
import { PageSectionContainer } from "components/templates";
import { Heading } from "components/atoms";

const FeaturedRecipes = () => {
  const setSearchParams = useSetRecoilState(searchParamsAtom);

  useEffect(() => {
    setSearchParams(["random"]);
  }, [setSearchParams]);

  return (
    <PageSectionContainer>
      <Heading type="h2">Featured Recipes</Heading>
      <Suspense fallback={<Loading />}>
        <RecipeResults />
      </Suspense>
    </PageSectionContainer>
  );
};

export default FeaturedRecipes;
