/* eslint-disable no-undef */
import {
  toTitle,
  toSentence,
  formatStateName,
  truncate,
  getHints
} from './dataHelpers';

describe('Turn strings to recipe titles', () => {
  test('it capitalizes the first letter of every word in the string', () => {
    const recipeName = 'shrimp fried rice';
    expect(toTitle(recipeName)).toEqual('Shrimp Fried Rice');
  });

  test("it takes the lone S's and adds them to the previous word", () => {
    const recipeName = 'bea s shrimp fried rice';
    expect(toTitle(recipeName)).toEqual("Bea's Shrimp Fried Rice");
  });
});

describe('Turn strings to sentences', () => {
  test('it capitalizes the first letter of the string', () => {
    const str = 'slice the onions thinly.';
    expect(toSentence(str)).toEqual('Slice the onions thinly.');
  });

  test('it adds a period to the end of the string if it is not a sentence', () => {
    const str = 'slice the onions thinly';
    expect(toSentence(str)).toEqual('Slice the onions thinly.');
  });

  test('it does not add a period if it is already a sentence', () => {
    const str = 'slice the onions thinly!';
    expect(toSentence(str)).toEqual('Slice the onions thinly!');
  });
});

describe('Format state name function', () => {
  test('it replaces the dash between words with a space', () => {
    const stateName = 'new-york';
    expect(formatStateName(stateName)).toEqual('New York');
  });

  test('it capitalizes the first character of every word', () => {
    const stateName = 'new-york';
    expect(formatStateName(stateName)).toEqual('New York');
  });
});

describe('Truncate strings more than 40 characters with ellipses', () => {
  test('it truncates long strings', () => {
    const str = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
    expect(truncate(str)).toEqual(
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmn...'
    );
  });
  test('it does not truncate short strings', () => {
    const str = 'abcdefghijklmnopqrstuvwxyz';
    expect(truncate(str)).toEqual('abcdefghijklmnopqrstuvwxyz');
  });
});

describe('Return hints', () => {
  test('it returns a word matching the start of a string', () => {
    const arr = ['apple', 'banana', 'cranberries'];
    const str = 'ap';
    expect(getHints(str, arr)).toEqual('apple');
  });

  test('it returns the first matching word in an alphabetically ordered list', () => {
    const arr = ['acorn flour', 'almonds', 'apples'];
    const str = 'a';
    expect(getHints(str, arr)).toEqual('acorn flour');
  });

  test('it returns an empty string if no matches are found', () => {
    const arr = ['acorn flour', 'almonds', 'apples'];
    const str = 'ba';
    expect(getHints(str, arr)).toEqual('');
  });

  test('it returns an empty string if an empty string is given', () => {
    const arr = ['acorn flour', 'almonds', 'apples'];
    const str = '';
    expect(getHints(str, arr)).toEqual('');
  });
});
