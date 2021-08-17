import { render, screen } from '@testing-library/react';
import Button from './index';

test('should render the Button component', () => {
  render(<Button label="add" />);
  const buttonElement = screen.getByText(/add/i);
  expect(buttonElement).toBeInTheDocument();
});
