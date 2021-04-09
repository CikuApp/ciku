import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";

import Nav from "components/Nav/Nav";
import RecipePage from "components/RecipePage/RecipePage";
import LocationPage from "components/LocationPage/LocationPage";

function App() {
  return (
    <RecoilRoot>
      <Nav />
      <Suspense fallback={<div>loading</div>}>
        {/* <LocationPage /> */}
        <RecipePage recipeObject={sampleRecipeObject} />
      </Suspense>
      {/* <SearchBar />
      <Suspense fallback={<div>loading...</div>}>
        <SearchResults />
      </Suspense> */}
    </RecoilRoot>
  );
}

export default App;

const sampleRecipeObject = {
  id: 0,
  name: "Produce 1 Recipe Name",
  rating: 5,
  score: 80,
  image: "",
  ingredients: [
    { name: "Ingredient 1", amount: "5 cups" },
    { name: "Ingredient 2", amount: "4 cups" },
    { name: "Ingredient 3", amount: "3 cups" },
    { name: "Ingredient 4", amount: "2 cups" },
    { name: "Ingredient 5", amount: "1 cups" },
    { name: "Ingredient 6", amount: "1 kg" },
  ],
  time: [
    { method: "Prep", time: 10, unit: "mins" },
    { method: "Cook", time: 20, unit: "mins" },
  ],
  directions: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
    "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ],
  reviews: [
    {
      id: 0,
      name: "User 1",
      icon: "",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 1,
      name: "User 2",
      icon: "",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      name: "User 3",
      icon: "",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};
