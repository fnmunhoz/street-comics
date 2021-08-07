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
  provider: ComicsProvider;
  offset: number;
  limit: number;
  order_by_field: ComicsOrderByField;
  order_by_direction: ComicsOrderByDirection;
};

export type ComicsProvider = 'marvel';

export type ComicsOrderByField = 'releaseDate' | 'title';
export type ComicsOrderByDirection = 'asc' | 'desc';

export type ComicItem = {
  id: number;
  title: string;
};
