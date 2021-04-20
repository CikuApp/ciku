import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";

// Components
import RecipeInfo from "components/RecipePage/RecipeInfo";
import RecipeIngredients from "components/RecipePage/RecipeIngredients";
import RecipeDirections from "components/RecipePage/RecipeDirections";
import SaveRecipeButton from "components/RecipePage/SaveRecipeButton";
import ShareRecipeButton from "components/RecipePage/ShareRecipeButton";
import UserReview from "components/RecipePage/UserReview";
import RecipeReviews from "components/RecipePage/RecipeReviews";

// Utils
import { toTitle } from "utils/dataHelpers";
import { fetchRecipe } from "utils/fetchHelpers";

function RecipePage() {
  let { recipeName } = useParams();
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const getRecipeFromDB = async () => {
      const recipe = await fetchRecipe(recipeName);
      setSelectedRecipe(recipe);
    };
    getRecipeFromDB();
  }, []);

  if (selectedRecipe) {
    return (
      <div>
        <RecipeInfo
          recipeId={selectedRecipe.id}
          recipeName={toTitle(selectedRecipe.name)}
          // recipeRating={selectedRecipe.rating}
          recipeScore={selectedRecipe.sus_score}
          // recipeImage={selectedRecipe.image}
          recipeTime={selectedRecipe.minutes}
        />
        <div className="w-6/12 flex justify-between">
          <SaveRecipeButton recipe={selectedRecipe} />
          <ShareRecipeButton recipe={selectedRecipe} />
        </div>
        <div className="my-16">
          <RecipeIngredients recipeIngredients={selectedRecipe.ingredients} />
        </div>
        <RecipeDirections recipeDirections={selectedRecipe.steps} />
        {/* <UserReview recipeId={selectedRecipe.id} /> */}
        {/* <RecipeReviews recipeReviews={selectedRecipe.reviews} /> */}
      </div>
    );
  } else {
    return null;
  }
}

export default RecipePage;
