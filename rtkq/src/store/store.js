import { configureStore} from "@reduxjs/toolkit";
import itemReducer from "./items/item.slice.js";
import {itemApi} from "./api/api.js";
import {setupListeners} from "@reduxjs/toolkit/query";


export const store = configureStore({
    reducer: {
        [itemApi.reducerPath] : itemApi.reducer,
        items: itemReducer
    },
    // devTools: true,
    // preloadedState
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(itemApi.middleware)
})
setupListeners(store.dispatch);