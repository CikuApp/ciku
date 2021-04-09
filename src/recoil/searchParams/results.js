import { selector } from "recoil";
import searchParamsAtom from "./atom";

const searchParamsResults = selector({
  key: "searchParamsResults",
  get: async ({ get }) => {
    const data = await DBQuery({ searchParams: get(searchParamsAtom) });
    return data;
  },
});

// Fake DB call
async function DBQuery(data) {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return sampleRecipesData;
}

export default searchParamsResults;

const sampleRecipesData = [
  {
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
  },
  {
    id: 0,
    name: "Produce 2 Recipe Name",
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
  },
];
