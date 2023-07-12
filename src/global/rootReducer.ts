// TODO update redux with @reduxjs/toolkit
import { combineReducers } from "redux";

import pokeReducers from '../reducers/pokeReducers';

const rootReducer = combineReducers({
    pokeReducers
    // TODO add more reducers
});

export default rootReducer;