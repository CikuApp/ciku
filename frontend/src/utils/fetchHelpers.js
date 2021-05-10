import axios from "axios";

const baseUrl = `${
  process.env.NODE_ENV === "development" ? "" : "/backend"
}/recipes`;

const randomBaseUrl = `${
  process.env.NODE_ENV === "development" ? "" : "/backend"
}/random`;

const fetchRecipe = async (name, location) => {
  try {
    const response = await axios.get(
      `${baseUrl}?query=${name.replace(/-/g, "%20")}&location=${location}`
    );
    return JSON.parse(response.data)[0];
  } catch (err) {
    console.error(err);
  }
};

async function DBQuery(
  searchTerm,
  searchTags,
  searchIngredients,
  location,
  count
) {
  try {
    const queryString = "query=".concat(
      searchTerm.toLowerCase().replace(/ /g, "%20")
    );

    const ingredientsString = searchIngredients.length
      ? "&ingredients=".concat(
          searchIngredients
            .map((item) => item.toLowerCase().replace(/ /g, "%20"))
            .join("%20")
        )
      : "";

    const tagsString = searchTags.length
      ? "&tags=".concat(
          searchTags.map((tag) => tag.replace(/_/g, "-")).join("%20")
        )
      : "";

    const locationString = location.length ? "&location=".concat(location) : "";

    const countString = `&count=${count}`;

    const response = await axios.get(
      `${baseUrl}?${queryString}${ingredientsString}${tagsString}${locationString}${countString}`
    );

    const data = JSON.parse(response.data);

    if (data.length) {
      return data;
    } else {
      // Make a secondary search if results are empty
      const ingredientsString = "ingredients=".concat(
        searchTerm.toLowerCase().replace(/ /g, "%20")
      );
      const response = await axios.get(
        `${baseUrl}?${ingredientsString}${tagsString}${locationString}${countString}`
      );
      return JSON.parse(response.data);
    }
  } catch (err) {
    console.error(err);

    // fallback for errors from server
    return [];
  }
}

async function randomDBQuery(count, location, minimum_sus_score = 3) {
  try {
    const response = await axios.get(
      `${randomBaseUrl}?count=${count}&minimum_sus_score=${minimum_sus_score}&location=${location}&sorted=true`
    );
    return JSON.parse(response.data).slice(0, 8);
  } catch (err) {
    console.error(err);
    return [];
  }
}

export { fetchRecipe, randomDBQuery, DBQuery };
