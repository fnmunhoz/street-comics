import { useState } from 'react';
import { useFetchCharactersApi } from '../../../api/charactersApi';
import { useComicsApi } from '../../../api/comicsApi';
import { ComicItem } from '../../../types';

const useFilteredComics = () => {
  const [charactersIds, setCharacterIds] = useState<number[] | null>(null);
  const [isFetchingCharacters, setIsFetchingCharacters] = useState(false);

  const result = useComicsApi({ characters_ids: charactersIds?.join(',') });
  const fetchCharacters = useFetchCharactersApi();

  const onChangeCharactersFilter = async (charactersFilter: string) => {
    if (!charactersFilter) {
      setCharacterIds(null);
      return;
    }

    setIsFetchingCharacters(true);

    const result = await fetchCharacters({
      name_starts_with: charactersFilter,
    });

    setCharacterIds(result.items.map((i) => i.id));
    setIsFetchingCharacters(false);
  };

  const { data, isError, isLoading } = result;

  const isEmpty = calculateIsEmpty(result.data?.items, charactersIds);

  const isFetching = result.isFetching || isFetchingCharacters;

  return {
    data,
    isEmpty,
    isFetching,
    isLoading,
    isError,
    onChangeCharactersFilter,
  };
};

const calculateIsEmpty = (
  items: ComicItem[] | undefined,
  charactersIds: number[] | null
) => {
  const isEmptyComics = !items?.length;
  const isFilteringByCharacters = charactersIds !== null;
  const isEmptyCharacters =
    isFilteringByCharacters && charactersIds?.length === 0;
  return isEmptyComics || isEmptyCharacters;
};

export default useFilteredComics;
