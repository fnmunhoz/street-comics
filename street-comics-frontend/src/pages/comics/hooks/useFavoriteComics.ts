import { useEffect, useState } from 'react';

const STORAGE_KEY = 'favoriteComics';

const getSavedFavoriteComics = (): number[] => {
  try {
    const favoriteComics = window.sessionStorage.getItem(STORAGE_KEY);
    if (favoriteComics) {
      const parsedValue = JSON.parse(favoriteComics);
      return parsedValue as number[];
    }
  } catch (error) {}

  return [];
};

const saveFavoriteComics = (comicIds: number[]) => {
  try {
    const value = JSON.stringify(comicIds);
    window.sessionStorage.setItem(STORAGE_KEY, value);
  } catch (error) {}
};

const useFavoriteComics = () => {
  const [favoriteComics, setFavoriteComics] = useState<number[]>(() =>
    getSavedFavoriteComics()
  );

  useEffect(() => {
    saveFavoriteComics(favoriteComics);
  }, [favoriteComics]);

  const isFavorite = (comicsId: number) => {
    return favoriteComics.includes(comicsId);
  };

  const toggleFavorite = (comicsId: number) => {
    setFavoriteComics((currentValue) => {
      if (currentValue.includes(comicsId)) {
        return currentValue.filter((v) => v !== comicsId);
      } else {
        return [...currentValue, comicsId];
      }
    });
  };

  return {
    isFavorite,
    toggleFavorite,
  };
};

export default useFavoriteComics;
