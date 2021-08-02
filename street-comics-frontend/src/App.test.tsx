import { getRoles, render, screen } from '@testing-library/react';
import { rest } from 'msw';
import App from './App';
import { server } from './mocks/server';
import { ComicsListApiData } from './types';

const defaultComicsApiData: ComicsListApiData = {
  status: 200,
  body: {
    data: {
      offset: 0,
      limit: 15,
      total: 100,
      count: 1,
      results: [
        {
          id: 82967,
          title: 'Marvel Previews (2017)',
        },
      ],
    },
  },
};

const setupComicsGetHTTPHandler = (data: ComicsListApiData) => {
  server.use(
    rest.get('/api/v1/comics', (req, res, ctx) => {
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

  const pageTitle = await screen.findByRole('heading', { name: /marvel/i });

  expect(pageTitle).toBeInTheDocument();
});

test('renders a comic title', async () => {
  setupComicsGetHTTPHandler(defaultComicsApiData);

  render(<App />);

  const pageTitle = await screen.findByText(/marvel previews/i);
  expect(pageTitle).toBeInTheDocument();
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
