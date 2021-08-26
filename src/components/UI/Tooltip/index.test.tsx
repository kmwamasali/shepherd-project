import { render, screen } from '@testing-library/react';
import Tooltip from './index';

test('should render the child component', () => {
  render(<Tooltip content="context">
    Child
  </Tooltip>);
  const tooltipElement = screen.getByText(/Child/i);
  expect(tooltipElement).toBeInTheDocument();
});