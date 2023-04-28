import {combineReducers, configureStore} from "@reduxjs/toolkit";
import itemReducer from "./items/item.slice.js";

const rootReducer = combineReducers({
    items: itemReducer,
})


export const store = configureStore({
    reducer: rootReducer,
    // devTools: true,
    // preloadedState
})