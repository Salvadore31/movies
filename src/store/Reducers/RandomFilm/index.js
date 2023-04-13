import { createAction, createReducer } from "@reduxjs/toolkit"

const state = {
    randomFilm: {}
}

export const getRandomFilm = createAction("GET_RANDOM_FILM")

export default createReducer(state, {
    [getRandomFilm]: (state, action) => {
        state.randomFilm = action.payload
    }
})