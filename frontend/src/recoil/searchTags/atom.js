import { atom } from 'recoil';

/**
 * Recoil atom for search tags/filters
 *
 * @returns {array}
 */
const searchTags = atom({
  key: 'searchTagsAtom',
  default: []
});

export default searchTags;
