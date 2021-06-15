import { getMonthName, getMonthPeriod } from './dataHelpers';

const toQueryString = query => query.toLowerCase().replace(/[ ,-]/g, '_');

const toIngredientsString = ingredients =>
  ingredients.map(item => item.toLowerCase().replace(/ /g, '_')).join(' ');

const toTagsString = tags => tags.map(tag => tag.replace(/_/g, '-')).join(' ');

const paramsBuilder = ({ query, ingredients, location, tags, count }) => {
  const params = {
    query: toQueryString(query),
    location: location?.length ? location : 'california'
  };

  if (ingredients?.length) {
    params.ingredients = toIngredientsString(ingredients);
  }

  if (tags?.length) {
    params.tags = toTagsString(tags);
  }

  if (count) {
    params.count = count.toString();
  }
  return params;
};

const randomParamsBuilder = ({ count, location, minSusScore }) => {
  const params = {
    count: count?.toString(),
    location: location?.length ? location : 'california',
    minimum_sus_score: minSusScore?.toString(),
    sorted: true
  };

  return params;
};

const produceParamsBuilder = ({ location }) => {
  const params = {
    location: location?.length ? location : 'california',
    month: getMonthName(new Date().getMonth()),
    period: getMonthPeriod(new Date().getDate())
  };

  return params;
};

export {
  toQueryString,
  toIngredientsString,
  toTagsString,
  paramsBuilder,
  randomParamsBuilder,
  produceParamsBuilder
};
