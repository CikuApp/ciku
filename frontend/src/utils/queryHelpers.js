const toQueryString = (query) => {
  return 'query=' + query.toLowerCase().replace(/[ ,-]/g, '_')
}

const toIngredientsString = (ingredients) => {
  return ingredients.length
    ? '&ingredients=' +
        ingredients
          .map((item) => item.toLowerCase().replace(/ /g, '_'))
          .join('%20')
    : ''
}

const toTagsString = (tags) => {
  return tags.length
    ? '&tags=' + tags.map((tag) => tag.replace(/_/g, '-')).join('%20')
    : ''
}

export { toQueryString, toIngredientsString, toTagsString }
