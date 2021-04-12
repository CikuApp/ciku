import { atom } from "recoil";

const savedRecipesAtom = atom({
  key: "savedRecipesAtom",
  default: [],
});

export default savedRecipesAtom;
