import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/Cartslice';
import modelReducer from '../reducers/Modelslice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    model: modelReducer,
  },
});

export default store;
