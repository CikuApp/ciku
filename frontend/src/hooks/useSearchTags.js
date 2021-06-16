import { useRecoilState } from 'recoil';

// States
import searchTagsAtom from 'recoil/searchTags';

// Utils
import { arrayReducer } from 'utils/reducers';

/**
 * Hook for setting search tags, determining whether a tag is currently included
 *
 * @returns {array}
 */
const useSearchTags = () => {
  const [searchTags, setSearchTags] = useRecoilState(searchTagsAtom);

  const toggleSearchTag = tag => {
    arrayReducer(tag, setSearchTags);
  };

  const isInSearchTags = tag => searchTags.includes(tag);

  return [isInSearchTags, toggleSearchTag];
};

export default useSearchTags;
