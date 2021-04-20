// import { selector } from "recoil";
// import searchResults from "recoil/searchResults";

// const searchResultsInSessionStorage = selector({
//   key: "searchResultsInSessionStorage",
//   get: ({ get }) => {
//     const newResults = get(searchResults).reduce(
//       (prev, curr) => prev.concat(curr.results),
//       []
//     );
//     const results = sessionStorage.getItem("recipeResults")
//       ? JSON.parse(sessionStorage.getItem("recipeResults"))
//       : [];
//     sessionStorage.setItem(
//       "recipeResults",
//       JSON.stringify(results.concat(newResults))
//     );
//     return JSON.parse(sessionStorage.getItem("recipeResults"));
//   },
// });

// export default searchResultsInSessionStorage;
