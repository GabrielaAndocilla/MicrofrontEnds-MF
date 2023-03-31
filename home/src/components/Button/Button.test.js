import { render, screen } from '@testing-library/react';

import Button from './Button';

test('expect to render Button', () => {
  render(<Button>test</Button>);
  const buttonText = screen.getByText(/test/);
  expect(buttonText).toBeInTheDocument();
});
