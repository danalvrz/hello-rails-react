import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetingReducer';

const reducer = {
  greeting: greetingReducer,
};

const store = configureStore({
  reducer,
});

export default store;