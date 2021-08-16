import { render, screen } from '@testing-library/react';
import Layout from './index';

test('renders the page title with empty children props', () => {
  render(
    <Layout pageTitle="title">
    </Layout>
  );
  const layoutTitleElement = screen.getByText(/title/i);
  expect(layoutTitleElement).toBeInTheDocument();
});

test('renders the children props', () => {
  render(
    <Layout pageTitle="title">
      Child props
    </Layout>
  );
  const layoutChildElement = screen.getByText(/Child props/i);
  expect(layoutChildElement).toBeInTheDocument();
});