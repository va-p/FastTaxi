import navigationReducer from './slices/navigationSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { navigation: navigationReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;