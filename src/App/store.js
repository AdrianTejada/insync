import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Slices/todoSlice';
import themeReducer from '../Slices/themeSlice'

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        theme: themeReducer
    },
});