/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders Invoices App', () => {
  render(<App />);
  const dashboard = screen.getByText(/Filter/i);
  expect(dashboard).toBeInTheDocument();
});
