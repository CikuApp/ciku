import { atom } from "recoil";

const shoppingListAtom = atom({
  key: "shoppingListAtom",
  default: [],
});

export default shoppingListAtom;
