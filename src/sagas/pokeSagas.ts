import { Pokemon } from 'pokenode-ts';
import { call, put, takeEvery } from 'redux-saga/effects';
import { GetPokemonReturnType, storePokemonDataAction } from '../actions/pokeActions';
import { getPokemonRequest } from '../api/pokeApi';
import { pokeActionTypes } from '../constants/pokeActionTypes';

export function* getPokemonSaga(action: GetPokemonReturnType) {
    try {
        const { idOrName } = action;
        const pokemon: Pokemon = yield call(getPokemonRequest, idOrName);
        yield put(storePokemonDataAction(pokemon));
    } catch (error) {
        console.error('Error trying to get Pokemon', error);
        // TODO invoke action to display error message
    }
    // TODO invoke hide loading action
}

export function* watchGetPokemon() {
    yield takeEvery(pokeActionTypes.GET_POKEMON, getPokemonSaga);
}
