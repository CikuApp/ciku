import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

// States
import locationAtom from "recoil/location";

// Components
import RecipeInfo from "pages/RecipePage/RecipeInfo";
import RecipeIngredients from "pages/RecipePage/RecipeIngredients";
import RecipeDirections from "pages/RecipePage/RecipeDirections";
import { PageSectionContainer } from "components/templates";

// Utils
import { getOneRecipe } from "utils/fetchHelpers";

const RecipePage = () => {
  const { recipeName } = useParams();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const location = useRecoilValue(locationAtom);

  useEffect(() => {
    const getRecipeFromDB = async () => {
      const recipe = await getOneRecipe(recipeName, location);
      setSelectedRecipe(recipe);
    };
    getRecipeFromDB();
  }, [location, recipeName]);

  return selectedRecipe ? (
    <>
      <RecipeInfo recipe={selectedRecipe} />
      <PageSectionContainer displayClasses="flex">
        <RecipeIngredients recipeIngredients={selectedRecipe.ingredients} />
        <RecipeDirections recipeDirections={selectedRecipe.steps} />
      </PageSectionContainer>
    </>
  ) : null;
};

export default RecipePage;
