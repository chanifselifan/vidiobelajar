import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';

const store = configureStore({
    reducer: {
        filter: filterReducer, // Pastikan reducer ini sesuai dengan state yang digunakan
    },
});

export default store;
