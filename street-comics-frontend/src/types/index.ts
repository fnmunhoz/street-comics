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
};

export type ComicsProvider = 'marvel';

export type ComicItem = {
  id: number;
  title: string;
};
