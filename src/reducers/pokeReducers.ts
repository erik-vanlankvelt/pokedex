import { pokeActionTypes } from '../constants/pokeActionTypes';
import { PokeReducerActions } from '../actions/pokeActions';
import { Pokemon } from 'pokenode-ts';

export const pokeInitialState = {
    pokemonData: [] as Pokemon[]
};

const reducer = (state = pokeInitialState, action: PokeReducerActions) => {
    switch (action.type) {
        case pokeActionTypes.RESET_POKEMON_DATA:
            return {
                ...state,
                pokemonData: []
            };
        case pokeActionTypes.STORE_POKEMON_DATA:
            return {
                ...state,
                pokemonData: [...state.pokemonData, action.pokemon]
            };
        default:
            return state;
    }
};

export default reducer;