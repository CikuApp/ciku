// // turn string into title
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

// Formatted state names = for display
const formatStateName = (stateName) => {
  return stateName
    .replace("-", " ")
    .split(" ")
    .map((word) => word[0].toUpperCase().concat(word.slice(1)))
    .join(" ");
};

const stripS = (string) => {
  return string.slice(string.length - 2) === "es" &&
    string.charAt(string.length - 3) === "i"
    ? string.slice(0, string.length - 3).concat("y")
    : string.slice(string.length - 2) === "es"
    ? string.slice(0, string.length - 2)
    : string.charAt(string.length - 1) === "s" &&
      string.charAt(string.length - 2) === "'"
    ? string.slice(0, string.length - 2)
    : string.charAt(string.length - 1) === "s"
    ? string.slice(0, string.length - 1)
    : string;
};

export { toTitle, toSentence, formatStateName, stripS };
