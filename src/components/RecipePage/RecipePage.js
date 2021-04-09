import React from "react";
import PropTypes from "prop-types";

import RecipeInfo from "components/RecipePage/RecipeInfo";
import RecipeIngredients from "components/RecipePage/RecipeIngredients";
import RecipeDirections from "components/RecipePage/RecipeDirections";
import SaveRecipeButton from "components/RecipePage/SaveRecipeButton";
import ShareRecipeButton from "components/RecipePage/ShareRecipeButton";
import AddIngredientsButton from "components/RecipePage/AddIngredientsButton";
import UserReview from "components/RecipePage/UserReview";
import RecipeReviews from "components/RecipePage/RecipeReviews";

function RecipePage({ recipeObject }) {
  return (
    <div>
      <RecipeInfo
        recipeId={recipeObject.id}
        recipeName={recipeObject.name}
        recipeRating={recipeObject.rating}
        recipeScore={recipeObject.score}
        recipeIamge={recipeObject.image}
        recipeTime={recipeObject.time}
      />
      <SaveRecipeButton recipeId={recipeObject.id} />
      <ShareRecipeButton />
      <RecipeIngredients recipeIngredients={recipeObject.ingredients} />
      <AddIngredientsButton recipeIngredients={recipeObject.ingredients} />
      <RecipeDirections recipeDirections={recipeObject.directions} />
      <UserReview recipeId={recipeObject.id} />
      <RecipeReviews recipeReviews={recipeObject.reviews} />
    </div>
  );
}

export default RecipePage;

RecipePage.propTypes = {
  recipeId: PropTypes.number,
  recipeName: PropTypes.string,
  recipeRating: PropTypes.number,
  recipeScore: PropTypes.number,
  recipeImage: PropTypes.string,
  recipeIngredients: PropTypes.array,
  recipeTime: PropTypes.object,
  recipeDirections: PropTypes.array,
  recipeReviews: PropTypes.array,
};
