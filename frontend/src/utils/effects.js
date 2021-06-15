/**
 * Recoil effect for setting and getting from session storage
 *
 * @param {string} key
 * @returns
 */
const sessionStorageEffects =
  key =>
  ({ setSelf, onSet }) => {
    const savedValue = sessionStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet(newValue => {
      sessionStorage.setItem(key, JSON.stringify(newValue));
    });
  };

/**
 * Recoil effect for setting and getting from local storage
 *
 * @param {string} key
 * @returns
 */
const localStorageEffects =
  key =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet(newValue => {
      localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export { sessionStorageEffects, localStorageEffects };
