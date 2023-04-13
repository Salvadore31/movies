import { combineReducers, configureStore } from "@reduxjs/toolkit";
import RandomFilm from "./Reducers/RandomFilm";
import HomePageFilms from "./Reducers/HomePageFilms";
import HomePageSeries from "./Reducers/HomePageSeries";

const rootReducer = combineReducers({
    randomFilm: RandomFilm,
    homePageFilms: HomePageFilms,
    homePageSeries: HomePageSeries
})


export const store = configureStore({
    reducer: rootReducer
})