import { atom } from 'recoil';

const searchRequestedAtom = atom({
  key: 'searchRequestedAtom',
  default: false
});

export default searchRequestedAtom;
