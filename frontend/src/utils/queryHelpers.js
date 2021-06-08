const toQueryString = (query) => {
  return query.toLowerCase().replace(/[ ,-]/g, '_')
}

const toIngredientsString = (ingredients) => {
  return ingredients
    .map((item) => item.toLowerCase().replace(/ /g, '_'))
    .join('%20')
}

const toTagsString = (tags) => {
  return tags.map((tag) => tag.replace(/_/g, '-')).join('%20')
}

const paramsBuilder = ({ query, ingredients, location, tags, count }) => {
  const params = {
    query: toQueryString(query),
    location: location?.length ? location : 'california',
  }

  ingredients?.length && (params.ingredients = toIngredientsString(ingredients))
  tags?.length && (params.tags = toTagsString(tags))
  count && (params.count = count.toString())
  return params
}

const randomParamsBuilder = ({ count, location, minimum_sus_score }) => {
  const params = {
    count: count?.toString(),
    location: location?.length ? location : 'california',
    minimum_sus_score: minimum_sus_score?.toString(),
    sorted: true,
  }

  return params
}

export {
  toQueryString,
  toIngredientsString,
  toTagsString,
  paramsBuilder,
  randomParamsBuilder,
}
