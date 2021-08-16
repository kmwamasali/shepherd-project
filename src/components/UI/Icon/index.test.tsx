import { render, screen } from '@testing-library/react';
import Icon from './index';
import logo from '../../../images/logo-icon.png';

test('renders the icon', () => {
  render(<Icon 
    source={logo}
    label="logo"
  />);
  const iconElement = screen.getByAltText(/logo/i);
  expect(iconElement).toBeInTheDocument();
});