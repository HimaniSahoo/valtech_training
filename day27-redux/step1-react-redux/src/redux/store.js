//store

import {legacy_createStore as createStore, combineReducers} from "redux"
import { heroReducer } from "./hero/hero.reducers"
import { movieReducer } from "./movie/movie.reducers";

let rootReducer = combineReducers({
    heroes : heroReducer,
    movies : movieReducer
})

const store = createStore(rootReducer)

export default store;