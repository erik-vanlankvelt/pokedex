import { Pokedex } from "pokenode-ts";
import { pokeActionTypes } from "../constants/pokeActionTypes";

export const getPokedexesAction = (idOrName: number | string) => {
    return {
        type: pokeActionTypes.GET_POKEDEXES,
        idOrName
    };
}

export type GetPokedexesReturnType = ReturnType<typeof getPokedexesAction>;

export const storePokedexesAction = (pokedex: Pokedex) => {
    return {
        type: pokeActionTypes.STORE_POKEDEXES,
        pokedex
    };
}

export type StorePokedexesReturnType = ReturnType<typeof storePokedexesAction>;

export type PokeReducerActions = 
    | GetPokedexesReturnType
    | StorePokedexesReturnType;