import { atom } from "recoil";

const searchIngredients = atom({
  key: "searchIngredientsAtom",
  default: [],
});

export default searchIngredients;
