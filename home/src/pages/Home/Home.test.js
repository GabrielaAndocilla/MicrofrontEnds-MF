import { render, screen, fireEvent } from '@testing-library/react';
import Home from "./Home";


jest.mock('listCharacters/CharacterGrid',
  () => ({
    myFunc: () => 'hi'
  }),
  { virtual: true }
);

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  }
}));

describe('Test Home Component', () => { 

  it('should render Home Component', () => {
    render(<Home/>)
  })

  it('should try to render micro frontend when user Click', () => {
    render(<Home/>)
    const HarryPotterButton = screen.getAllByRole('button')[0]
    fireEvent.click(HarryPotterButton)
    const waitingTxt = screen.getByText('...is Loading')
    expect(waitingTxt).toBeInTheDocument()

  })
})