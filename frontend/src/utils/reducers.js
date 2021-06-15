/* eslint-disable import/prefer-default-export */
const arrayReducer = (item, setter) => {
  setter(state => {
    if (state.includes(item)) {
      return state.filter(x => x !== item);
    }
    return [...state, item];
  });
};

export { arrayReducer };
