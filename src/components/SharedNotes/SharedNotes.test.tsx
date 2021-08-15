import { render, screen } from '@testing-library/react';
import SharedNotes from './SharedNotes';

test('should render the SharedNotes component', () => {
  render(<SharedNotes />);
  const sharedNotesElement = screen.getByText(/Shared Notes/i);
  expect(sharedNotesElement).toBeInTheDocument();
});
