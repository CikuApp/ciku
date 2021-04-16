import { selector } from "recoil";
import searchParamsAtom from "recoil/searchParams/atom";
import locationAtom from "recoil/location";
import axios from "axios";

const baseUrl = "/recipes";

const searchResults = selector({
  key: "searchParamsResults",
  get: async ({ get }) => {
    try {
      const searchParams = get(searchParamsAtom);
      const location = get(locationAtom);
      if (searchParams.length > 0 || location.length > 0) {
        let data = await DBQuery({
          searchParams: get(searchParamsAtom),
          location: get(locationAtom),
        });

        data = data.map((recipe) => {
          return {
            ...recipe,
            name: toTitle(recipe.name),
            ingredients: jsonStringToArray(recipe.ingredients),
            directions: jsonStringToArray(recipe.steps),
          };
        });
        return data;
      }
      return [];
    } catch (err) {
      console.error(err);
      return [];
    }
  },
});

async function DBQuery({ searchParams, location }) {
  const queryString = searchParams
    .map((param) => param.toLowerCase().replace(" ", "%20"))
    .join("%20");
  const request = axios.get(
    `${baseUrl}?query=${queryString}&location=${location}`
  );
  return request.then((response) => JSON.parse(response.data));
}

export default searchResults;

// Convert recipe.ingredients and recipe.directions to arrays
const jsonStringToArray = (string) => {
  return string
    .replace(/\[|\]/g, "")
    .split(/', '|", '|", "|', "/)
    .map((item) =>
      item[0] === "'" || item[0] === '"'
        ? item.slice(1)
        : item[item.length - 1] === "'" || item[item.length - 1] === '"'
        ? item.slice(0, item.length - 1)
        : item
    )
    .map((item) => item[0].toUpperCase().concat(item.slice(1)));
};

// turn string into title
const toTitle = (string) => {
  return string
    .split(" ")
    .map((word) => word[0] && word[0].toUpperCase().concat(word.slice(1)))
    .join(" ");
};

// const sampleRecipesData = [
//   {
//     id: 0,
//     name: "Produce 1 Recipe Name",
//     rating: 5,
//     score: 80,
//     image: "",
//     ingredients: [
//       { name: "Ingredient 1", amount: "5 cups" },
//       { name: "Ingredient 2", amount: "4 cups" },
//       { name: "Ingredient 3", amount: "3 cups" },
//       { name: "Ingredient 4", amount: "2 cups" },
//       { name: "Ingredient 5", amount: "1 cups" },
//       { name: "Ingredient 6", amount: "1 kg" },
//     ],
//     time: [
//       { method: "Prep", time: 10, unit: "mins" },
//       { method: "Cook", time: 20, unit: "mins" },
//     ],
//     directions: [
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
//       "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     ],
//     reviews: [
//       {
//         id: 0,
//         name: "User 1",
//         icon: "",
//         rating: 5,
//         review:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       },
//       {
//         id: 1,
//         name: "User 2",
//         icon: "",
//         rating: 5,
//         review:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       },
//       {
//         id: 2,
//         name: "User 3",
//         icon: "",
//         rating: 5,
//         review:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       },
//     ],
//   },
//   {
//     id: 1,
//     name: "Produce 2 Recipe Name",
//     rating: 5,
//     score: 80,
//     image: "",
//     ingredients: [
//       { name: "Ingredient 1", amount: "5 cups" },
//       { name: "Ingredient 2", amount: "4 cups" },
//       { name: "Ingredient 3", amount: "3 cups" },
//       { name: "Ingredient 4", amount: "2 cups" },
//       { name: "Ingredient 5", amount: "1 cups" },
//       { name: "Ingredient 6", amount: "1 kg" },
//     ],
//     time: [
//       { method: "Prep", time: 10, unit: "mins" },
//       { method: "Cook", time: 20, unit: "mins" },
//     ],
//     directions: [
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
//       "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     ],
//     reviews: [
//       {
//         id: 0,
//         name: "User 1",
//         icon: "",
//         rating: 5,
//         review:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       },
//       {
//         id: 1,
//         name: "User 2",
//         icon: "",
//         rating: 5,
//         review:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       },
//       {
//         id: 2,
//         name: "User 3",
//         icon: "",
//         rating: 5,
//         review:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Produce 3 Recipe Name",
//     rating: 5,
//     score: 80,
//     image: "",
//     ingredients: [
//       { name: "Ingredient 1", amount: "5 cups" },
//       { name: "Ingredient 2", amount: "4 cups" },
//       { name: "Ingredient 3", amount: "3 cups" },
//       { name: "Ingredient 4", amount: "2 cups" },
//       { name: "Ingredient 5", amount: "1 cups" },
//       { name: "Ingredient 6", amount: "1 kg" },
//     ],
//     time: [
//       { method: "Prep", time: 10, unit: "mins" },
//       { method: "Cook", time: 20, unit: "mins" },
//     ],
//     directions: [
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
//       "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     ],
//     reviews: [
//       {
//         id: 0,
//         name: "User 1",
//         icon: "",
//         rating: 5,
//         review:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       },
//       {
//         id: 1,
//         name: "User 2",
//         icon: "",
//         rating: 5,
//         review:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       },
//       {
//         id: 2,
//         name: "User 3",
//         icon: "",
//         rating: 5,
//         review:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "Produce 4 Recipe Name",
//     rating: 5,
//     score: 80,
//     image: "",
//     ingredients: [
//       { name: "Ingredient 1", amount: "5 cups" },
//       { name: "Ingredient 2", amount: "4 cups" },
//       { name: "Ingredient 3", amount: "3 cups" },
//       { name: "Ingredient 4", amount: "2 cups" },
//       { name: "Ingredient 5", amount: "1 cups" },
//       { name: "Ingredient 6", amount: "1 kg" },
//     ],
//     time: [
//       { method: "Prep", time: 10, unit: "mins" },
//       { method: "Cook", time: 20, unit: "mins" },
//     ],
//     directions: [
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
//       "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     ],
//     reviews: [
//       {
//         id: 0,
//         name: "User 1",
//         icon: "",
//         rating: 5,
//         review:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       },
//       {
//         id: 1,
//         name: "User 2",
//         icon: "",
//         rating: 5,
//         review:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       },
//       {
//         id: 2,
//         name: "User 3",
//         icon: "",
//         rating: 5,
//         review:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       },
//     ],
//   },
// ];
