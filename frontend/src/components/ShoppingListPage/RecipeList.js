import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import { userSavedRecipes } from "recoil/user";

import { Text } from "components/Presentation";

function RecipeList() {
  const savedRecipes = useRecoilValue(userSavedRecipes);

  return (
    <div>
      <Text type="h2">Recipes</Text>
      {savedRecipes &&
        savedRecipes.map((recipe) => {
          return (
            <div className="w-72 h-12 my-4 flex-shrink-0 flex items-center border border-gray-500">
              <img
                src={recipe.image}
                alt=""
                className="h-full w-12 mr-4 bg-gray-100"
              />
              <Text type="h5">{recipe.name}</Text>
            </div>
          );
        })}
    </div>
  );
}

export default RecipeList;
