import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { Provider } from 'urql';
import client from '../lib/api';

test('render search', () => {
  render(
    <Provider value={client}>
      <Home />
    </Provider>
  );
  const searchElement = screen.getByText('Search');
  expect(searchElement).toBeInTheDocument();
});

test('render tiles', () => {
  render(
    <Provider value={client}>
      <Home />
    </Provider>
  );
  const tileElement = screen.getByText('Number of files');
  expect(tileElement).toBeInTheDocument();
});

test('render result table', () => {
  render(
    <Provider value={client}>
      <Home />
    </Provider>
  );
  const tableElement = screen.getByText('Type');
  expect(tableElement).toBeInTheDocument();
});
