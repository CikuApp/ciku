import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import { userSavedRecipes } from "recoil/user";

import { Text } from "components/Presentation";

import { toTitle } from "utils/dataHelpers";

function RecipeList() {
  const savedRecipes = useRecoilValue(userSavedRecipes);

  return (
    <div>
      <Text type="h2">Recipes</Text>
      {savedRecipes &&
        savedRecipes.map((recipe) => {
          return (
            <div className="w-112 h-20 my-4 flex-shrink-0 flex items-center border border-gray-500 ">
              <img
                src={recipe.image}
                alt=""
                className="h-full w-20 mr-4 flex-shrink-0 bg-gray-100"
              />

              <Text
                type="p"
                className="w-full whitespace-nowrap overflow-ellipsis overflow-hidden px-2"
              >
                {toTitle(recipe.name)}
              </Text>
            </div>
          );
        })}
    </div>
  );
}

export default RecipeList;
