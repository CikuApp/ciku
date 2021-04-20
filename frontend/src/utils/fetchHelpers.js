import axios from "axios";

const baseUrl = "/recipes";

const fetchRecipe = async (name) => {
  try {
    const response = await axios.get(
      `${baseUrl}?query=${name.replace(/-/g, "%20")}`
    );
    return JSON.parse(response.data)[0];
  } catch (err) {
    console.error(err);
  }
};

export { fetchRecipe };
