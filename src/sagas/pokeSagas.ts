import { Pokedex } from "pokenode-ts"
import { call, put, takeLatest } from 'redux-saga/effects'
import { storePokedexesAction } from "../actions/pokeActions";
import { getPokedexesRequest } from "../api/pokeApi"
import { pokeActionTypes } from "../constants/pokeActionTypes";

export function* getPokedexesSaga(idOrName: any) {
    // TODO invoke some sort of loading action

    try {
        const pokedex: Pokedex = yield call(getPokedexesRequest, idOrName);
        yield put(storePokedexesAction(pokedex));
    } catch (error) {
        console.error('Error trying to get Pokedex', error);
        // TODO invoke action to display error message
    }
    // TODO invoke hide loading action
}

export function* watchGetPokedexes() {
    yield takeLatest(pokeActionTypes.GET_POKEDEXES, getPokedexesSaga);
}