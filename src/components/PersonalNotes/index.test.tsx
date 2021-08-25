import { render, screen } from '@testing-library/react';
import PersonalNotes from './index';

test('should render the personal notes component', () => {
  render(<PersonalNotes />);
  const notesElement = screen.getByText(/Personal Notes/i);
  expect(notesElement).toBeInTheDocument();
});