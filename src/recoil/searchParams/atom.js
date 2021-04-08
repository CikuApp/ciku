import { atom } from "recoil";

const searchParamsAtom = atom({
  key: "searchParamsAtom",
  default: [],
});

export default searchParamsAtom;
