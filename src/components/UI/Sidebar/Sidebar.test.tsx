import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';

test('renders the sidebar with logo icon', () => {
  render(<Sidebar />);
  const sidebarLogoElement = screen.getByAltText(/logo/i);
  expect(sidebarLogoElement).toBeInTheDocument();
});

test('renders the sidebar with dashboard icon', () => {
  render(<Sidebar />);
  const sidebarDashboardElement = screen.getByAltText(/Dashboard/i);
  expect(sidebarDashboardElement).toBeInTheDocument();
});

test('renders the sidebar with shared page icon', () => {
  render(<Sidebar />);
  const sidebarSharedElement = screen.getByAltText(/Shared Notes/i);
  expect(sidebarSharedElement).toBeInTheDocument();
});

test('renders the sidebar with user account icon', () => {
  render(<Sidebar />);
  const sidebarElement = screen.getByAltText(/User Account/i);
  expect(sidebarElement).toBeInTheDocument();
});
