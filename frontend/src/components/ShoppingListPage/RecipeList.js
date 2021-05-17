import React from "react";
import { useRecoilValue } from "recoil";

// Atoms
import { userSavedRecipes } from "recoil/user";

// Components
import { Text } from "components/Presentation";
import RecipeMiniCard from "components/common/RecipeCard/RecipeMiniCard";

const RecipeList = () => {
  const savedRecipes = useRecoilValue(userSavedRecipes);

  return (
    <div>
      <Text type="h2" className="mb-12 font-serif">
        Recipes ({savedRecipes.length})
      </Text>
      {savedRecipes &&
        savedRecipes.map((recipe) => {
          return <RecipeMiniCard recipe={recipe} key={recipe.id} />;
        })}
    </div>
  );
};

export default RecipeList;
