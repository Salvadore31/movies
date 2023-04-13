import { createAction, createReducer } from "@reduxjs/toolkit"

const state = {
    homePageFilms: []
}

export const getHomePageFilms = createAction("GET_HOME_PAGE_FILMS")
export default createReducer(state, {
    [getHomePageFilms]: (state, action) => {
        state.homePageFilms = action.payload
    }

})

