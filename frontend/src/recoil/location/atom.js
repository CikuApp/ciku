import { atom } from "recoil";

import { localStorageEffects } from "utils/effects";

const locationAtom = atom({
  key: "locationAtom",
  default: localStorage.getItem("location")
    ? JSON.parse(localStorage.getItem("location"))
    : "",
  effects_UNSTABLE: [localStorageEffects("location")],
});

export default locationAtom;
