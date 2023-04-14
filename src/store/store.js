import { combineReducers, configureStore } from "@reduxjs/toolkit";
import RandomFilm from "./Reducers/RandomFilm";
import HomePageFilms from "./Reducers/HomePageFilms";
import HomePageSeries from "./Reducers/HomePageSeries";
import HomePageMultfilms from "./Reducers/HomePageMultfilms";

const rootReducer = combineReducers({
    randomFilm: RandomFilm,
    homePageFilms: HomePageFilms,
    homePageSeries: HomePageSeries,
    homePageMultfilms: HomePageMultfilms
})


export const store = configureStore({
    reducer: rootReducer
})