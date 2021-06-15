import React from 'react';
import { useRecoilValue } from 'recoil';

// States
import { userSavedRecipes } from 'recoil/user';

// Components
import { Heading } from 'components/atoms';
import RecipeMiniCard from 'components/common/RecipeMiniCard';

const RecipeList = () => {
  const savedRecipes = useRecoilValue(userSavedRecipes);

  return (
    <div className="w-1/2 space-y-14">
      <Heading type="h2">Recipes ({savedRecipes.length})</Heading>
      <div>
        {savedRecipes &&
          savedRecipes.map(recipe => (
            <RecipeMiniCard recipe={recipe} key={recipe.id} />
          ))}
      </div>
    </div>
  );
};

export default RecipeList;
