import { selector } from 'recoil';

// Atoms
import searchParamsAtom from 'recoil/searchParams/atom';
import locationAtom, { locationProduce } from 'recoil/location';
import searchTagsAtom from 'recoil/searchTags';
import searchIngredientsAtom from 'recoil/searchIngredients';

// Utils
import { getRecipeResults, getRandomRecipes } from 'utils/fetchHelpers';

/**
 * Recoil selector to fetch recipe results
 *
 * @returns {array} - of recipe results ordered alphabetically, if any
 */
const searchResults = selector({
  key: 'searchParamsResults',
  get: async ({ get }) => {
    // Atom dependencies
    const searchParams = get(searchParamsAtom);
    const location = get(locationAtom);
    const produce = get(locationProduce);
    const searchTags = get(searchTagsAtom);
    const searchIngredients = get(searchIngredientsAtom);

    // To collect results
    const results = [];

    // If no selected produce or search query, submit search for first 5 produce items for location
    // TODO: change this to something more meaningful
    const mainQuery = searchParams.length ? searchParams : produce.slice(0, 5);

    // Limit max results to fetch to 10000
    const count = Math.floor(10000 / mainQuery.length);

    // For random recipes
    if (searchParams[0] === 'random') {
      const recipesData = await getRandomRecipes(12, location);

      if (recipesData) {
        const resultsObject = {
          search: 'random',
          results: recipesData
        };
        results.push(resultsObject);
      }
    } else if (mainQuery.length) {
      // For an array of search queries
      await Promise.all(
        mainQuery.map(async query => {
          const recipesData = await getRecipeResults(
            query,
            searchTags,
            searchIngredients,
            location,
            count
          );

          if (recipesData) {
            const result = {
              search: query,
              results: recipesData
            };

            results.push(result);
          }
        })
      );
    }

    // Order alphabetically
    return results.sort((a, b) => a.search > b.search);
  }
});

export default searchResults;
