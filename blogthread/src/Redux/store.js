import { configureStore } from '@reduxjs/toolkit';
import likesReducer from './likesCounterSlice'

const store=configureStore({
    reducer:{
        likesCount:likesReducer
    }
});

export default store;