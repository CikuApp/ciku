// Converts a string to title format
const toTitle = (string) => {
  return string
    .split(' ')
    .map((word) => word[0] && word[0].toUpperCase().concat(word.slice(1)))
    .reduce((accum, word) => {
      // handle lone S after apostrophes
      if (word === 'S' && accum.length) {
        accum[accum.length - 1] = accum[accum.length - 1].concat("'s")
      } else {
        accum.push(word)
      }
      return accum
    }, [])
    .join(' ')
}

// Converts string to sentence
const toSentence = (string) => {
  const stringCap = string[0].toUpperCase().concat(string.slice(1))
  const punctuationRegex = new RegExp(/[.|,|!|\\?]/)
  return punctuationRegex.test(stringCap.charAt(stringCap.length - 1))
    ? stringCap
    : stringCap.concat('.')
}

// Capitalizes state names
const formatStateName = (stateName) => {
  return stateName
    .replace('-', ' ')
    .split(' ')
    .map((word) => word[0].toUpperCase().concat(word.slice(1)))
    .join(' ')
}

// Truncates recipe card titles if over approx. 2 lines long
const truncate = (str) => {
  return str.length > 40 ? str.slice(0, 40) + '...' : str
}

// Returns a suggestion from an array matching the start of string
const getHints = (str, arr) => {
  if (!str.length) {
    return ''
  }
  const suggestions = arr.filter((item) => item.startsWith(str))
  return suggestions.length ? suggestions[0] : ''
}

export { toTitle, toSentence, formatStateName, truncate, getHints }
