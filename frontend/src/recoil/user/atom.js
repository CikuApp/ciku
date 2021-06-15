import { atom } from 'recoil';

import { localStorageEffects } from 'utils/effects';

/**
 * Recoil atom for user information (name, shopping list, saved recipes)
 * uses local storage effects
 *
 * @returns {object}
 */
const userAtom = atom({
  key: 'userAtom',
  default: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : { name: '', shoppingList: [], savedRecipes: [] },
  effects_UNSTABLE: [localStorageEffects('user')]
});

export default userAtom;
