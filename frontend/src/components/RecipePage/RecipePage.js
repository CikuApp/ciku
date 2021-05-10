import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

// States
import locationAtom from "recoil/location";

// Components
import RecipeInfo from "components/RecipePage/RecipeInfo";
import RecipeIngredients from "components/RecipePage/RecipeIngredients";
import RecipeDirections from "components/RecipePage/RecipeDirections";
import { PageContainer } from "components/Presentation";

// Utils
import { fetchRecipe } from "utils/fetchHelpers";

const RecipePage = () => {
  let { recipeName } = useParams();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const location = useRecoilValue(locationAtom);

  useEffect(() => {
    const getRecipeFromDB = async () => {
      const recipe = await fetchRecipe(recipeName, location);
      setSelectedRecipe(recipe);
    };
    getRecipeFromDB();
  }, []);

  if (selectedRecipe) {
    return (
      <PageContainer className="mt-24">
        <RecipeInfo recipe={selectedRecipe} />
        <div className="flex my-16">
          <RecipeIngredients recipeIngredients={selectedRecipe.ingredients} />
          <RecipeDirections recipeDirections={selectedRecipe.steps} />
        </div>
      </PageContainer>
    );
  } else {
    return null;
  }
};

export default RecipePage;
