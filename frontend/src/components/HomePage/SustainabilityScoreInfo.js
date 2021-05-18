import React from "react";

// Components
import PageContainer from "components/Presentation/PageContainer";
import { Text } from "components/Presentation";
import RecipeCard from "components/RecipeCard/RecipeCard";
import arrowImage from "assets/images/arrow.png";

// Data
import exampleRecipe from "data/exampleRecipe";

const SustainabilityScoreInfo = () => {
  return (
    <PageContainer className="relative h-4/5 pt-12 pb-6 bg-homepage-2 bg-no-repeat bg-cover">
      <section className="flex h-112 mb-20">
        <div className="w-6/12 h-full pr-48 flex flex-col justify-center">
          <Text type="h2" className="font-serif leading-normal my-8">
            Get recipe suggestions from Ciku to help you eat more sustainably.
          </Text>
          <Text type="p" className="my-4">
            Ciku’s recipe suggestions have{" "}
            <span className="text-primary font-bold">
              sustainability scores
            </span>{" "}
            to help you identify which recipes include more sustainable
            ingredients.
          </Text>
          <Text type="p" className="my-4">
            An ingredient that is both seasonal and local receives +2 points. If
            it’s only seasonal, it receives +1 point.
          </Text>
          <Text type="p" className="my-4">
            Add up the points, and you get the sustainability score! The higher
            the number, the more sustainable the recipe.
          </Text>
        </div>
        <div className="w-6/12 h-full pt-12 flex items-end">
          <div className="w-1/4 h-44">
            <Text type="h4" className="text-center font-semibold">
              Sustainability Score
            </Text>
          </div>
          <div className="w-1/4 h-44 pt-3 pr-3">
            <img src={arrowImage} alt="arrow"></img>
          </div>
          <div className="w-1/2 h-full flex pointer-events-none">
            <RecipeCard recipeObject={exampleRecipe} />
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default SustainabilityScoreInfo;
