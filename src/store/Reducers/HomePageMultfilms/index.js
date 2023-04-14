import { createAction, createReducer } from "@reduxjs/toolkit"

const state = {
    homePageMultfilms: []
}

export const getHomePageMultfilms = createAction("GET_HOME_PAGE_MULTFILMS")
export default createReducer(state, {
    [getHomePageMultfilms]: (state, action) => {
        state.homePageMultfilms = action.payload
    }

})