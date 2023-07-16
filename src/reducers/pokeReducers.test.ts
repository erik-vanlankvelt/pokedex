import { storePokemonDataAction } from '../actions/pokeActions';
import { mockPokemon } from '../constants/tests/Pokemon';
import reducer, { pokeInitialState } from './pokeReducers'; 

describe('pokeReducers', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {} as any)).toEqual(pokeInitialState);
  });

  it('should handle storePokemonDataAction', () => {
    const action = storePokemonDataAction(mockPokemon);
    const expected = {
      ...pokeInitialState,
      pokemonData: [...pokeInitialState.pokemonData, action.pokemon]
    }
  });

  it('should handle resetPokemonDataAction', () => {
    expect(reducer(undefined, {} as any)).toEqual(pokeInitialState);
  });
});