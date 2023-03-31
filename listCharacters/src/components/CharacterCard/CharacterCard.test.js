import { render, screen } from '@testing-library/react';

import CharacterCard from '.';

test('expect to render Button', () => {
  render(<CharacterCard
    name={'test'}
    description={'test description'}
    imagePath={''}
  />);
  const texts = screen.getAllByText(/test/);
  expect(texts.length).toBe(2);
});
