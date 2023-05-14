import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers :{
        addItem:(state, action) =>{
            const recipeId = action.payload;
            state.push(action.payload)
        },
    }

})

export const {addItem} = itemSlice.actions;
export default itemSlice.reducer;