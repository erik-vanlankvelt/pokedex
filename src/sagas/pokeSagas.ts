import { Pokemon } from "pokenode-ts"
import { call, put, takeLatest } from 'redux-saga/effects'
import { GetPokemonReturnType, storePokemonAction } from "../actions/pokeActions";
import { getPokemonRequest } from "../api/pokeApi"
import { pokeActionTypes } from "../constants/pokeActionTypes";

export function* getPokemonSaga(action: GetPokemonReturnType) {
    // TODO invoke some sort of loading action

    try {
        const { idOrName } = action;
        const pokemon: Pokemon = yield call(getPokemonRequest, idOrName);
        yield put(storePokemonAction(pokemon));
    } catch (error) {
        console.error('Error trying to get Pokemon', error);
        // TODO invoke action to display error message
    }
    // TODO invoke hide loading action
}

export function* watchGetPokemon() {
    yield takeLatest(pokeActionTypes.GET_POKEMON, getPokemonSaga);
}