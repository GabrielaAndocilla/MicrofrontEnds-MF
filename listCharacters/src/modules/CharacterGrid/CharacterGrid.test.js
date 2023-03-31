import { render, screen, waitFor } from '@testing-library/react';
import CharacterGrid from '.';

import { getCharacters } from "../../services/characters";

jest.mock('../../services/characters')
 
describe('test Charractr Grid', () => {
  test('expect to render Button', async () => {
    getCharacters.mockResolvedValue(Promise.resolve([{
        id:1,
        name:'test',
        imagePath:'test img',
        description:'test description'
      }]))
    render(<CharacterGrid name='test' locale='en'/>);
    await waitFor( () =>expect(screen.getAllByText(/test/).length).toBe(2) )

  });
})
  
