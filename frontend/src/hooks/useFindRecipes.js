import { useSetRecoilState, useRecoilValue } from 'recoil';

// States
import searchTagsAtom from 'recoil/searchTags';
import searchIngredientsAtom from 'recoil/searchIngredients';
import searchParamsAtom from 'recoil/searchParams';

const useFindRecipes = () => {
  const setSearchTags = useSetRecoilState(searchTagsAtom);
  const setSearchIngredients = useSetRecoilState(searchIngredientsAtom);
  const searchParams = useRecoilValue(searchParamsAtom);

  const findRecipes = () => {
    setSearchTags([]);
    setSearchIngredients(searchParams);
  };

  return [findRecipes];
};

export default useFindRecipes;
