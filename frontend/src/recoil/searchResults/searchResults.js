import { selector } from "recoil";

import searchParamsAtom from "recoil/searchParams/atom";
import locationAtom, { locationProduce } from "recoil/location";
import searchTagsAtom from "recoil/searchTags";
import searchIngredientsAtom from "recoil/searchIngredients";

import axios from "axios";
const baseUrl = `${
  process.env.NODE_ENV === "development" ? "" : "/backend"
}/recipes`;

console.log("base URL: ", baseUrl);

const searchResults = selector({
  key: "searchParamsResults",
  get: async ({ get }) => {
    const results = [];

    try {
      const searchParams = get(searchParamsAtom);
      const location = get(locationAtom);
      const produce = get(locationProduce);
      const searchTags = get(searchTagsAtom);
      const searchIngredients = get(searchIngredientsAtom);

      // if no selected produce or search query => submit search for first 5 produce items for location
      const mainQuery = searchParams.length
        ? searchParams
        : produce.slice(0, 5);

      // Run search query for each searchParam
      // Apply tags, ingredients, location as additional query params for each
      if (mainQuery.length) {
        await Promise.all(
          mainQuery.map(async (mainQuery) => {
            const data = await DBQuery(
              mainQuery,
              searchTags,
              searchIngredients,
              location
            );
            const resultsObject = {
              search: mainQuery,
              results: data,
            };
            results.push(resultsObject);
          })
        );
      }
      return results;
    } catch (err) {
      // console.error(err);
      return results;
    }
  },
});

async function DBQuery(searchTerm, searchTags, searchIngredients, location) {
  try {
    const queryString = "query=".concat(
      searchTerm.toLowerCase().replace(/ /g, "%20")
    );

    const ingredientsString = searchIngredients.length
      ? "&ingredients=".concat(
          searchIngredients.map((item) => item.replace(/ /g, "%20")).join("%20")
        )
      : "";
    const tagsString = searchTags.length
      ? "&tags=".concat(
          searchTags.map((tag) => tag.replace(/_/g, "-")).join("%20")
        )
      : "";
    const locationString = location.length ? "&location=".concat(location) : "";

    // Search for 100 to start
    const response = await axios.get(
      `${baseUrl}?${queryString}${ingredientsString}${tagsString}${locationString}`
    );

    return JSON.parse(response.data);
  } catch (err) {
    console.error(err);

    // fallback for errors from server
    return [];
  }
}

export default searchResults;
