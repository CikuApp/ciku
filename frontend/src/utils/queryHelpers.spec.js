/* eslint-disable no-undef */
import {
  toQueryString,
  toIngredientsString,
  toTagsString,
  paramsBuilder,
  randomParamsBuilder
} from './queryHelpers';

describe('Format query string', () => {
  test('it lowercases all characters', () => {
    const str = 'Spaghetti';
    expect(toQueryString(str)).toEqual('spaghetti');
  });

  test('it replaces spaces with underscores', () => {
    const str = 'spaghetti bolognese';
    expect(toQueryString(str)).toEqual('spaghetti_bolognese');
  });

  test('it replaces dashes with underscores', () => {
    const str = 'spaghetti-bolognese';
    expect(toQueryString(str)).toEqual('spaghetti_bolognese');
  });
});

describe('Format ingredients string', () => {
  test('it lowercases all characters', () => {
    const ingredients = ['Apple'];
    expect(toIngredientsString(ingredients)).toEqual('apple');
  });

  test('it replaces spaces between words with underscores', () => {
    const ingredients = ['apple juice'];
    expect(toIngredientsString(ingredients)).toEqual('apple_juice');
  });

  test('it concatenates the elements with %20', () => {
    const ingredients = ['apple', 'banana'];
    expect(toIngredientsString(ingredients)).toEqual('apple%20banana');
  });
});

describe('Format tags string', () => {
  test('it replaces underscores between words with dashes', () => {
    const tags = ['low_calorie'];
    expect(toTagsString(tags)).toEqual('low-calorie');
  });

  test('it concatenates the elements with %20', () => {
    const tags = ['vegetarian', 'easy'];
    expect(toTagsString(tags)).toEqual('vegetarian%20easy');
  });
});

describe('Create a params object', () => {
  test('it returns an object with query property', () => {
    expect(paramsBuilder({ query: 'spaghetti' })).toHaveProperty('query');
  });

  test('it returns an object with location property if provided', () => {
    expect(
      paramsBuilder({ query: 'spaghetti', location: 'arkansas' })
    ).toStrictEqual({
      query: 'spaghetti',
      location: 'arkansas'
    });
  });

  test('it returns an object with default location california if none supplied', () => {
    expect(paramsBuilder({ query: 'spaghetti' })).toStrictEqual({
      query: 'spaghetti',
      location: 'california'
    });
  });

  test('it returns an object with serialized ingredients if provided', () => {
    expect(
      paramsBuilder({
        query: 'spaghetti',
        ingredients: ['canned tomatoes', 'basil']
      })
    ).toStrictEqual({
      query: 'spaghetti',
      location: 'california',
      ingredients: 'canned_tomatoes%20basil'
    });
  });

  test('it returns an object with serialized tags if provided', () => {
    expect(
      paramsBuilder({
        query: 'spaghetti',
        tags: ['low_sodium', 'vegetarian']
      })
    ).toStrictEqual({
      query: 'spaghetti',
      location: 'california',
      tags: 'low-sodium%20vegetarian'
    });
  });

  test('it returns an object with count if provided', () => {
    expect(
      paramsBuilder({
        query: 'spaghetti',
        count: 5
      })
    ).toStrictEqual({
      query: 'spaghetti',
      location: 'california',
      count: '5'
    });
  });
});

describe('Create a params object for random recipes endpoint', () => {
  test('it returns an object with count property', () => {
    expect(randomParamsBuilder({})).toHaveProperty('count');
  });

  test('it returns an object with minimum_sus_score property', () => {
    expect(randomParamsBuilder({})).toHaveProperty('minimum_sus_score');
  });

  test('it returns an object with location property', () => {
    expect(randomParamsBuilder({})).toHaveProperty('location');
  });

  test('it returns an object with sorted property', () => {
    expect(randomParamsBuilder({})).toHaveProperty('sorted');
  });

  test('it returns an object with location property if provided', () => {
    expect(
      randomParamsBuilder({
        count: 50,
        minimum_sus_score: 3,
        location: 'arkansas'
      })
    ).toStrictEqual({
      count: '50',
      minimum_sus_score: '3',
      location: 'arkansas',
      sorted: true
    });
  });

  test('it returns an object with default location california if none supplied', () => {
    expect(
      randomParamsBuilder({ count: 50, minimum_sus_score: 3 })
    ).toStrictEqual({
      count: '50',
      minimum_sus_score: '3',
      location: 'california',
      sorted: true
    });
  });
});
