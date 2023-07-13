import { pokeActionTypes } from '../constants/pokeActionTypes';
import { PokeReducerActions } from '../actions/pokeActions';

const reducer = (state = {}, action: PokeReducerActions) => {
    switch (action.type) {
        case pokeActionTypes.STORE_POKEMON:
            return {
                ...state,
                pokemon: action.pokemon
            };
        default:
            return state;
    }
};

export default reducer;