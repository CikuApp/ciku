import { selector } from "recoil";
import userAtom from "./atom";

const userShoppingList = selector({
  key: "userShoppingList",
  get: ({ get }) => {
    const { shoppingList } = get(userAtom);
    return shoppingList;
  },
  set: ({ set }, newValue) => {
    set(userAtom, { shoppingList: newValue });
  },
});

export default userShoppingList;
