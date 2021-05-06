import { selector } from "recoil";

// Atoms
import searchParamsAtom from "recoil/searchParams/atom";
import locationAtom, { locationProduce } from "recoil/location";
import searchTagsAtom from "recoil/searchTags";
import searchIngredientsAtom from "recoil/searchIngredients";

// Utils
import { DBQuery, randomDBQuery } from "utils/fetchHelpers";

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
        const data = await randomDBQuery(8, location);
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
      return results;
    }
  },
});

export default searchResults;
