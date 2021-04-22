import React, { useEffect, Suspense } from "react";
import { useRecoilState } from "recoil";

import RecipeResults from "components/RecipeResults/RecipeResults";

import searchParamsAtom from "recoil/searchParams";

import { Text } from "components/Presentation";

function PopularRecipes() {
  const [searchParams, setSearchParams] = useRecoilState(searchParamsAtom);

  // Change this later to load popular recipes
  useEffect(() => {
    setSearchParams(["popular"]);
  }, [setSearchParams]);

  return (
    <section className="mb-12">
      <Suspense fallback={<div>loading</div>}>
        <RecipeResults />
      </Suspense>
    </section>
  );
}

export default PopularRecipes;
