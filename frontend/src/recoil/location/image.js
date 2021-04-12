import { selector } from "recoil";
import locationAtom from "./atom";

const locationImage = selector({
  key: "locationImage",
  get: async ({ get }) => {
    const data = await DBQuery(locationAtom);
    return data;
  },
});

// Fake DB call
async function DBQuery(location) {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  const imageFilePath = "";

  return imageFilePath;
}

export default locationImage;
