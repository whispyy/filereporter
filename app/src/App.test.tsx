import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render title', () => {
  render(<App />);
  const titleElement = screen.getByText('File Reporter');
  expect(titleElement).toBeInTheDocument();
});
