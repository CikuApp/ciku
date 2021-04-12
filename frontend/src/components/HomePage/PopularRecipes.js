import React from "react";

import RecipeResultsWrapper from "components/RecipeResultsWrapper/RecipeResultsWrapper";

import { Text } from "components/Presentation";

function PopularRecipes() {
  return (
    <section>
      <Text type="h2" className="my-12">
        Popular
      </Text>
      <RecipeResultsWrapper />
    </section>
  );
}

export default PopularRecipes;
