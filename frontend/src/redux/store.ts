import { configureStore } from '@reduxjs/toolkit';
import tokenSliceReducer from './tokenSlice';

export const store = configureStore({
  reducer: {
    token: tokenSliceReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
