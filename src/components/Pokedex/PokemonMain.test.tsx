import { fireEvent, render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import PokemonMain, { PokemonMainProps } from './index';
import { Provider } from 'react-redux';
import { pokeInitialState } from '../../reducers/pokeReducers';

const mockStore = configureMockStore();
const store = mockStore({
  poke: pokeInitialState
});
const props: PokemonMainProps = {
  getPokemon: jest.fn(),
  pokemonData: [],
  resetPokemonData: jest.fn()
}

const setup = () => {
  const { container } = render(
    <Provider store={store}>
      <PokemonMain {...props} />
    </Provider>
  );
  const searchButton: Element | null = container.querySelector('.pokemon-main__search-button');
  const searchInput: Element | null = container.querySelector('.pokemon-main__search-input input');

  return {
    container,
    searchButton,
    searchInput
  }
}

describe('<PokemonMain />', () => {
  it ('should render', () => {
    const {container} = setup();
    const pokemonMain: Element | null = container.querySelector('.pokemon-main');

    expect(pokemonMain).toBeInTheDocument();
  });

  it ('should render search input', () => {
    const {searchInput} = setup();

    expect(searchInput).toBeInTheDocument();
  });

  it ('should render search button', () => {
    const {searchButton} = setup();

    expect(searchButton).toBeInTheDocument();
  });

  it ('should render Pokemon cards', () => {
    const {container} = setup();
    const pokemonCards: Element | null = container.querySelector('.pokemon-list__cards');

    expect(pokemonCards).toBeInTheDocument();
  });

  it ('should be able to search for any Pokemon', () => {
    const {container, searchButton, searchInput} = setup();
    console.log('searchInput', searchInput);

    fireEvent.change(searchInput!, {target: {value: '1'}});
    fireEvent.click(searchButton!);
    
    expect(props.resetPokemonData).toHaveBeenCalled();
    expect(props.getPokemon).toHaveBeenCalled();
  });
});
