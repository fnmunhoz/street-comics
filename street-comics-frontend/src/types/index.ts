export type DataProvider = 'marvel';
export type OrderByDirection = 'asc' | 'desc';

export type ComicsListApiData = {
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    items: ComicItem[];
  };
};

export type ComicsApiParams = {
  provider: DataProvider;
  offset: number;
  limit: number;
  order_by_field: ComicsOrderByField;
  order_by_direction: OrderByDirection;
  characters_ids?: string | null;
};

export type ComicsOrderByField = 'releaseDate' | 'title';

export type ComicItem = {
  id: number;
  title: string;
  thumbnail: string;
};

export type CharactersListApiData = {
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    items: CharactersItem[];
  };
};

export type CharactersApiParams = {
  provider: DataProvider;
  offset: number;
  limit: number;
  order_by_field: CharactersOrderByField;
  order_by_direction: OrderByDirection;
  name_starts_with?: string;
};

export type CharactersOrderByField = 'name';

export type CharactersItem = {
  id: number;
  name: string;
};
