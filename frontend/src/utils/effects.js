const sessionStorageEffects = (key) => ({ setSelf, onSet }) => {
  const savedValue = sessionStorage.getItem(key);
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue));
  }
  onSet((newValue) => {
    sessionStorage.setItem(key, JSON.stringify(newValue));
  });
};

export { sessionStorageEffects };
