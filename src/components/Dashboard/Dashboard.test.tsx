import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

test('should render the dashboard component', () => {
  render(<Dashboard />);
  const dashboardElement = screen.getByText(/Dashboard/i);
  expect(dashboardElement).toBeInTheDocument();
});
