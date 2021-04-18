import { atom } from "recoil";

import { sessionStorageEffects } from "utils/effects";

const userAtom = atom({
  key: "userAtom",
  default: sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : { name: "", shoppingList: [], savedRecipes: [] },
  effects_UNSTABLE: [sessionStorageEffects("user")],
});

export default userAtom;
