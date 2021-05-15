const toTitle = (string) => {
  return string
    .split(" ")
    .map((word) => word[0] && word[0].toUpperCase().concat(word.slice(1)))
    .reduce((accum, curr) => {
      if (curr === "S" && accum.length) {
        curr = accum[accum.length - 1].concat("'s");
        accum = accum.slice(0, accum.length - 1);
      }
      accum.push(curr);
      return accum;
    }, [])
    .join(" ");
};

const toSentence = (string) => {
  return string[0].toUpperCase().concat(string.slice(1));
};

const formatStateName = (stateName) => {
  return stateName
    .replace("-", " ")
    .split(" ")
    .map((word) => word[0].toUpperCase().concat(word.slice(1)))
    .join(" ");
};

// Format inputs for search
const toQueryString = (query) => {
  return "query=" + query.toLowerCase().replace(/ /g, "%20");
};

const toIngredientsString = (ingredients) => {
  return ingredients.length
    ? "&ingredients=" +
        ingredients
          .map((item) => item.toLowerCase().replace(/ /g, "_"))
          .join("%20")
    : "";
};

const toTagsString = (tags) => {
  return tags.length
    ? "&tags=" + tags.map((tag) => tag.replace(/_/g, "-")).join("%20")
    : "";
};

export {
  toTitle,
  toSentence,
  formatStateName,
  toQueryString,
  toIngredientsString,
  toTagsString,
};
