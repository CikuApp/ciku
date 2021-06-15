import { selector } from 'recoil';
import userAtom from './atom';

/**
 * Recoil selector for user's shopping list
 *
 * @return {array}
 */
const userShoppingList = selector({
  key: 'userShoppingList',
  get: ({ get }) => {
    const { shoppingList } = get(userAtom);
    return shoppingList;
  },
  set: ({ set, get }, newValue) => {
    set(userAtom, { ...get(userAtom), shoppingList: newValue });
  }
});

export default userShoppingList;
