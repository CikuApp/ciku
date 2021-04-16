import { selector } from "recoil";
import userAtom from "./atom";

const userSavedRecipes = selector({
  key: "userSavedRecipes",
  get: ({ get }) => {
    const { savedRecipes } = get(userAtom);
    return savedRecipes;
  },
  set: ({ set, get }, newValue) => {
    set(userAtom, { ...get(userAtom), savedRecipes: newValue });
  },
});

export default userSavedRecipes;
