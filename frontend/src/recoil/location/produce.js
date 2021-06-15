import { selector } from 'recoil';

// Utils
import { getProduce } from 'utils/fetchHelpers';

// Atoms
import locationAtom from './atom';

/**
 * Recoil selector to fetch produce for location
 *
 * @returns {array} - of produce items, if any
 */
const locationProduce = selector({
  key: 'locationProduce',
  get: async ({ get }) => {
    // Atom dependency
    const location = get(locationAtom);

    const results = [];

    if (location.length) {
      const produceData = await getProduce(location);

      if (produceData) {
        results.push(...produceData[0].foods);
      }
    }

    return results;
  }
});

export default locationProduce;
