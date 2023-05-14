import {combineReducers, configureStore} from "@reduxjs/toolkit";
import itemReducer from "./items/item.slice.js";
import {itemApi} from "./api/api.js";
import {setupListeners} from "@reduxjs/toolkit/query";
import userReducer from "./user/user.slice"

const rootReducer = combineReducers({

    items: itemReducer,
    user: userReducer,
    [itemApi.reducerPath]: itemApi.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: import.meta.env.NODE_ENV !== 'production',
    // preloadedState
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(itemApi.middleware)
})
setupListeners(store.dispatch);