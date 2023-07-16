import { fireEvent, render } from '@testing-library/react';
import { mockPokemon } from '../../constants/tests/Pokemon';
import { capitalizeFirstLetter } from '../../global/helperMethods';
import PokemonCard, { PokemonCardProps } from './PokemonCard';

const props: PokemonCardProps = {
  onClick: jest.fn(),
  pokemon: mockPokemon
};

describe('<PokemonCard />', () => {
  it ('should render', () => {
    const { container } = render(<PokemonCard {...props} />);
    const pokemonCard: Element | null = container.querySelector('.pokemon-card');

    expect(pokemonCard).toBeInTheDocument();
  });

  it ('should render avatar', () => {
    const { container } = render(<PokemonCard {...props} />);
    const avatar: Element | null = container.querySelector('.pokemon-card__avatar');

    expect(avatar).toBeInTheDocument();
  });

  it ('should render name', () => {
    const { getByText } = render(<PokemonCard {...props} />);

    getByText(capitalizeFirstLetter(props.pokemon.name));
  });

  it ('should render id', () => {
    const { getByText } = render(<PokemonCard {...props} />);

    getByText(`#${props.pokemon.id}`);
  });

  it ('should invoke onClick when card is clicked', () => {
    const { container } = render(<PokemonCard {...props} />);
    const pokemonCard: Element | null = container.querySelector('.pokemon-card');

    fireEvent.click(pokemonCard!);

    expect(props.onClick).toHaveBeenCalled();
  });
});