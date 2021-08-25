import { render, screen } from '@testing-library/react';
import TextArea from './index';

test('should render the textarea component', () => {
  render(<TextArea />);
  const textareaElement = screen.getByRole('textbox');
  expect(textareaElement).toBeInTheDocument();
});