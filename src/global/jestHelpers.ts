import { Action } from 'redux';
import { runSaga, Saga } from 'redux-saga';
import { AppState } from '../constants/globalTypes';
import { pokeInitialState } from '../reducers/pokeReducers';

const mockGetState = (): AppState => ({
    poke: pokeInitialState
});

export const recordSaga = async (saga: any, initialAction: any, getState = mockGetState) => {
    const dispatched: any = [];

    await runSaga({ dispatch: (action) => dispatched.push(action), getState }, saga, initialAction).toPromise();

    return dispatched;
};
