import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import { userSavedRecipes } from "recoil/user";

import { Text } from "components/Presentation";
import RecipeMiniCard from "components/RecipeCard/RecipeMiniCard";

function RecipeList() {
  const savedRecipes = useRecoilValue(userSavedRecipes);

  return (
    <div>
      <Text type="h2" className="mb-12 font-serif">
        Recipes
      </Text>
      {savedRecipes &&
        savedRecipes.map((recipe) => {
          return <RecipeMiniCard recipe={recipe} key={recipe.id} />;
        })}
    </div>
  );
}

export default RecipeList;
