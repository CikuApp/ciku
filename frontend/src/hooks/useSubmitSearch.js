import { useSetRecoilState } from 'recoil'

// State
import searchParamsAtom from 'recoil/searchParams'
import searchRequestedAtom from 'recoil/searchRequested'
import searchIngredientsAtom from 'recoil/searchIngredients'
import searchTagsAtom from 'recoil/searchTags'
import locationAtom from 'recoil/location'

/**
 *
 * @param {string} searchInput - search input field
 * @param {function} clearSearchInput - callback to clear search input
 */
const useSubmitSearch = (searchInput, clearSearchInput) => {
  const setSearchParams = useSetRecoilState(searchParamsAtom)
  const setSearchRequested = useSetRecoilState(searchRequestedAtom)
  const setSearchIngredients = useSetRecoilState(searchIngredientsAtom)
  const setSearchTags = useSetRecoilState(searchTagsAtom)
  const setLocation = useSetRecoilState(locationAtom)

  const submitSearch = (e) => {
    e.preventDefault()
    // prevent empty search
    const currentSearch = searchInput.trim()
    if (currentSearch.length) {
      // completely overwrite previous search terms
      setSearchParams([currentSearch])
      clearSearchInput()
      setSearchTags([])
      setSearchIngredients([])
      setLocation((currentLocation) =>
        currentLocation.length ? currentLocation : 'california'
      )
      setSearchRequested(true)
    }
  }
  return [submitSearch]
}

export default useSubmitSearch
