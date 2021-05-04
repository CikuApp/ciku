import { selector } from "recoil";
import axios from "axios";

// Atoms
import searchParamsAtom from "recoil/searchParams/atom";
import locationAtom, { locationProduce } from "recoil/location";
import searchTagsAtom from "recoil/searchTags";
import searchIngredientsAtom from "recoil/searchIngredients";

// Utils
import { stripS } from "utils/dataHelpers";

const baseUrl = `${
  process.env.NODE_ENV === "development" ? "" : "/backend"
}/recipes`;

const randomBaseUrl = `${
  process.env.NODE_ENV === "development" ? "" : "/backend"
}/random`;

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

      // Limit max results to fetch to 5000
      const count = Math.floor(10000 / mainQuery.length);

      // Run search query for each searchParam
      // Apply tags, ingredients, location as additional query params for each
      if (searchParams[0] === "random") {
        const data = await randomDBQuery(50);
        const resultsObject = {
          search: "Featured Recipes",
          results: data,
        };
        results.push(resultsObject);
      } else if (mainQuery.length) {
        await Promise.all(
          mainQuery.map(async (mainQuery) => {
            const data = await DBQuery(
              mainQuery,
              searchTags,
              searchIngredients,
              location,
              count
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

async function DBQuery(
  searchTerm,
  searchTags,
  searchIngredients,
  location,
  count
) {
  try {
    const queryString = "query=".concat(
      stripS(searchTerm.toLowerCase()).replace(/ /g, "%20")
    );

    const ingredientsString = searchIngredients.length
      ? "&ingredients=".concat(
          searchIngredients
            .map((item) =>
              item
                .toLowerCase()
                .replace(/ /g, "%20")
                .concat(stripS(item) !== item ? "%20" + stripS(item) : "")
            )
            .join("%20")
        )
      : "";

    const tagsString = searchTags.length
      ? "&tags=".concat(
          searchTags.map((tag) => tag.replace(/_/g, "-")).join("%20")
        )
      : "";

    const locationString = location.length ? "&location=".concat(location) : "";

    const countString = `&count=${count}`;

    const response = await axios.get(
      `${baseUrl}?${queryString}${ingredientsString}${tagsString}${locationString}${countString}`
    );

    const data = JSON.parse(response.data);

    if (data.length) {
      return data;
    } else {
      // Make a secondary search if results are empty
      const ingredientsString = "ingredients=".concat(
        stripS(searchTerm.toLowerCase()).replace(/ /g, "%20")
      );
      const response = await axios.get(
        `${baseUrl}?${ingredientsString}${tagsString}${locationString}${countString}`
      );
      return JSON.parse(response.data);
    }
  } catch (err) {
    console.error(err);

    // fallback for errors from server
    return [];
  }
}

async function randomDBQuery(count) {
  try {
    const response = await axios.get(
      `${randomBaseUrl}?count=${count}&sorted=true`
    );
    return JSON.parse(response.data).slice(0, 8);
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default searchResults;
