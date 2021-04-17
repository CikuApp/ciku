import { selector } from "recoil";
import searchResults from "recoil/searchResults";

const searchResultsAsArray = selector({
  key: "searchResultsAsArray",
  get: ({ get }) => {
    const results = get(searchResults);
    return results.reduce((prev, curr) => prev.concat(curr.results), []);
  },
});

export default searchResultsAsArray;
