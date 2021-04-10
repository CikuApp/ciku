import { atom } from "recoil";

const recipesFilterAtom = atom({
  key: "recipesFilterAtom",
  default: { filterBy: "none", value: "none" },
});

export default recipesFilterAtom;
