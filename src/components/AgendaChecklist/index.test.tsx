import { render, screen } from '@testing-library/react';
import AgendaChecklist from './index';

test('should render the personal notes component', () => {
  render(<AgendaChecklist />);
  const checklistElement = screen.getByText(/Agenda/i);
  expect(checklistElement).toBeInTheDocument();
});