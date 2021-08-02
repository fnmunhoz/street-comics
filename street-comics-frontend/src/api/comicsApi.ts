import axios from 'axios';
import { useQuery } from 'react-query';
import { ComicsApiParams, ComicsListApiData } from '../types';

export const useComicsApi = (
  params: ComicsApiParams = { provider: 'marvel' }
) => {
  const endpoint = '/api/v1/comics';

  return useQuery(
    [endpoint, params],
    async () => {
      const response = await axios.get<ComicsListApiData>(endpoint, { params });

      return response.data.body.data;
    },
    { retry: false }
  );
};
