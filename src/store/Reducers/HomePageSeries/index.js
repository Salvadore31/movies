import { createAction, createReducer } from "@reduxjs/toolkit"

const state = {
    homePageSeries: []
}

export const getHomePageSeries = createAction("GET_HOME_PAGE_SERIES")
export default createReducer(state, {
    [getHomePageSeries]: (state, action) => {
        state.homePageSeries = action.payload
    }

})
