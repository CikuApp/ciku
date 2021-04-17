import { selector } from "recoil";
import locationAtom from "./atom";
import axios from "axios";

const baseUrl = "/seasonal";

const locationProduce = selector({
  key: "locationProduce",
  get: async ({ get }) => {
    const location = get(locationAtom);
    let results = [];
    try {
      if (location.length) {
        const data = await DBQueryProduce(location);
        results.push(...data[0].foods);
      }
      return results;
    } catch (err) {
      console.error(err);
      return results;
    }
  },
});

export default locationProduce;

async function DBQueryProduce(location) {
  const month = getMonthName(new Date().getMonth());
  const period = getPeriod(new Date().getDate());
  try {
    const response = await axios.get(
      `${baseUrl}?location=${location}&month=${month}&period=${period}`
    );
    return JSON.parse(response.data);
  } catch (err) {
    console.error(err);
  }
}

// Query helpers
const getMonthName = (monthIndex) => {
  const monthNames = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  return monthNames[monthIndex];
};

const getPeriod = (date) => {
  return date > 15 ? "late" : "early";
};
