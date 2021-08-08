import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RequestParams, rest } from 'msw';
import App from './App';
import { server } from './mocks/server';
import {
  CharactersListApiData,
  ComicsApiParams,
  ComicsListApiData,
} from './types';

const defaultComicsApiData: ComicsListApiData = {
  data: {
    offset: 0,
    limit: 15,
    total: 100,
    count: 1,
    items: [
      {
        id: 82967,
        title: 'Marvel Previews (2017)',
        thumbnail: 'http://files.app.com/thumbnail.jpg',
      },
    ],
  },
};

const defaultCharactersData: CharactersListApiData = {
  data: {
    offset: 0,
    limit: 15,
    total: 0,
    count: 0,
    items: [
      { id: 1, name: 'Dead Girl' },
      { id: 2, name: 'Deadpool' },
    ],
  },
};

const setupComicsGetHTTPHandler = (
  data: ComicsListApiData,
  onGetComicsCallback?: (params: Partial<ComicsApiParams>) => void
) => {
  server.use(
    rest.get('/api/v1/comics', (req, res, ctx) => {
      onGetComicsCallback?.({
        characters_ids: req.url.searchParams.get('characters_ids'),
      });
      return res(
        ctx.status(200),

        ctx.json(data)
      );
    })
  );
};

const setupCharactersGetHTTPHandler = (data: CharactersListApiData) => {
  server.use(
    rest.get('/api/v1/characters', (req, res, ctx) => {
      return res(
        ctx.status(200),

        ctx.json(data)
      );
    })
  );
};

test('renders the loading state at first', async () => {
  setupComicsGetHTTPHandler(defaultComicsApiData);

  render(<App />);

  const loading = screen.getByLabelText(/loading/i);

  expect(loading).toBeInTheDocument();
});

test('renders the Comics page title', async () => {
  setupComicsGetHTTPHandler(defaultComicsApiData);

  render(<App />);

  const pageTitle = await screen.findByRole('heading', {
    name: /marvel/i,
    level: 2,
  });

  expect(pageTitle).toBeInTheDocument();
});

test('renders a comic title', async () => {
  setupComicsGetHTTPHandler(defaultComicsApiData);

  render(<App />);

  const pageTitle = await screen.findByText(/marvel previews/i);
  expect(pageTitle).toBeInTheDocument();
});

test('renders a comic thumbnail', async () => {
  setupComicsGetHTTPHandler(defaultComicsApiData);

  render(<App />);
  const thumbnail = await screen.findByRole('img', {
    name: 'Marvel Previews (2017)',
  });

  expect(thumbnail).toBeInTheDocument();
  expect(thumbnail).toHaveAttribute('src', 'fallback.jpg');
});

test('renders an empty state if there are no comics', async () => {
  const emptyData: ComicsListApiData = {
    data: {
      offset: 0,
      limit: 15,
      total: 0,
      count: 0,
      items: [],
    },
  };
  setupComicsGetHTTPHandler(emptyData);

  render(<App />);

  const alert = await screen.findByText(/no comics found/i);

  expect(alert).toBeInTheDocument();
});

test('filtering by character returns filtered results', async () => {
  const onGetComicsCallback = jest.fn();
  setupComicsGetHTTPHandler(defaultComicsApiData, onGetComicsCallback);
  setupCharactersGetHTTPHandler(defaultCharactersData);

  render(<App />);
  const filterInput = await screen.findByPlaceholderText(
    /filter by character/i
  );
  userEvent.type(filterInput, 'dead');

  await waitFor(() => {
    expect(onGetComicsCallback).toHaveBeenLastCalledWith({
      characters_ids: '1,2',
    });
  });
});

test('renders an error if the request fails', async () => {
  server.use(
    rest.get('/api/v1/comics', (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<App />);

  const pageTitle = await screen.findByText(/something went wrong/i);
  expect(pageTitle).toBeInTheDocument();
});
