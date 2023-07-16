import { NamedAPIResourceList, Pokemon } from 'pokenode-ts';
import { pokeActionTypes } from '../constants/pokeActionTypes';

export const getPokemonAction = (idOrName: number | string) => {
    return {
        type: pokeActionTypes.GET_POKEMON,
        idOrName
    };
};

export type GetPokemonReturnType = ReturnType<typeof getPokemonAction>;

export const resetPokemonDataAction = () => {
    return {
        type: pokeActionTypes.RESET_POKEMON_DATA
    };
};

export type ResetPokemonReturnType = ReturnType<typeof resetPokemonDataAction>;

export const storePokemonDataAction = (pokemon: Pokemon) => {
    return {
        type: pokeActionTypes.STORE_POKEMON_DATA,
        pokemon
    };
};

export type StorePokemonDataReturnType = ReturnType<typeof storePokemonDataAction>;

export type PokeReducerActions = GetPokemonReturnType | ResetPokemonReturnType | StorePokemonDataReturnType;
