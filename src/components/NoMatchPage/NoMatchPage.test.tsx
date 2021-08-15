import { render, screen } from '@testing-library/react';
import NoMatchPage from './NoMatchPage';

test('should render the NoMatchPage component', () => {
  render(<NoMatchPage />);
  const noMatchPageElement = screen.getByText(/404/i);
  expect(noMatchPageElement).toBeInTheDocument();
});
