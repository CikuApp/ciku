import { selector } from "recoil";
import searchResults from "recoil/searchResults";
import recipesFilterAtom from "recoil/recipesFilter";

const searchResultsWithFilter = selector({
  key: "searchResultsWithFilter",
  get: ({ get }) => {
    const results = get(searchResults);
    const { filterBy, value } = get(recipesFilterAtom);

    if (filterBy === "recipeId") {
      return results.filter((item) => item.id === value)[0];
    } else {
      return results;
    }
  },
});

export default searchResultsWithFilter;
