import { Pokemon } from "pokenode-ts";
import { pokeActionTypes } from "../constants/pokeActionTypes";

export const getPokemonAction = (idOrName: number | string) => {
    return {
        type: pokeActionTypes.GET_POKEMON,
        idOrName
    };
}

export type GetPokemonReturnType = ReturnType<typeof getPokemonAction>;

export const storePokemonAction = (pokemon: Pokemon) => {
    return {
        type: pokeActionTypes.STORE_POKEMON,
        pokemon
    };
}

export type StorePokemonReturnType = ReturnType<typeof storePokemonAction>;

export type PokeReducerActions = 
    | GetPokemonReturnType
    | StorePokemonReturnType;