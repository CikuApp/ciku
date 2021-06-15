import { atom } from 'recoil';

/**
 * Recoil atom for additional search ingredients
 * @returns {array}
 */
const searchIngredients = atom({
  key: 'searchIngredientsAtom',
  default: []
});

export default searchIngredients;
