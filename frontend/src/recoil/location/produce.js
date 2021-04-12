import { selector } from "recoil";
import locationAtom from "./atom";

const locationProduce = selector({
  key: "locationProduce",
  get: async ({ get }) => {
    const data = await DBQuery(get(locationAtom));
    return data;
  },
});

// Fake DB call
async function DBQuery(location) {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 1000);
  // });

  const sampleProduceArray = [
    {
      id: 0,
      name: "Produce 1",
      image: "",
    },
    {
      id: 1,
      name: "Produce 2",
      image: "",
    },
    {
      id: 2,
      name: "Produce 3",
      image: "",
    },
    {
      id: 3,
      name: "Produce 4",
      image: "",
    },
    {
      id: 4,
      name: "Produce 5",
      image: "",
    },
    {
      id: 5,
      name: "Produce 6",
      image: "",
    },
  ];

  return sampleProduceArray;
}

export default locationProduce;
