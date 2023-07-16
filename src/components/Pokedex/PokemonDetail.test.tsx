import { render } from '@testing-library/react';
import { mockPokemon } from '../../constants/tests/Pokemon';
import { capitalizeFirstLetter } from '../../global/helperMethods';
import PokemonDetail, { PokemonDetailProps } from './PokemonDetail';

const props: PokemonDetailProps = {
    pokemon: mockPokemon
};

describe('<PokemonDetail />', () => {
    it('should render', () => {
        const { container } = render(<PokemonDetail {...props} />);
        const pokemonDetail: Element | null = container.querySelector('.pokemon-detail');

        expect(pokemonDetail).toBeInTheDocument();
    });

    it('should render name', () => {
        const { getByText } = render(<PokemonDetail {...props} />);

        getByText(capitalizeFirstLetter(props.pokemon.name));
    });

    it('should render species', () => {
        const { getByText } = render(<PokemonDetail {...props} />);

        getByText(capitalizeFirstLetter(props.pokemon.species.name));
    });

    it('should render base experience', () => {
        const { getByText } = render(<PokemonDetail {...props} />);

        getByText(`Experience: ${props.pokemon.base_experience}`);
    });

    // TODO write more tests for what should be displayed
});
