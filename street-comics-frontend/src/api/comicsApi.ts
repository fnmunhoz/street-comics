import axios from 'axios';
import { useQuery } from 'react-query';
import { ComicsApiParams, ComicsListApiData } from '../types';

export const useComicsApi = (customParams: Partial<ComicsApiParams>) => {
  const endpoint = '/api/v1/comics';

  const defaultParams: ComicsApiParams = {
    provider: 'marvel',
    offset: 0,
    limit: 15,
    order_by_field: 'releaseDate',
    order_by_direction: 'desc',
  };

  const params: ComicsApiParams = {
    ...defaultParams,
    ...customParams,
  };

  return useQuery(
    [endpoint, params],
    async () => {
      const response = await axios.get<ComicsListApiData>(endpoint, { params });

      return response.data.data;
    },
    { keepPreviousData: true }
  );
};
