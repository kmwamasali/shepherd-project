import { render, screen } from '@testing-library/react';
import file from '../../../images/file-icon.png';
import Card from './index';

test('should render the Card component', () => {
  render(
    <Card
      iconSize="20px"
      iconSrc={file}
      iconLabel="agenda"
      cardTitle="Personal Notes"
    >
      Some content
    </Card>
  );
  const CardElement = screen.getByText(/Some content/i);
  expect(CardElement).toBeInTheDocument();
});
