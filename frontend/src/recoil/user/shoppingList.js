import { selector } from "recoil";
import userAtom from "./atom";

const userShoppingList = selector({
  key: "userShoppingList",
  get: ({ get }) => {
    const { shoppingList } = get(userAtom);
    return shoppingList;
  },
  set: ({ set, get }, newValue) => {
    set(userAtom, { ...get(userAtom), shoppingList: newValue });
  },
});

export default userShoppingList;
