// // turn string into title
const toTitle = (string) => {
  return string
    .split(" ")
    .map((word) => word[0] && word[0].toUpperCase().concat(word.slice(1)))
    .join(" ");
};

const toSentence = (string) => {
  return string[0].toUpperCase().concat(string.slice(1));
};

// Formatted state names = for display
const formatStateName = (stateName) => {
  return stateName
    .replace("-", " ")
    .split(" ")
    .map((word) => word[0].toUpperCase().concat(word.slice(1)))
    .join(" ");
};

export { toTitle, toSentence, formatStateName };
