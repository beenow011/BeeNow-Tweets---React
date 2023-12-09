import {configureStore} from '@reduxjs/toolkit';
import tweetReducer from '../features/tweetslice'

export const store = configureStore({
    reducer: tweetReducer
})