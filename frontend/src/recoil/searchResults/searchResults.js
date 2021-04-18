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
          searchTerms.map(async (searchTerm) => {
            const data = await DBQuery(searchTerm);
            const resultsObject = {
              search: searchTerm,
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

async function DBQuery(searchTerm) {
  try {
    const queryString = searchTerm.toLowerCase().replace(/ /g, "%20");
    const response = await axios.get(`${baseUrl}?query=${queryString}&count=8`);
    return JSON.parse(response.data);
  } catch (err) {
    console.error(err);
  }
}

export default searchResults;
