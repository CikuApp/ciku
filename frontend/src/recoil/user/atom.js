import { atom } from "recoil";

const userAtom = atom({
  key: "userAtom",
  default: { name: "", shoppingList: [] },
});

export default userAtom;
