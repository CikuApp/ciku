import axios from "axios";
import {
  toTagsString,
  toQueryString,
  toIngredientsString,
} from "utils/dataHelpers";

const baseUrl = `${
  process.env.NODE_ENV === "development" ? "" : "/backend"
}/recipes?`;

const randomBaseUrl = `${
  process.env.NODE_ENV === "development" ? "" : "/backend"
}/random?`;

const getOneRecipe = async (name, location) => {
  try {
    const queryString = toQueryString(name);
    const locationString = "&location=" + location;
    const response = await axios.get(baseUrl + queryString + locationString);

    // API is returning string for now - do not remove JSON.parse()
    return JSON.parse(response.data)[0];
  } catch (err) {
    console.error(err);
  }
};

const getRecipeResults = async (
  searchTerm,
  searchTags,
  searchIngredients,
  location,
  count
) => {
  try {
    const locationString = "&location=" + location;

    const countString = "&count=" + count;

    const response = await axios.get(
      baseUrl +
        toQueryString(searchTerm) +
        toIngredientsString(searchIngredients) +
        toTagsString(searchTags) +
        locationString +
        countString
    );

    return JSON.parse(response.data);
  } catch (err) {
    console.error(err);

    // fallback for errors from server
    return [];
  }
};

const getRandomRecipes = async (count, location, minimum_sus_score = 3) => {
  try {
    const countString = "count=" + count;
    const locationString = "&location=" + location;
    const minScoreString = "&minimum_sus_score=" + minimum_sus_score;

    const response = await axios.get(
      randomBaseUrl +
        countString +
        minScoreString +
        locationString +
        "&sorted=true"
    );
    return JSON.parse(response.data).slice(0, 8);
  } catch (err) {
    console.error(err);
    return [];
  }
};

export { getOneRecipe, getRecipeResults, getRandomRecipes };
