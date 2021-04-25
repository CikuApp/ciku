import { atom } from "recoil";

import { localStorageEffects } from "utils/effects";

const locationAtom = atom({
  key: "locationAtom",
  // set default location to be last selected location or Califonia
  default: localStorage.getItem("location")
    ? JSON.parse(localStorage.getItem("location"))
    : "california",
  effects_UNSTABLE: [localStorageEffects("location")],
});

export default locationAtom;
