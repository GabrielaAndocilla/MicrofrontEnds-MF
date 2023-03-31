import { render, screen } from '@testing-library/react';

import GridWrapper from './GridWrapper';

test('expect to render Button', () => {
  render(<GridWrapper>
    <div>1 test</div>
    <div>2 test</div>
    <div>3 test</div>
  </GridWrapper>);
  const texts = screen.getAllByText(/test/);
  expect(texts.length).toBe(3);
});
