import { atom } from 'recoil';

/**
 * Recoil atom for main search parameters
 * @returns {array}
 */
const searchParamsAtom = atom({
  key: 'searchParamsAtom',
  default: []
});

export default searchParamsAtom;
