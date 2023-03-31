import { render, screen } from '@testing-library/react';

import Footer from './Footer';

test('expect to render Footer', () => {
  render(<Footer>
      <button>Go to AppStore</button>
    </Footer>);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});
