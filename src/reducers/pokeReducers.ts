import { pokeActionTypes } from '../constants/pokeActionTypes';
import { PokeReducerActions } from '../actions/pokeActions';

export const pokeInitialState = {
    pokedex: {}
} as const;

const pokeReducer = (state = pokeInitialState, action: PokeReducerActions) => {
    switch (action.type) {
        case pokeActionTypes.STORE_POKEDEXES:
            return {
                ...state,
                pokedex: action.pokedex
            };
        default:
            return state;
    }
};

export default pokeReducer;