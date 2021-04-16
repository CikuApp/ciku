import { atom } from "recoil";

const userAtom = atom({
  key: "userAtom",
  default: { name: "", shoppingList: [], savedRecipes: [] },
});

export default userAtom;
