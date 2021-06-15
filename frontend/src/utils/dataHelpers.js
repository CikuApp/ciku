/**
 * Formats recipe title from API response
 *
 * @param   {string} recipeTitle
 * @returns {string}
 */
const toTitle = recipeTitle =>
  recipeTitle
    .split(' ')
    .map(word => word[0] && word[0].toUpperCase().concat(word.slice(1)))
    .reduce((title, word) => {
      // handle lone S after apostrophes
      const newTitle = [...title];

      if (word === 'S' && title.length) {
        newTitle[newTitle.length - 1] =
          newTitle[newTitle.length - 1].concat("'s");
      } else {
        newTitle.push(word);
      }

      return newTitle;
    }, [])
    .join(' ');

/**
 * Formats recipe directions from API to sentence
 *
 * @param   {string} phrase
 * @returns {string}
 */
const toSentence = phrase => {
  // Capitalize first letter
  const capitalizedPhrase = phrase[0].toUpperCase().concat(phrase.slice(1));

  // If last character is not a punctuation, add a '.'
  const punctuationRegex = new RegExp(/[.|,|!|\\?]/);

  return punctuationRegex.test(
    capitalizedPhrase.charAt(capitalizedPhrase.length - 1)
  )
    ? capitalizedPhrase
    : capitalizedPhrase.concat('.');
};

/**
 * Formats state name (capitalized and remove '-')
 *
 * @param   {string} stateName
 * @returns {string}
 */
const formatStateName = stateName =>
  stateName
    .replace('-', ' ')
    .split(' ')
    .map(word => word[0].toUpperCase().concat(word.slice(1)))
    .join(' ');

/**
 * Truncates a phrase to 40 chars long
 *
 * @param {string} phrase
 * @returns {string}
 */
const truncate = phrase =>
  phrase.length > 40 ? `${phrase.slice(0, 40)}...` : phrase;

/**
 * Returns a suggestion from a word list matching the start of a word
 *
 * @param   {string}  word
 * @param   {array}   wordList
 * @returns {string}
 */
const getHints = (word, wordList) => {
  if (!word.length) {
    return '';
  }
  const suggestions = wordList.filter(item => item.startsWith(word));
  return suggestions.length ? suggestions[0] : '';
};

/**
 * Convert month index to month name
 *
 * @param   {number}  monthIndex
 * @returns {string}
 */
const getMonthName = monthIndex => {
  const monthNames = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
  ];
  return monthNames[monthIndex];
};

/**
 * Convert date to month period
 *
 * @param   {number}  date
 * @returns {string}
 */
const getMonthPeriod = date => (date > 15 ? 'late' : 'early');

export {
  toTitle,
  toSentence,
  formatStateName,
  truncate,
  getHints,
  getMonthName,
  getMonthPeriod
};
