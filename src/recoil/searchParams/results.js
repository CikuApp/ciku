import { selector } from "recoil";
import searchParamsAtom from "./atom";

const searchParamsResults = selector({
  key: "searchParamsResults",
  get: async ({ get }) => {
    const data = await DBQuery({ searchParams: get(searchParamsAtom) });
    return data.searchParams;
  },
});

// Fake DB call
async function DBQuery(data) {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return data;
}

export default searchParamsResults;
