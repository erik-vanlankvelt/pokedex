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
};

const defaultSearchValue: string = '1';

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
    };
};

const fireSearch = (searchButton: Element, searchInput: Element) => {
    fireEvent.change(searchInput!, { target: { value: defaultSearchValue } });
    fireEvent.click(searchButton!);
};

describe('<PokemonMain />', () => {
    it('should render', () => {
        const { container } = setup();
        const pokemonMain: Element | null = container.querySelector('.pokemon-main');

        expect(pokemonMain).toBeInTheDocument();
    });

    it('should render search input', () => {
        const { searchInput } = setup();

        expect(searchInput).toBeInTheDocument();
    });

    it('should render search button', () => {
        const { searchButton } = setup();

        expect(searchButton).toBeInTheDocument();
    });

    it('should render Pokemon cards', () => {
        const { container } = setup();
        const pokemonCards: Element | null = container.querySelector('.pokemon-list__cards');

        expect(pokemonCards).toBeInTheDocument();
    });

    it('should be able to search for any Pokemon', () => {
        const { container, searchButton, searchInput } = setup();

        fireSearch(searchButton!, searchInput!);

        setTimeout(() => {
            const pokemonCards = container.querySelectorAll('.pokemon-card');

            expect(props.resetPokemonData).toHaveBeenCalled();
            expect(props.getPokemon).toHaveBeenCalled();
            expect(pokemonCards).toBeInTheDocument();
            expect(pokemonCards.length).toBeGreaterThan(0);
        });
    });
});

it('should see a history of what has been searched', () => {
    const { container, searchButton, searchInput } = setup();

    fireSearch(searchButton!, searchInput!);

    setTimeout(() => {
        const searchHistory = container.querySelector('.pokemon-search-history');
        const searchHistoryItems = container.querySelectorAll('.pokemon-search-history__item');

        expect(searchHistory).toBeInTheDocument();
        expect(searchHistoryItems).toBeInTheDocument();
        expect(searchHistoryItems.length).toBeGreaterThan(0);
    });
});

it('should be able to revisit search history', () => {
    const { container, searchButton, searchInput } = setup();

    fireSearch(searchButton!, searchInput!);

    setTimeout(() => {
        const pokemonCards = container.querySelectorAll('.pokemon-card');
        const searchHistoryItems = container.querySelectorAll('.pokemon-search-history__item');

        fireEvent.click(searchHistoryItems[0]);

        expect(props.resetPokemonData).toHaveBeenCalled();
        expect(props.getPokemon).toHaveBeenCalled();
        expect(searchInput).toHaveValue(defaultSearchValue);
        expect(pokemonCards.length).toBeGreaterThan(0);
    });
});

it('should display Pokemon details when card is selected', () => {
    const { container } = setup();
    const pokemonCards = container.querySelectorAll('.pokemon-card');

    setTimeout(() => {
        fireEvent.click(pokemonCards[0]);

        const pokemonDetails = container.querySelectorAll('.pokemon-details');

        expect(pokemonDetails).toBeInTheDocument();
    });
});
