import {
  toQueryString,
  toIngredientsString,
  toTagsString,
} from './queryHelpers'

describe('Format query string', () => {
  test('it adds the appropriate query param to the start', () => {
    const str = 'spaghetti'
    expect(toQueryString(str)).toEqual('query=spaghetti')
  })

  test('it lowercases all characters', () => {
    const str = 'Spaghetti'
    expect(toQueryString(str)).toEqual('query=spaghetti')
  })

  test('it replaces spaces with underscores', () => {
    const str = 'spaghetti bolognese'
    expect(toQueryString(str)).toEqual('query=spaghetti_bolognese')
  })

  test('it replaces dashes with underscores', () => {
    const str = 'spaghetti-bolognese'
    expect(toQueryString(str)).toEqual('query=spaghetti_bolognese')
  })
})

describe('Format ingredients string', () => {
  test('it adds the appropriate query param to the start', () => {
    const ingredients = ['apple']
    expect(toIngredientsString(ingredients)).toEqual('&ingredients=apple')
  })

  test('it lowercases all characters', () => {
    const ingredients = ['Apple']
    expect(toIngredientsString(ingredients)).toEqual('&ingredients=apple')
  })

  test('it replaces spaces between words with underscores', () => {
    const ingredients = ['apple juice']
    expect(toIngredientsString(ingredients)).toEqual('&ingredients=apple_juice')
  })

  test('it concatenates the elements with %20', () => {
    const ingredients = ['apple', 'banana']
    expect(toIngredientsString(ingredients)).toEqual(
      '&ingredients=apple%20banana'
    )
  })
})

describe('Format tags string', () => {
  test('it adds the appropriate query param to the start', () => {
    const tags = ['easy']
    expect(toTagsString(tags)).toEqual('&tags=easy')
  })

  test('it replaces underscores between words with dashes', () => {
    const tags = ['low_calorie']
    expect(toTagsString(tags)).toEqual('&tags=low-calorie')
  })

  test('it concatenates the elements with %20', () => {
    const tags = ['vegetarian', 'easy']
    expect(toTagsString(tags)).toEqual('&tags=vegetarian%20easy')
  })
})
