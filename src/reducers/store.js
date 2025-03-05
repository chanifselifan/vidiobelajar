import { configureStore } from '@reduxjs/toolkit';
import firebaseReducer from './firebaseSlice';
import filterReducer from './filterSlice';

const store = configureStore({
  reducer: {
    firebase: firebaseReducer,
    filter: filterReducer,
  },
});

export default store;
