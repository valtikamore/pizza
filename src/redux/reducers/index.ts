import {createStore , combineReducers } from "redux";
import filtersReducer from './filters'
import pizzasReducer from './pizzas'

const rootReducer = combineReducers({
    filters :filtersReducer,
    pizzas :pizzasReducer ,
})

export default rootReducer

export type RootReducer = ReturnType<typeof rootReducer>;
