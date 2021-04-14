import React from "react";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";

import searchResults from "recoil/searchResults";

import RecipeInfo from "components/RecipePage/RecipeInfo";
import RecipeIngredients from "components/RecipePage/RecipeIngredients";
import RecipeDirections from "components/RecipePage/RecipeDirections";
import SaveRecipeButton from "components/RecipePage/SaveRecipeButton";
import ShareRecipeButton from "components/RecipePage/ShareRecipeButton";
import UserReview from "components/RecipePage/UserReview";
import RecipeReviews from "components/RecipePage/RecipeReviews";

function RecipePage() {
  let { recipeId } = useParams();
  const selectedRecipe = useRecoilValue(searchResults).find(
    (recipe) => recipe.id === +recipeId
  );

  // const recipeIngredients = jsonStringToArray(selectedRecipe.ingredients);
  // const recipeDirections = jsonStringToArray(selectedRecipe.steps);

  return (
    <div>
      <RecipeInfo
        recipeId={selectedRecipe.id}
        recipeName={selectedRecipe.name}
        // recipeRating={selectedRecipe.rating}
        // recipeScore={selectedRecipe.score}
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
      <RecipeDirections recipeDirections={selectedRecipe.directions} />
      <UserReview recipeId={selectedRecipe.id} />
      {/* <RecipeReviews recipeReviews={selectedRecipe.reviews} /> */}
    </div>
  );
}

export default RecipePage;
