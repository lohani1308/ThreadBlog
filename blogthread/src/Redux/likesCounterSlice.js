import { createSlice } from '@reduxjs/toolkit';

const likesCounterSlice=createSlice({
    name:'likesCounter',
    initialState:0,

    reducers:{
        increment:(state)=>state+1
    },
});

const { actions,reducer }=likesCounterSlice;

export const { increment }=actions;
export default reducer;