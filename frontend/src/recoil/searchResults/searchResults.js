import { selector } from "recoil";
import searchParamsAtom from "recoil/searchParams/atom";
import { locationProduce } from "recoil/location";
import axios from "axios";

const baseUrl = "/recipes";

const searchResults = selector({
  key: "searchParamsResults",
  get: async ({ get }) => {
    const results = [];

    try {
      const searchParams = get(searchParamsAtom);
      const produce = get(locationProduce);

      // if user selected location but no produce, automatically search for all in-season for the location?
      const searchTerms = searchParams.length ? searchParams : produce;

      if (searchTerms.length) {
        await Promise.all(
          searchTerms.map(async (search) => {
            const data = await DBQuery(searchTerms);
            const resultsObject = {
              search: search,
              results: data.map((result) => {
                return {
                  ...result,
                  directions: jsonStringToArray(result.steps),
                  ingredients: jsonStringToArray(result.ingredients),
                };
              }),
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

async function DBQuery(searchTerms) {
  try {
    const queryString = searchTerms
      .map((param) => param.toLowerCase().replace(" ", "%20"))
      .join("%20");
    const response = await axios.get(`${baseUrl}?query=${queryString}&k=8`);
    return JSON.parse(response.data);
  } catch (err) {
    console.error(err);
  }
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
