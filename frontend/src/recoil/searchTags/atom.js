import { atom } from "recoil";

const searchTags = atom({
  key: "searchTagsAtom",
  default: [],
});

export default searchTags;
