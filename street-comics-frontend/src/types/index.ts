export type ComicsListApiData = {
  status: number;
  body: {
    data: {
      offset: number;
      limit: number;
      total: number;
      count: number;
      results: ComicItem[];
    };
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
