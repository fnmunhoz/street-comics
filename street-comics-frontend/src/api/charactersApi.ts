import axios from 'axios';
import { useQueryClient } from 'react-query';
import { CharactersApiParams, CharactersListApiData } from '../types';

export const useFetchCharactersApi = () => {
  const endpoint = '/api/v1/characters';

  const client = useQueryClient();

  return (customParams: Partial<CharactersApiParams>) => {
    const defaultParams: CharactersApiParams = {
      provider: 'marvel',
      offset: 0,
      limit: 15,
      order_by_field: 'name',
      order_by_direction: 'asc',
    };

    const params = {
      ...defaultParams,
      ...customParams,
    };

    return client.fetchQuery({
      queryKey: [endpoint, params],
      queryFn: async () => {
        const response = await axios.get<CharactersListApiData>(endpoint, {
          params,
        });

        return response.data.data;
      },
    });
  };
};
