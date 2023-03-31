import { render, screen } from '@testing-library/react';

import Header from './Header';

test('expect to render Footer', () => {
  render(<Header>
      <h1>This is a title</h1>
    </Header>);
  const buttonElement = screen.getByRole('heading');
  expect(buttonElement).toBeInTheDocument();
});
