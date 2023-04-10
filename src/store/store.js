import { combineReducers, configureStore } from "@reduxjs/toolkit";
import RandomFilm from "./Reducers/RandomFilm";

const rootReducer = combineReducers({
    randomFilm: RandomFilm
})


export const store = configureStore({
    reducer: rootReducer
})