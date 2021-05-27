const arrayReducer = (item, setter) => {
  setter((state) => {
    if (state.includes(item)) {
      return state.filter((x) => x !== item)
    } else {
      return [...state, item]
    }
  })
}

export { arrayReducer }
