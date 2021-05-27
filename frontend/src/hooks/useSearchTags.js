import { useRecoilState } from 'recoil'

// States
import searchTagsAtom from 'recoil/searchTags'

// Utils
import { arrayReducer } from 'utils/reducers'

const useSearchTags = () => {
  const [searchTags, setSearchTags] = useRecoilState(searchTagsAtom)

  const toggleSearchTag = (tag) => {
    arrayReducer(tag, setSearchTags)
  }

  const isInSearchTags = (tag) => {
    return searchTags.includes(tag)
  }

  return [isInSearchTags, toggleSearchTag]
}

export default useSearchTags
